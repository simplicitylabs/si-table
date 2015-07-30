/**
* SiTable (main) Directive
*
* The directive adds a controller to the table element, which can be used in
* child directives for communication.
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
        remote: false,
        firstText: 'First',
        lastText: 'Last',
        previousText: 'Previous',
        nextText: 'Next'
      };

      this.sortingParams = {
        sortArray: [],
        single: false
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
    }
  };
});
