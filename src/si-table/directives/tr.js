/**
 * Table Row Directive
 *
 * This replaces all TR elements, which is necessary to make the API as non-
 * intrusive as possible. It looks for an `ngRepeat` attribute, then adds
 * sorting and pagination.
 *
 * @TODO: This might interfer with trs which should not be tampered with!!
 */
angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '^siTable',
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
                scope.paginationParams = controller.paginationParams;
                scope.sortingParams = controller.sortingParams;
            };
        }
    };
});
