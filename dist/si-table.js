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
/**
 * SiTable (main) Directive
 *
 * Transforms boring tables to a bit cooler ones.
 */
angular.module('siTable.directives').directive('siTable', function($compile) {
    return {
        restrict: 'A',
        scope: {

        },
        transclude: true,
        replace: true,
        template: '<table ng-transclude></table>',
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.paginationParams = {
                offset: 0,
                maxShowPages: 10,
                limit: Infinity,
            };

            this.paginationParams = $scope.paginationParams;

            $attrs.$observe('pagination', function(pagination) {
                if (angular.isUndefined(pagination)) {
                    return;
                }
                $scope.paginationParams.limit = pagination ?
                        parseInt(pagination, 10) : 10;
            });

            $attrs.$observe('paginationLength', function(paginationLength) {
                if (paginationLength) {
                    $scope.paginationParams.maxShowPages = paginationLength;
                }
            });

            $scope.$watch('paginationParams.total', function() {
                $scope.paginationParams.offset = 0;
            });

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

            if (angular.isDefined($attrs.pagination)) {
                $element.after($compile('<si-table-pagination params="paginationParams"/>')($scope));
            }
        }
    };
});
/**
 * Pagination Directive
 *
 * This is injected below siTables and renders a pagination list.
 */
angular.module('siTable.directives').directive('siTablePagination', function() {
    return {
        restrict: 'E',
        scope: {
            params: '='
        },
        template: '\
            <ul class="pagination">\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="first()">First</a>\
                </li>\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="previous()">Previous</a>\
                </li>\
                <li ng-repeat="page in showPages"\
                        ng-class="{active: currPage === page}">\
                    <a href ng-click="setPage(page)">{{ page }}</a>\
                </li>\
                <li ng-class="{disabled:\
                            params.offset + params.limit >= params.total}">\
                    <a href ng-click="next()">Next</a>\
                </li>\
                <li ng-class="{disabled:\
                        params.offset + params.limit >= params.total}">\
                    <a href ng-click="last()">Last</a>\
                </li>\
            </ul>',
        link: function(scope, element, attrs) {

            // Go to next page
            scope.next = function() {
                if (scope.params.offset + scope.params.limit <
                            scope.params.total) {
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
                    max = Math.ceil(params.total / params.limit) - 1;

                var minIndex = Math.max(0, Math.min(
                        curr - Math.ceil(params.maxShowPages / 2),
                        max - params.maxShowPages + 1));

                var showPages = [];
                for (var i = minIndex, count = 0; i <= max &&
                        count < params.maxShowPages; count++) {
                    showPages.push(i + 1);
                    i++;
                }

                scope.maxPage = max + 1;
                scope.currPage = curr + 1;
                scope.showPages = showPages;
            }, true);
        }
    };
});
/**
 * Table Header Directive
 *
 * Add sorting interface to TH elements which have the `sortBy` attribute on
 * them. The scope adds parameters to an object `sortingParams` on the parent
 * scope, if it exists.
 */
angular.module('siTable.directives').directive('sortBy', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope: true,
        template: '\
            <th class="sort" ng-click="sort()" ng-class="{\
                    \'sort-asc\': sortingParams[sortBy] === \'asc\',\
                    \'sort-desc\': sortingParams[sortBy] === \'desc\'\
                }">\
                <a href ng-transclude></a>\
                <span class="sort-caret sort-asc"\
                        ng-if="sortingParams[sortBy] === \'asc\'">&#9660;</span>\
                <span class="sort-caret sort-desc"\
                        ng-if="sortingParams[sortBy] === \'desc\'">&#9650;</span>\
            </th>',
        link: function(scope, element, attrs) {

            attrs.$observe('sortBy', function(sortBy) {
                scope.sortBy = sortBy;
            });

            scope.sort = function() {
                var sortBy = attrs.sortBy;
                if (!sortBy || !scope.sortingParams) {
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
            };

        }
    };
});
/**
 * Table Row Directive
 *
 * This replaces all TR elements, which is necessary to make the API as non-
 * intrusive as possible. It looks for an `ngRepeat` attribute, then adds
 * sorting and pagination.
 *
 * @TODO: This might interfer with trs which should not be tampered with!!
 */
angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '^siTable',
        scope: true,
        compile: function(tElement, tAttrs) {

            if (!tAttrs.ngRepeat) {
                return;
            }

            // Inject sorting
            tAttrs.ngRepeat += ' | orderBy:sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';

            return function link(scope, element, attrs, controller) {
                scope.paginationParams = controller.paginationParams;
            };
        }
    };
});
/**
 * Pagination filter
 *
 * Responsible for making sure we display only the items which the pagination
 * params dictate.
 *
 * NOTE: The filter also *writes* to `params.total`, sniffing out the total
 * numbers of items before pagination, which is useful for generating the
 * pagination directive.
 */
angular.module('siTable.filters').filter('siPagination', function() {
    return function(input, params) {
        if (!params) {
            return input;
        }
        params.total = input ? input.length : 0;
        return input ?
                input.slice(params.offset, params.offset + params.limit) : [];
    };
});
})(window, document);