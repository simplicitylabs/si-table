/**
 * Table Row Directive
 *
 * This replaces all TR elements, which is necessary to make the API as non-
 * intrusive as possible. It looks for an `ngRepeat` attribute, then adds
 * sorting and pagination.
 */
angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '?^siTable',
        scope: true,
        compile: function(tElement, tAttrs) {

            if (!tAttrs.ngRepeat) {
                return;
            }

            // Inject sorting
            tAttrs.ngRepeat += ' | orderBy:sortingParams.sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';

            return function link(scope, element, attrs, controller) {
                if (!controller) {
                    return;
                }

                scope.paginationParams = controller.paginationParams;

                scope.$watch('paginationParams.remote', function(remote) {
                    if (remote) {
                        scope.sortingParams = {};
                    } else {
                        scope.sortingParams = controller.sortingParams;
                    }
                });
            };
        }
    };
});
