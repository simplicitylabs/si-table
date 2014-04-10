/**
 * Pagination filter
 *
 * Responsible for making sure we display only the items which the pagination
 * params dictate.
 *
 * NOTE: The filter also *writes* to `params.total`, sniffing out the total
 * numbers of items before pagination, which is useful for generating the
 * pagination directive.
 */
angular.module('siTable.filters').filter('siPagination', function() {
    return function(input, params) {
        if (!params) {
            return input;
        }
        params.total = input ? input.length : 0;
        return input ?
                input.slice(params.offset, params.offset + params.limit) : [];
    };
});
