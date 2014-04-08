angular.module('siTable.filters').filter('siPagination', function() {
    return function(input, params) {
        if (!params) {
            return input;
        }
        return input.slice(params.offset, params.offset + params.limit);
    };
});
