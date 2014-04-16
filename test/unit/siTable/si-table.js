'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('siTable', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

    // Get module
    module = angular.module('siTable');
    dependencies = module.requires;
  });


  it('should load directives module', function() {
    expect(hasModule('siTable.directives')).toBeTruthy();
  });

  it('sould load filters module', function() {
    expect(hasModule('siTable.filters')).toBeTruthy();
  });


});
