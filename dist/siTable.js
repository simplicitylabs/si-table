(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('siTable.config', [])
    .value('siTable.config', {
        debug: true
    });

// Modules
angular.module('siTable.directives', []);
angular.module('siTable.filters', []);
angular.module('siTable',
    [
        'siTable.config',
        'siTable.directives',
        'siTable.filters',
    ]);
angular.module('siTable.directives').directive('siTable', function($compile) {
    return {
        restrict: 'A',
        scope: true,
        terminal: true,
        transclude: true,
        priority: 1500, // higher than ng-repeat
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.paginationParams = {
                offset: 0,
                maxShowPages: 10,
                limit: Infinity,
            };

            $scope.sortingParams = {};

            $attrs.$observe('pagination', function(pagination) {
                if (pagination) {
                    $scope.paginationParams.limit = parseInt(pagination, 10);
                }
            });

            $attrs.$observe('paginationLength', function(paginationLength) {
                if (paginationLength) {
                    $scope.paginationParams.maxShowPages = paginationLength;
                }
            });

            $scope.$watch('repeatExpression', function(repeatExpression) {
                var match = repeatExpression.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                var rhs = match[2];
                items = $scope.$eval(rhs);
                $scope.paginationParams.total = items.length;
            }, true);

            $scope.$watch('sortingParams', function(sortingParams) {
                var sortArray = [];
                for (var key in sortingParams) {
                    if (sortingParams[key] === 'desc') {
                        sortArray.push('-' + key);
                    } else {
                        sortArray.push(key);
                    }
                }
                $scope.sortArray = sortArray;
                $scope.paginationParams.offset = 0; // Reset pagination
            }, true);
        },
        link: function(scope, element, attrs, controller, transclude) {
            transclude(scope, function(clones) {
                element.append(clones);

                if (attrs.pagination) {
                    element.after($compile('<si-table-pagination params="paginationParams"/>')(scope));
                }
            });
        }
    };
});
angular.module('siTable.directives').directive('siTablePagination', function() {
    return {
        restrict: 'E',
        scope: {
            params: '='
        },
        template: '\
            <ul class="pagination">\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="first()">&laquo;&laquo;</a>\
                </li>\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="previous()">&laquo;</a>\
                </li>\
                <li ng-repeat="page in showPages" ng-class="{active: currPage === page}">\
                    <a href ng-click="setPage(page)">{{ page }}</a>\
                </li>\
                <li ng-class="{disabled: params.offset + params.limit >= params.total}">\
                    <a href ng-click="next()">&raquo;</a>\
                </li>\
                <li ng-class="{disabled: params.offset + params.limit >= params.total}">\
                    <a href ng-click="last()">&raquo;&raquo;</a>\
                </li>\
            </ul>',
        link: function(scope, element, attrs) {

            // Go to next page
            scope.next = function() {
                if (scope.params.offset + scope.params.limit < scope.params.total) {
                    scope.params.offset += scope.params.limit;
                }
            };

            // Go to previous page
            scope.previous = function() {
                if (scope.params.offset > 0) {
                    scope.params.offset -= scope.params.limit;
                }
            };

            // Go to specific page
            scope.setPage = function(page) {
                scope.params.offset = (page - 1) * scope.params.limit;
            };

            // Go to first page
            scope.first = function() {
                scope.params.offset = 0;
            };

            // Go to last page
            scope.last = function() {
                scope.setPage(scope.maxPage);
            };

            // Create a sliding window of pages around the current page. There
            // should always be `params.maxShowPages` page numbers showing.
            scope.$watch('params', function(params) {
                var curr = Math.floor(params.offset / params.limit),
                    max = Math.floor(params.total / params.limit),
                    windowSide = Math.floor(params.maxShowPages / 2),
                    windowMin, windowMax;

                if (curr - windowSide < 0) {
                    windowMin = 0;
                    windowMax = 2 * windowSide;
                } else if (curr + windowSide > max) {
                    windowMax = max;
                    windowMin = max - 2 * windowSide;
                } else {
                    windowMin = curr - windowSide;
                    windowMax = curr + windowSide;
                }

                windowMin = Math.max(0, windowMin);
                windowMax = Math.min(max + 1, windowMax);

                var showPages = [windowMax - windowMin];
                for (var i = 0; i <= windowMax - windowMin; i++) {
                    showPages[i] = windowMin + i + 1;
                }

                scope.maxPage = max + 1;
                scope.currPage = curr + 1;
                scope.showPages = showPages;
            }, true);
        }
    };
});
angular.module('siTable.directives').directive('th', function($compile) {
    var condTemplate = '\
        <a href="" class="sort" ng-class="{\
                \'sort-asc\': sortingParams[sortBy] === \'asc\',\
                \'sort-desc\': sortingParams[sortBy] === \'desc\'\
            }">\
        </a>\
        <span class="sort-caret sort-asc"\
                ng-if="sortingParams[sortBy] === \'asc\'">&#9660;</span>\
        <span class="sort-caret sort-desc"\
                ng-if="sortingParams[sortBy] === \'desc\'">&#9650;</span>\
    ';
    return {
        restrict: 'E',
        require: '?^siTable',
        transclude: true,
        scope: true,
        controller: function($scope, $element, $attrs, $transclude) {

            // Transclude and add an <a> only if the header is sortable
            $transclude(function(clone) {
                if ($scope.sortingParams && $attrs.sortBy) {
                    $element.append($compile(condTemplate)($scope));
                    $element.find('a').append(clone);
                } else {
                    $element.append(clone);
                }
            });

            // Copy the sortBy attribute to scope
            $attrs.$observe('sortBy', function(sortBy) {
                $scope.sortBy = sortBy;
            });

        },
        link: function(scope, element, attrs, controller) {

            // Do as little damage as possible if this `TH` is not part of an
            // siTable
            if (!controller) {
                return;
            }

            // Tri-state toggle sorting parameter
            element.on('click', function() {
                var sortBy = attrs.sortBy;
                if (!sortBy) {
                    return;
                }
                if (scope.sortingParams[sortBy]) {
                    if (scope.sortingParams[sortBy] === 'asc') {
                        scope.sortingParams[sortBy] = 'desc';
                    } else {
                        delete scope.sortingParams[sortBy];
                    }
                } else {
                    scope.sortingParams[sortBy] = 'asc';
                }
                scope.$apply();
            });
        }
    };
});
angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '?^siTable',
        scope: false, // Share scope with siTable
        compile: function(tElement, tAttrs) {

            // Capture ngRepeat expression
            var repeatExpression = tAttrs.ngRepeat;

            // Inject sorting
            tAttrs.ngRepeat += ' | orderBy:sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';

            if (repeatExpression) {
                return function link(scope, element, attrs, controller) {

                    // Do as little damage as possible if this `TR` is not part
                    // of an siTable
                    if (!controller) {
                        return;
                    }

                    // Let the siTable controller know what's being repeated
                    scope.repeatExpression = repeatExpression;

                };
            }
        }
    };
});
angular.module('siTable.filters').filter('siPagination', function() {
    return function(input, params) {
        if (!params) {
            return input;
        }
        return input.slice(params.offset, params.offset + params.limit);
    };
});
})(window, document);