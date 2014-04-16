'use strict';

describe('siTable:Table', function() {
  var scope, $compile;
  var element;
  var paginationInvoked;

  beforeEach(module('siTable.directives'));
  beforeEach(module('siTable.filters'));

  beforeEach(inject(function($rootScope, _$compile_) {
    paginationInvoked = false;
    scope = $rootScope;
    scope.items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten'];
    $compile = _$compile_;

    element = angular.element(
      '<table si-table><tbody>' +
      '<tr ng-repeat="item in items"><td>{{ item }}</td></tr>' +
      '</tbody></table>');

  }));

  it('should compile', function() {
    expect($compile(element)(scope)).toBeDefined();
  });

  it('should have repeated the tr', function() {
    var compiled = $compile(element)(scope);
    scope.$digest();
    expect(compiled.find('tr').length).toBe(10);
  });

});
