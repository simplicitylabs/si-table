angular.module('siTable.directives').directive('tr', function() {
    return {
        restrict: 'E',
        priority: 1001,
        require: '?^siTable',
        scope: false, // Share scope with siTable
        compile: function(tElement, tAttrs) {

            // Capture ngRepeat expression
            var repeatExpression = tAttrs.ngRepeat;

            // Inject sorting
            tAttrs.ngRepeat += ' | orderBy:sortArray';

            // Inject pagination
            tAttrs.ngRepeat += ' | siPagination:paginationParams';

            if (repeatExpression) {
                return function link(scope, element, attrs, controller) {

                    // Do as little damage as possible if this `TR` is not part
                    // of an siTable
                    if (!controller) {
                        return;
                    }

                    // Let the siTable controller know what's being repeated
                    scope.repeatExpression = repeatExpression;

                };
            }
        }
    };
});
