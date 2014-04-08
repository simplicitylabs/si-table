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

## Usage

To get started, just add `si-table` as an attribute to the table you want to
convert:

    <table si-table>
        <tr>
            <th>Username</th>
            <th>Real Name</th>
        </tr>
        <tr ng-repeat="user in users">
            <td>{{ user.username }}</td>
            <td>{{ user.realName }}</td>
        </tr>
    </table>

*Nothing will appear to have changed at this point.*

### Pagination

Add pagination to your table by specifying a `pagination` attribute with an
optional page length on the table:

    <table si-table pagination="20">

The table will now be paginated, and a paginator with links to page indices will
appear under the table. You can also specify the number of index links this
paginator should have, using an `pagination-length` attribute:

    <table si-table pagination="20" paginator-length="10">

The paginator will now show 10 indices.

### Sorting

Add sorting to a column by specifying the key which the data should be sorted
on, in a `sort-by` attribute on the appropriate `th` element:

    <th sort-by="username">Username</th>
    <th sort-by="real-name">Real name</th>

You can also sort on some nested key using "dot notation":

    <th sort-by="roles.administrator">Is Administrator?</th>

### Filtering

Filtering is not a part of siTable, but can be achieved by adding a filter on
the `tr`'s `ng-repeat` directive:

    <tr ng-repeat="user in users | myArbitraryFilter">

For example, Angular's built-in `filter` can be used to filter on all features
of the object. Suppose somewhere in the template, an `input` box is added:

    <input type="text" ng-init="userFilter = {}" ng-model="userFilter.$">

The filter can then be used:

    <tr ng-repeat="user in users | filter:userFilter">

### Formatting

Formatting is not a part of siTable, but can be achieved in many ways. For
example:

    <!-- conditionally set a class for the `tr` -->
    <tr ng-repeat="user in users" ng-class="{admin: user.roles.administrator}">
        <!-- data formatting using filter -->
        <td>{{ user.username | lowercase }}</td>
        <!-- using a custom directive -->
        <td><user-badge user="user"/></td>
        <!-- using filter with ng-bind or ng-bind-html -->
        <td ng-bind-html="user.roles.administrator | checkmark"></td>
    </tr>

### Remote data

Fetching remote data is not done by siTable, but can be achieved in an arbitrary
way, for example by using `$http` and attaching the returned data to the scope:

    $http.get('/remote/data/users.json').then(function(users) {
        $scope.users = users;
    });

### Styling

SiTable does not add any styling or require CSS files to be present. However, it
adds some hooks in the form of classes, so that styling can be done efficiently.

#### Paginator

The paginator is an unordered list (`ul`) of links, where the `ul` element has
a class called `paginator`.

    <ul class="paginator">
        <li><a href>1</a></li>
        <li><a href>2</a></li>
    </ul>

This integrates nicely with Twitter Bootstrap.

#### Sortable column headers

Sortable column headers are put in an `a`-element (link), which has a class
`sort`. When active, it additionally has either the class `sort-asc` or
`sort-desc`, as appropriate.

## License

[MIT](http://opensource.org/licenses/MIT) © [Silicon Laboratories,
Inc.](http://www.silabs.com)
