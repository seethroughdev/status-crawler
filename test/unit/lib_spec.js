const should = require('chai').should();
const lib   = require('../../lib/lib');

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
      str.should.equal('example.com');
    });

  });

});
