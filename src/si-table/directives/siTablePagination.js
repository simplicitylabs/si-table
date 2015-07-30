/**
* Pagination Directive
*
* Put this somewhere in side the table to add pagination to the table data.
*
*     <table si-table>
*        ...
*       <tfoot>
*         <tr>
*           <td colspan="5">
*             <si-table-pagination limit="10" />
*           </td>
*         </tr>
*       </tfoot>
*     </table>
*
* The directive accepts the following attributes:
*
*  - `limit`: The number of items to show in any one page, at the maximum.
*  - `offset`: (two-way binding) The offset from 0 which is currently showed.
* This variable can be watched from the outside in order to load new items,
* for instance form an API endpoint.
*  - `total`: The tatal number of items available, over all pages. Use this
* attribute to inform the pagination directive about how many pages should be
* displayed in the paginator. NOTE: setting this attribute disables siTable's
* way of paginating. Only use it if the items for any one page is loaded
* asynchronously.
*/
angular.module('siTable.directives').directive('siTablePagination', function() {
  return {
    restrict: 'AE',
    require: '^siTable',
    scope: {
      offset: '=?' // read-only
    },
    template: '\
    <ul class="pagination" ng-show="params.total > params.limit">\
    <li ng-class="{disabled: params.offset === 0}">\
    <a href ng-click="setPage(1)">{{ params.firstText }}</a>\
    </li>\
    <li ng-class="{disabled: params.offset === 0}">\
    <a href ng-click="setPage(currPage - 1)">{{ params.previousText }}</a>\
    </li>\
    <li ng-repeat="page in showPages"\
    ng-class="{active: currPage === page}">\
    <a href ng-click="setPage(page)">{{ page }}</a>\
    </li>\
    <li ng-class="{disabled:\
      params.offset + params.limit >= params.total}">\
      <a href ng-click="setPage(currPage + 1)">{{ params.nextText }}</a>\
      </li>\
      <li ng-class="{disabled:\
        params.offset + params.limit >= params.total}">\
        <a href ng-click="setPage(maxPage)">{{ params.lastText }}</a>\
        </li>\
        </ul>',
    link: function(scope, element, attrs, controller) {
      var indices = 10;

      // Copy parameters from controller. Since we're copying a reference,
      // the two objects stay in sync.
      scope.params = controller.paginationParams;

      // Go to specific page, but only if it is a valid page based on the
      // current parameters in `param`.
      scope.setPage = function(page) {
        if (page >= 1 && page <= scope.maxPage) {
          scope.params.offset = (page - 1) * scope.params.limit;
        }
      };

      // Create a sliding window of pages around the current page. There
      // should always be `params.maxShowPages` page numbers showing.
      scope.$watch('params', function(params) {
        var curr = Math.floor(params.offset / params.limit),
        max = Math.ceil(params.total / params.limit) - 1;

        var minIndex = Math.max(0, Math.min(
          curr - Math.ceil(indices / 2),
          max - indices + 1));

        var showPages = [];
        for (var i = minIndex, count = 0; i <= max && count < indices; count++) {
          showPages.push(i + 1);
          i++;
        }

        // Update variables for use in template
        scope.maxPage = max + 1;
        scope.currPage = curr + 1;
        scope.showPages = showPages;

        // Update API variables
        scope.offset = params.offset;
      }, true);

      // If the total number of items changes, revert the offset to 0.
      // The main use is for filtering, where the user would expect this
      // behavior.
      scope.$watch('params.total', function() {
        scope.params.offset = 0;
      });

      // Watch the `total` attribute for external changes. Setting the
      // total explicitly puts the table in 'remote' mode, meaning it
      // it should display all the items available, and an external
      // mechanism should change the items when another page is selected.
      attrs.$observe('total', function(total) {
        if (!isNaN(parseInt(total, 10))) {
          scope.params.total = parseInt(total, 10);
          scope.params.remote = true;
        }
      });

      // Watch the `limit` attribute for external changes. The parameter
      // is used to decide who many items are shown in a page.
      attrs.$observe('limit', function(limit) {
        if (!isNaN(parseInt(limit, 10))) {
          scope.params.limit = parseInt(limit, 10);
        }
      });

      // Watch the `indices` attribute for external changes. The parameter
      // is used to decide how many indices is shown in the paginator at
      // maximum.
      attrs.$observe('indices', function(_indices) {
        if (!isNaN(parseInt(_indices, 10))) {
          indices = parseInt(_indices, 10);
        }
      });

      // Watch the `firstText` attribute for external changes. The
      // parameter is used as text for First page button
      attrs.$observe('firstText', function(firstText) {
        if (firstText) {
          scope.params.firstText = firstText;
        }
      });

      // Watch the `lastText` attribute for external changes. The
      // parameter is used as text for Last page button
      attrs.$observe('lastText', function(lastText) {
        if (lastText) {
          scope.params.lastText = lastText;
        }
      });

      // Watch the `previousText` attribute for external changes. The
      // parameter is used as text for Previous page button
      attrs.$observe('previousText', function(previousText) {
        if (previousText) {
          scope.params.previousText = previousText;
        }
      });

      // Watch the `nextText` attribute for external changes. The
      // parameter is used as text for Next page button
      attrs.$observe('nextText', function(nextText) {
        if (nextText) {
          scope.params.nextText = nextText;
        }
      });
    }
  };
});
