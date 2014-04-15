/**
 * Table Row Directive
 *
 * This replaces all TR elements, which is necessary to make the API as non-
 * intrusive as possible. It looks for an `ngRepeat` attribute, then adds
 * sorting and pagination.
 *
 * @TODO: Creates scope for other trs
 */
angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '?^siTable',
        scope: true,
        compile: function(tElement, tAttrs) {
            return {
                pre: function(scope, element, attrs, controller) {
                    if (controller) {
                        // If we got a contoller, inject sorting and pagination
                        attrs.ngRepeat += ' | orderBy:sortingParams.sortArray';
                        attrs.ngRepeat += ' | siPagination:paginationParams';
                    }
                },
                post: function(scope, element, attrs, controller) {
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
                }
            };
        }
    };
});
