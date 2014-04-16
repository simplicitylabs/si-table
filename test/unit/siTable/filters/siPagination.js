'use strict';

describe('siTable:siPaginaton', function() {
  var siPagination;

  beforeEach(module('siTable.filters'));

  beforeEach(inject(function ($filter) {
    siPagination = $filter('siPagination');
  }));

  function createOnes(n) {
    return Array.apply(null, new Array(n)).map(Number.prototype.valueOf, 1);
  }

  it('should paginate to the maximum length', function() {
    var array = createOnes(100);
    expect(siPagination(array, {limit: 10, offset: 0}).length).toBe(10);
  });

  it('should offset', function() {
    var array = createOnes(100);
    array[55] = 2;
    expect(siPagination(array, {limit: 10, offset: 50})[5]).toBe(2);
  });

  it('should fill out the total if remote is false', function() {
    var array = createOnes(100);
    var params = {limit: 20, offset: 20};
    siPagination(array, params);
    expect(params.total).toBe(100);
  });

  it('should not fill out the total if remote is true', function() {
    var array = createOnes(100);
    var params = {limit: 20, offset: 20, remote: true};
    siPagination(array, params);
    expect(params.total).toBeUndefined();
  });
  
});
