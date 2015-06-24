/**
* Select All Directive
*
* Checkbox which toggles 'selected' property of each array element
* on current page.
*
* Checkbox in table header automatically becomes checked when all
* array elements on current page have selected: true.
*
* Checkbox in table header automatically becomes unchecked when
* at least one of array elements on current page have selected: false.
*/
angular.module('siTable.directives').directive('siSelectAll', function() {
  return {
    restrict: 'A',
    scope: true,
    require: '^siTable',
    controller: function($scope, $element) {
      $scope.$element = $element[0];

      $element.on('change', function(e) {
        for (var i = 0; i < $scope.currentList.length; i++) {
          $scope.currentList[i].selected = e.target.checked;
        }
        $scope.$apply();
      });

      $scope.$watch('currentList', function() {
        if ($scope.currentList && $scope.currentList.length) {
          for (var i = 0; i < $scope.currentList.length; i++) {
            if (!$scope.currentList[i].selected) {
              $scope.$element.checked = false;
              return;
            }
          }
          $scope.$element.checked = true;
        } else {
          $scope.$element.checked = false;
        }
      }, true);
    }
  };
});
