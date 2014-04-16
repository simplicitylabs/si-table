'use strict';

describe('siTable:Table', function() {
  var scope, $compile;
  var element;

  beforeEach(module('siTable.directives'));

  beforeEach(inject(function($rootScope, _$compile_) {
    scope = $rootScope;
    $compile = _$compile_;

    element = angular.element(
      '<table si-table>' +
      '</table>');
  }));

  it('should compile', function() {
    expect($compile(element)(scope)).toBeDefined();
  });

});
