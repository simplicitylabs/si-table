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

            scope.$watch('params', function(params) {
                var currPage = Math.floor(params.offset / params.limit) + 1;
                var maxPage = Math.floor(params.total / params.limit) + 1;
                var minShowIndex = Math.max(1, currPage - 5);
                var maxShowIndex = Math.min(maxPage + 1, currPage + 5);

                var showPages = [maxShowIndex - minShowIndex];
                for (var i = 0; i < maxShowIndex - minShowIndex; i++) {
                    showPages[i] = minShowIndex + i;
                }

                scope.maxPage = maxPage;
                scope.currPage = currPage;
                scope.showPages = showPages;
            }, true);
        }
    };
});
