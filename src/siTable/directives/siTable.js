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
                limit: Infinity,
            };

            $scope.sortingParams = {};

            $attrs.$observe('pagination', function(pagination) {
                if (pagination) {
                    $scope.paginationParams.limit = parseInt(pagination, 10);
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
