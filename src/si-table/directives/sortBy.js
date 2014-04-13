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

            // Copy the sorting parameters from the siTable controller. Since
            // we're copying a reference, the parameters will stay in sync.
            var params = controller.sortingParams;

            // Observe the value of the `sortBy` attribute and update the
            // internal model
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
                    params.sortArray.splice(params.sortArray.indexOf('-' +
                            sortBy), 1);
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
