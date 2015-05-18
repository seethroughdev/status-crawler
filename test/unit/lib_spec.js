const expect = require('chai').expect;
const lib   = require('../../lib/lib');
const fnFixtures = require('../fixtures/fn');

describe('lib file', function () {

  it('should getDomain()', function () {

    var url = [
      'example.com',
      'http://example.com',
      'http://example.com:8443',
      'http://subdomain.example.com'
    ];


    url.forEach(function(str) {
      str = lib.getDomain(str);
      expect(str).equal('example.com');
    });

  });

  it('should prepareCbFn', function() {
    expect(lib.prepareCbFn).to.be.a('function');
  });

  it('should prepare regular functions', function() {
    fnFixtures.rawFn.forEach(function(fn, i, arr) {
      expect(lib.prepareCbFn(arr[i])).to.equal(fnFixtures.preparedFn[i]);
    });
  });

});
