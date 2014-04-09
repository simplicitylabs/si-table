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
        require: '?^siTable',
        compile: function(tElement, tAttrs) {

            if (!tAttrs.ngRepeat) {
                return;
            }

            // Inject sorting
            tAttrs.ngRepeat += ' | orderBy:sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';
        }
    };
});
