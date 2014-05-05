/**
* Pagination filter
*
* Responsible for making sure we display only the items which the pagination
* params dictate.
*
* NOTE: The filter also *writes* to `params.total`, sniffing out the total
* numbers of items before pagination, which is useful for generating the
* pagination directive. It only does so if the `remote` parameter on the
* pagniation parameters is not set.
*/
angular.module('siTable.filters').filter('siPagination', function() {
  return function(input, params) {
    if (!params || params.remote) {
      return input;
    }
    if (input) {
      params.total = input.length;
    }
    return input && input.length ?
      input.slice(params.offset, params.offset + params.limit) : [];
  };
});
