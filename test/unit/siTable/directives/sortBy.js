'use strict';

describe('siTable:sortBy', function() {
  var scope, $compile;
  var element;

  beforeEach(module('siTable.directives'));

  beforeEach(inject(function($rootScope, _$compile_) {
    scope = $rootScope;
    $compile = _$compile_;

    element = angular.element(
      '<table si-table>' +
      '<tr><th sort-by="name">Name</tr>' +
      '</table>');
  }));

  it('should compile', function() {
    expect($compile(element)(scope)).toBeDefined();
  });

  it('should go through the sort stages', function() {
    var compiled = $compile(element)(scope);
    var thScope = compiled.find('th').scope();
    expect(thScope.state).toBeFalsy();
    compiled.find('th').triggerHandler('click');
    expect(thScope.state).toBe('asc');
    compiled.find('th').triggerHandler('click');
    expect(thScope.state).toBe('desc');
    compiled.find('th').triggerHandler('click');
    expect(thScope.state).toBeFalsy();
  });

  it('should present an orderBy-friendly array to siTable controller', function() {
    var compiled = $compile(element)(scope);
    var elementController = element.controller('siTable');
    compiled.find('th').triggerHandler('click');
    expect(elementController.sortingParams.sortArray).toContain('name');
  });

});
