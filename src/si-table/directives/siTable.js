/**
 * SiTable (main) Directive
 *
 * Transforms boring tables to a bit cooler ones.
 */
angular.module('siTable.directives').directive('siTable', function() {
    return {
        restrict: 'A',
        scope: {
            sortArray: '='
        },
        controller: function($scope) {
            var self = this;

            $scope.paginationParams = {
                offset: 0,
                limit: Infinity,
            };
            this.paginationParams = $scope.paginationParams;

            this.sortingParams = {
                sortArray: [],
            };


            // $scope.$watch(function() {
            //     return self.sortingParams;
            // }, function(sortingParams) {
            //     var sortArray = [];
            //     for (var key in sortingParams) {
            //         if (sortingParams[key] === 'desc') {
            //             sortArray.push('-' + key);
            //         } else {
            //             sortArray.push(key);
            //         }
            //     }
            //     self.sortingParams.sortArray = sortArray;
            //     $scope.paginationParams.offset = 0; // Reset pagination
            // }, true);
        }
    };
});
