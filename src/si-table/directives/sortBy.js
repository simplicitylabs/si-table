/**
* SortBy Directive
*
* Add sorting interface to TH elements which have the `sortBy` attribute on
* them. The directive accepts the parameter `sortBy`, which should correspond
* to the key on the table items on which to sort.
*
* Suppose the items look like this:
*
*     {
*       name: 'Mikael',
*       age: 25
*     }
*
* then use the `sortBy attribute like the following, in order to make the name-
* column sortable:
*
*     <th sortBy="name">Name</th>
*
* The directive is required to be on a child of an siTable, as it communicates
* with the siTable controller.
*/
angular.module('siTable.directives').directive('sortBy', function($rootScope) {
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
    ng-if="state === \'desc\'">&#9660;</span>\
    <span class="sort-caret sort-desc"\
    ng-if="state === \'asc\'">&#9650;</span>\
    </th>',
    link: function(scope, element, attrs, controller) {

      // Copy the sorting parameters from the siTable controller. Since
      // we're copying a reference, the parameters will stay in sync.
      var params = controller.sortingParams;

      // Observe the value of the `sortBy` attribute and update the
      // internal model
      attrs.$observe('sortBy', function(sortBy) {
        scope.sortBy = sortBy;
      });

      // If the sortInit attribute is set, then initialize sorting on this
      // header
      if (attrs.sortInit === 'desc') {
        params.sortArray.push('-' + attrs.sortBy);
        scope.state = 'desc';
      } else if (attrs.sortInit) {
        params.sortArray.push(attrs.sortBy);
        scope.state = 'asc';
      }

      scope.sort = function() {
        var sortBy = attrs.sortBy;
        if (!sortBy || !params) {
          return;
        }

        if (params.single) {
          $rootScope.$broadcast('resetSorting');
        }

        // Tri-state: ascending -> descending -> neutral, represented by
        // an array as per Angular's orderBy specification.

        // ascending -> descending
        if (params.sortArray.indexOf(sortBy) !== -1) {
          if (params.single) {
            params.sortArray = ['-' + sortBy];
          } else {
            params.sortArray[params.sortArray.indexOf(sortBy)] = '-' + sortBy;
          }
          scope.state = 'desc';

        // descending -> neutral
        } else if (params.sortArray.indexOf('-' + sortBy) !== -1) {
          if (params.single) {
            params.sortArray = [];
          } else {
            params.sortArray.splice(params.sortArray.indexOf('-' + sortBy), 1);
          }
          scope.state = '';

        // neutral -> ascending
        } else {
          if (params.single) {
            params.sortArray = [sortBy];
          } else {
            params.sortArray.push(sortBy);
          }
          scope.state = 'asc';
        }
      };

      scope.$on('resetSorting', function(event) {
        scope.state = '';
      });

    }
  };
});
