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
angular.module('siTable.directives').directive('siTable', function() {
    return {
        restrict: 'A',
        scope: {
            sorting: '=?'
        },
        controller: function($scope) {
            var self = this;

            this.paginationParams = {
                offset: 0,
                limit: Infinity,
                remote: false
            };

            this.sortingParams = {
                sortArray: [],
            };

            // Copy sortArray to scope binding
            $scope.$watch(function() {
                return self.sortingParams.sortArray;
            }, function(sortArray) {
                if (!angular.isArray($scope.sorting)) {
                    $scope.sorting = [];
                }
                $scope.sorting.splice(0, $scope.sorting.length);
                for (var i = 0; i < sortArray.length; i++) {
                    $scope.sorting.push(sortArray[i]);
                }
            }, true);

            // DEBUGGING
            $scope.$watch(function() {
                return self.paginationParams.remote;
            }, function(remote) {
                if (remote === true) {
                    console.log('Table is now in REMOTE mode.');
                } else {
                    console.log('Table is now in LOCAL mode.');
                }
            });
        }
    };
});
/**
 * Pagination Directive
 *
 * Put this somewhere in side the table to add pagination to the table data.
 *
 * The
 */
angular.module('siTable.directives').directive('siTablePagination', function() {
    return {
        restrict: 'E',
        require: '^siTable',
        scope: {
            offset: '=?', // read-only
        },
        template: '\
            <ul class="pagination">\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="setPage(1)">First</a>\
                </li>\
                <li ng-class="{disabled: params.offset === 0}">\
                    <a href ng-click="setPage(currPage - 1)">Previous</a>\
                </li>\
                <li ng-repeat="page in showPages"\
                        ng-class="{active: currPage === page}">\
                    <a href ng-click="setPage(page)">{{ page }}</a>\
                </li>\
                <li ng-class="{disabled:\
                        params.offset + params.limit >= params.total}">\
                    <a href ng-click="setPage(currPage + 1)">Next</a>\
                </li>\
                <li ng-class="{disabled:\
                        params.offset + params.limit >= params.total}">\
                    <a href ng-click="setPage(maxPage)">Last</a>\
                </li>\
            </ul>',
        link: function(scope, element, attrs, controller) {
            var indices = 10;

            scope.params = controller.paginationParams;

            // Go to specific page
            scope.setPage = function(page) {
                if (page >= 1 && page <= scope.maxPage) {
                    scope.params.offset = (page - 1) * scope.params.limit;
                }
            };

            // Create a sliding window of pages around the current page. There
            // should always be `params.maxShowPages` page numbers showing.
            scope.$watch('params', function(params) {
                console.log(params);
                var curr = Math.floor(params.offset / params.limit),
                    max = Math.ceil(params.total / params.limit) - 1;

                var minIndex = Math.max(0, Math.min(
                        curr - Math.ceil(indices / 2),
                        max - indices + 1));

                var showPages = [];
                for (var i = minIndex, count = 0; i <= max &&
                        count < indices; count++) {
                    showPages.push(i + 1);
                    i++;
                }

                scope.maxPage = max + 1;
                scope.currPage = curr + 1;
                scope.showPages = showPages;

                scope.offset = params.offset;
                // if (angular.isObject(attrs.limit)) {
                //     scope.limit = params.limit;
                // }
            }, true);

            // scope.$watch('params.total', function() {
            //     scope.params.offset = 0;
            // });

            // Watch the `offset` attribute for external changes
            scope.$watch('offset', function(offset) {
                if (angular.isNumber(offset)) {
                    scope.params.offset = offset;
                }
            });

            // Watch the `total` attribute for external changes. Setting the
            // total explicitly puts the table in 'remote' mode, meaning it
            // it should display all the items available, and an external
            // mechanism should change the items when another page is selected.
            attrs.$observe('total', function(total) {
                if (!isNaN(parseInt(total, 10))) {
                    scope.params.total = parseInt(total, 10);
                    scope.params.remote = true;
                }
            });


            attrs.$observe('limit', function(limit) {
                if (!isNaN(parseInt(limit, 10))) {
                    scope.params.limit = parseInt(limit, 10);
                }
            });

            // Observe `indices` (number of indices shown)
            attrs.$observe('indices', function(_indices) {
                if (!isNaN(parseInt(_indices, 10))) {
                    indices = parseInt(_indices, 10);
                }
            });
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
        require: '^siTable',
        template: '\
            <th class="sort" ng-click="sort()" ng-class="{\
                    \'sort-asc\': state === \'asc\',\
                    \'sort-desc\': state === \'desc\'\
                }">\
                <a href ng-transclude></a>\
                <span class="sort-caret sort-asc"\
                        ng-if="state === \'asc\'">&#9660;</span>\
                <span class="sort-caret sort-desc"\
                        ng-if="state === \'desc\'">&#9650;</span>\
            </th>',
        link: function(scope, element, attrs, controller) {
            var params = controller.sortingParams;

            attrs.$observe('sortBy', function(sortBy) {
                scope.sortBy = sortBy;
            });

            scope.sort = function() {
                var sortBy = attrs.sortBy;
                if (!sortBy || !params) {
                    return;
                }

                // Tri-state: ascending -> descending -> neutral, represented by
                // an array as per Angular's orderBy specification.
                if (params.sortArray.indexOf(sortBy) !== -1) {
                    // ascending -> descending
                    params.sortArray[params.sortArray.indexOf(sortBy)] = '-' +
                            sortBy;
                    scope.state = 'desc';
                } else if (params.sortArray.indexOf('-' + sortBy) !== -1) {
                    // descending -> neutral
                    params.sortArray.splice(params.sortArray.indexOf('-' + sortBy), 1);
                    scope.state = '';
                } else {
                    // neutral -> ascending
                    params.sortArray.push(sortBy);
                    scope.state = 'asc';
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
            tAttrs.ngRepeat += ' | orderBy:sortingParams.sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';

            return function link(scope, element, attrs, controller) {
                scope.paginationParams = controller.paginationParams;
                scope.sortingParams = controller.sortingParams;
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
        if (!params || params.remote) {
            return input;
        }
        if (input) {
            params.total = input.length;
        }
        return input ?
                input.slice(params.offset, params.offset + params.limit) : [];
    };
});
})(window, document);