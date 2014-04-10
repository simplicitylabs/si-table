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
