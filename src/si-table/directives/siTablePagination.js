/**
 * Pagination Directive
 *
 * This is injected below siTables and renders a pagination list.
 */
angular.module('siTable.directives').directive('siTablePagination', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '^siTable',
        scope: {
            offset: '=',
            total: '=',
            limit: '='
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

            // Observe `indices` (number of indices shown)
            attrs.$observe('indices', function(_indices) {
                if (!isNaN(parseInt(_indices, 10))) {
                    indices = parseInt(_indices, 10);
                }
            });

            // Go to specific page
            scope.setPage = function(page) {
                if (page >= 1 && page <= scope.maxPage) {
                    scope.params.offset = (page - 1) * scope.params.limit;
                }
            };

            // Create a sliding window of pages around the current page. There
            // should always be `params.maxShowPages` page numbers showing.
            scope.$watch('params', function(params) {
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

                if (angular.isDefined(scope.offset)) {
                    scope.offset = params.offset;
                }

                if (angular.isDefined(scope.total)) {
                    scope.total = params.total;
                }
            }, true);

            scope.$watch('params.total', function() {
                scope.params.offset = 0;
            });

            scope.$watch('offset', function(offset) {
                if (angular.isNumber(offset)) {
                    scope.params.offset = offset;
                }
            });

            scope.$watch('total', function(total) {
                if (angular.isNumber(total)) {
                    scope.params.total = total;
                }
            });

            scope.$watch('limit', function(limit) {
                if (angular.isNumber(limit)) {
                    scope.params.limit = limit;
                }
            });
        }
    };
});
