const expect  = require('chai').expect;
const opts    = require('../../lib/opts-default');
const prepare = require('../../lib/opts-prepare');
const f       = require('../fixtures/opts');

describe('opts defaults', function() {

  it('should load the object', function() {
    expect(opts).to.be.an('object');
  });

  it('should have some basic keys', function() {
    var keys = ['startUrl', 'requiredValues', 'limit', 'onPageLoad', 'nightmare'];
    keys.forEach(function(k) {
      expect(opts).to.include.keys(k);
    });
  });

});

describe('opts prepare', function() {
  var preparedObj;

  beforeEach(function () {
    preparedObj = prepare(f.config, {});
  });

  it('should prepare the object()', function () {
    expect(preparedObj).to.be.an('object');
  });

  it('should merge keys', function () {
    expect(preparedObj).to.deep.equal(f.obj);
  });

});
