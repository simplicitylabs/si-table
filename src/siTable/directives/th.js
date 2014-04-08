angular.module('siTable.directives').directive('th', function() {
    return {
        restrict: 'E',
        require: '?^siTable',
        scope: false,
        link: function(scope, element, attrs, controller) {

            // Do as little damage as possible if this `TH` is not part of an
            // siTable
            if (!controller) {
                return;
            }

            // Tri-state toggle sorting parameter
            element.on('click', function() {
                var sortBy = attrs.sortBy;
                if (!sortBy) {
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
                scope.$apply();
            });

            // Add classes to the `TH` according to its state
            scope.$watch(function() {
                if (!scope.sortingParams || !attrs.sortBy) {
                    return;
                }
                return scope.sortingParams[attrs.sortBy];
            }, function(dir) {
                if (dir === 'asc') {
                    element.removeClass('sort-desc');
                    element.addClass('sort-asc');
                } else if (dir === 'desc') {
                    element.addClass('sort-desc');
                    element.removeClass('sort-asc');
                } else {
                    element.removeClass('sort-desc');
                    element.removeClass('sort-asc');
                }
            });
        }
    };
});
