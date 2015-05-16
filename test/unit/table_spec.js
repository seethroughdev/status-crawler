const expect = require('chai').expect;
const tableCreate = require('../../lib/table-create');

describe('table create', function() {
  it('should create table', function() {
    expect(tableCreate).to.be.a('function');
  });
  it('should return a string', function () {
    expect(tableCreate()).to.be.a('string');
  });
});
