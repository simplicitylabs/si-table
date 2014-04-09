/**
 * Table Header Directive
 *
 * Add sorting interface to TH elements which have the `sortBy` attribute on
 * them.
 */
angular.module('siTable.directives').directive('sortBy', function() {
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        scope: true,
        template: '\
            <th class="sort" ng-click="sort()" ng-class="{\
                    \'sort-asc\': sortingParams[sortBy] === \'asc\',\
                    \'sort-desc\': sortingParams[sortBy] === \'desc\'\
                }">\
                <a href ng-transclude></a>\
                <span class="sort-caret sort-asc"\
                        ng-if="sortingParams[sortBy] === \'asc\'">&#9660;</span>\
                <span class="sort-caret sort-desc"\
                        ng-if="sortingParams[sortBy] === \'desc\'">&#9650;</span>\
            </th>',
        link: function(scope, element, attrs) {

            attrs.$observe('sortBy', function(sortBy) {
                scope.sortBy = sortBy;
            });

            scope.sort = function() {
                var sortBy = attrs.sortBy;
                if (!sortBy || !scope.sortingParams) {
                    return;
                }
                if (scope.sortingParams[sortBy]) {
                    if (scope.sortingParams[sortBy] === 'asc') {
                        scope.sortingParams[sortBy] = 'desc';
                    } else {
                        delete scope.sortingParams[sortBy];
                    }
                } else {
                    scope.sortingParams[sortBy] = 'asc';
                }
            };

        }
    };
});
