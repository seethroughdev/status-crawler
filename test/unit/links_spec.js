const expect       = require('chai').expect;
const links        = require('../../lib/links');
const l            = require('../fixtures/links');
const objectAssign = require('object-assign');
const config       = require('../fixtures/config');

describe('links file', function () {

  var opts;

  beforeEach(function () {
    opts = config.opts;
  });

  it('should filterUrls()', function () {
    expect(l.links).to.have.length(25);
    expect(links.filterUrls(l.links, opts)).to.have.length(7);
  });

  describe('getPendingURLs()', function () {

    var arr;
    var getLinks = function(newOpts) {
      var o = objectAssign({}, opts, newOpts);
      return links.getPendingUrls(l.pendingUrls,
        l.visitedUrls, l.links, o, config.originalHost);
    };

    beforeEach(function () {
      arr = [];
    });

    it('should get pending urls', function () {
      arr = getLinks();
      expect(arr).to.have.length(6);
    });

    it('should honor hashmode if turned on', function () {
      arr = getLinks({hashMode: true});
      expect(arr).to.have.length(8);
    });

    it('should honor disabling sameHost', function () {
      arr = getLinks({sameHost: false});
      expect(arr).to.have.length(7);
    });

  });

});
