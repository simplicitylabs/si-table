SiTable for AngularJS
=====================

SiTable is a small, simple, clean and non-intrusive table directive for Angular.
It assumes the table data is shown using some `ng-repeat` directive, and does
not use a scope-polluting "configuration object" to create its functionality,
which includes:

 * **Pagination**: pagination of the table with an configurable number of items
 shown per page, and a configurable number of indices shown in the paginator.
 * **Sorting**: Table headers can be clickable to support sorting on some
 property of the repeated data.

The following functionality is easily obtained using clean and simple "Angular
ways":

 * **Filtering**: Use arbitrary Angular filters to filter your data.
 * **Formatting**: Add formatting to rows, cells or data through filters or
 other directives, just like you would without SiTable.
 * **Remote data**: Because SiTable does not use a configuration object or alter
 your scope, the data can be obtained from arbitrary sources and even updated at
 arbitrary times. This means fetching data from remote sources is *super easy*.

### Philosophy

SiTable should have a clear, clean, simple and declarative API. It should not
add functionality which can be best solved by other means. It should simplify
creating large tables without requiring large code changes.

## Examples

 - [local data](http://simplicitylabs.github.io/si-table/)
 - [remote pagination](http://simplicitylabs.github.io/si-table/remote.html)

## Installation

 - With Bower: `bower install si-table --save`
 - Use `si-table.js` or `si-table.min.js` in the `dist` folder.

## Usage

To get started, just add `si-table` as an attribute to the table you want to
convert:

```html
<table si-table>
    <tr>
        <th>Username</th>
        <th>Real Name</th>
    </tr>
    <tr si-sortable ng-repeat="user in users">
        <td>{{ user.username }}</td>
        <td>{{ user.realName }}</td>
    </tr>
</table>
```

Also add `siTable` as a dependency to your app:

```javascript
angular.module('myApp', [
  'siTable'
]);
```

*Nothing will appear to have changed at this point.*

### Pagination

Add pagination to your table by placing an `si-table-pagination` element
**inside** the table. A `limit` attribute decides the number of elements to show
per page.

```html
<tfoot>
    <tr>
        <td colspan="5">
            <si-table-pagination limit="10" />
        </td>
    </tr>
</tfoot>
```

The table will now be paginated, and a paginator with links to page indices will
appear under the table. You can also specify the number of index links this
paginator should have, using an `indeces` attribute:

```html
<si-table-pagination limit="10" indices="3" />
```

The paginator will now show 3 indices (numbered links in the paginator).

To customize paginator buttons use `first-text`, `last-text`, `previous-text`
and `last-text` parameters:

```html
<si-table-pagination
    limit="10"
    first-text="First page"
    last-text="Last page"
    previous-text="«"
    next-text="»" />
```
### 'Select all' checkbox

'Select all' checkbox toggles `selected` property of each array element
on current page.

It automatically becomes checked when all array elements on current page have 
`selected: true` and unchecked when at least one of array elements on current
page have `selected: false`.

```html
<table si-table>
    <tr>
        <th>Email address</th>
        <th><input type="checkbox" si-select-all></th>
    </tr>
    <tr si-sortable ng-repeat="email in emails">
        <td>{{ email.email }}</td>
        <td><input type="checkbox" ng-model="email.selected"></td>
    </tr>
</table>
```

### Sorting

Add sorting to a column by specifying the key which the data should be sorted
on, in a `sort-by` attribute on the appropriate `th` element:

```html
<th sort-by="username">Username</th>
<th sort-by="realname">Real name</th>
```

You can also sort on some nested key using "dot notation":

```html
<th sort-by="roles.administrator">Is Administrator?</th>
```

By default, `si-table` orders data by multiple columns. If you want to change
this behavior to single-column sorting, just add `="single"` to `si-sortable`
directive:

```html
<tr si-sortable="single" ng-repeat="order in orders">
```

Set initial sorting with a `sort-init` attribute:

```html
<th sort-by="username" sort-init="desc">Username</th>
```

The value of `sort-init` should be either `asc` for ascending order, or `desc`
for descending order.

### Filtering

Filtering is not a part of siTable, but can be achieved by adding a filter on
the `tr`'s `ng-repeat` directive:

```html
<tr si-sortable ng-repeat="user in users | myArbitraryFilter">
```

For example, Angular's built-in `filter` can be used to filter on all features
of the object. Suppose somewhere in the template, an `input` box is added:

```html
<input type="text" ng-init="userFilter = {}" ng-model="userFilter.$">
```

The filter can then be used:

```html
<tr si-sortable ng-repeat="user in users | filter:userFilter">
```

### Formatting

Formatting is not a part of siTable, but can be achieved in many ways. For
example:

```html
<!-- conditionally set a class for the `tr` -->
<tr si-sortable ng-repeat="user in users" ng-class="{admin: user.roles.administrator}">
    <!-- data formatting using filter -->
    <td>{{ user.username | lowercase }}</td>
    <!-- using a custom directive -->
    <td><user-badge user="user"/></td>
    <!-- using filter with ng-bind or ng-bind-html -->
    <td ng-bind-html="user.roles.administrator | checkmark"></td>
</tr>
```

### Remote Data Loaded Once

Fetching remote data is not done by siTable, but can be achieved in an arbitrary
way, for example by using `$http` and attaching the returned data to the scope:

```javascript
$http.get('/remote/data/users.json').then(function(users) {
    $scope.users = users;
});
```

This will load the data exactly once. Pagination and sorting will be done on the
already loaded data.

### Remote Pagination and Sorting

For large data sets or other reasons, it might make sense to do pagination and
sorting on some remote side. For this to work, SiTable needs to know the total
number of items in the collection. This information should be given to an
`si-table-pagination` element via the `total` parameter.

```html
<si-table-pagination limit="10" total="{{ params.total }}"
    offset="params.offset" />
```

where `params` is some object on the scope.

**Note:** Do not specify a `total` attribute unless pagination and sorting
should be done remotely.

The offset-attribute can be used to watch changes in the desired offset for
pagination. Offset is specified in number of items in the collection, s.t. the
maximum offset is equal to the `total - 1`.

**Note:** When the `total` attribute is specified, no pagination or sorting is
done on the client side. This is left to the remote source.

For the controller to know which parameters to sort by on the remote source,
use a `sorting` attribute on the `si-table` element:

```html
<table si-table sorting="params.sortBy">
```

Fetching of remote sources is up to the implementation of the controller. An
example is given below.

```javascript
angular.module('myApp').controller(function($scope, $http) {
  var limit = 10;
  var url = 'https://api.example.com/v1/items/';

  $scope.params = {};

  function getData() {
    $http.get(url, {
      params: {
        'offset': $scope.params.offset || 0,  // server-side pagination
        'limit': limit,
        'order_by': $scope.params.sortBy      // server-side sorting
      }
    }).then(function(ret) {
      $scope.total = ret.meta.total; // total items count from server
      $scope.items = ret.data;
    });
  }

  // Watch for changes, then load data
  $scope.$watch('params.offset', getData);
  $scope.$watch('params.sortBy', getData, true);
});
```

Full example implementation (without sorting) in
[example](http://simplicitylabs.github.io/si-table/remote.html).

**Tip:** Create a model with a method compatible with SiTable to keep your code
DRY.

When given full control over the way to fetch data, the developer is free to use
his library and model of choice, and can also optimize caching concerns.

### Styling

SiTable does not add any styling or require CSS files to be present. However, it
adds some hooks in the form of classes, so that styling can be done efficiently.

#### Paginator

The paginator is an unordered list (`ul`) of links, where the `ul` element has
a class called `paginator`.

```html
<ul class="paginator">
    <li><a href>1</a></li>
    <li><a href>2</a></li>
</ul>
```

This integrates nicely with Twitter Bootstrap.

#### Sortable column headers

Sortable column headers are put in an `a`-element (link), which has a class
`sort`. When active, it additionally has either the class `sort-asc` or
`sort-desc`, as appropriate.

## License

[MIT](http://opensource.org/licenses/MIT) © [Silicon Laboratories,
Inc.](http://www.silabs.com)
