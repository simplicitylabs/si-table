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

            scope.next = function() {
                if (scope.params.offset + scope.params.limit < scope.params.total) {
                    scope.params.offset += scope.params.limit;
                }
            };

            scope.previous = function() {
                if (scope.params.offset > 0) {
                    scope.params.offset -= scope.params.limit;
                }
            };

            scope.setPage = function(page) {
                scope.params.offset = (page - 1) * scope.params.limit;
            };

            scope.first = function() {
                scope.params.offset = 0;
            };

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
