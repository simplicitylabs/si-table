/**
 * SiTable (main) Directive
 *
 * Transforms boring tables to a bit cooler ones.
 */
angular.module('siTable.directives').directive('siTable', function() {
    return {
        restrict: 'A',
        scope: {
            sortArray: '='
        },
        controller: function($scope) {
            var self = this;

            this.paginationParams = {
                offset: 0,
                limit: Infinity,
            };

            this.sortingParams = {
                sortArray: [],
            };
        }
    };
});
