const expect       = require('chai').expect;
const _            = require('lodash');
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

  describe('status functions', function () {
    var coll,
        countStatusUrls = links.countStatusUrls,
        getStatusTotals = links.getStatusTotals;

    beforeEach(function () {
      coll = l.statusCollection;
    });

    it('should countStatusUrls()', function () {
      expect(countStatusUrls(coll, 301)).to.equal(5);
      expect(countStatusUrls(coll, 404)).to.equal(3);
      expect(countStatusUrls(coll, 302)).to.equal(2);
      expect(countStatusUrls(coll, 599)).to.equal(0);
    });

    it('should getStatusTotals()', function () {
      expect(getStatusTotals(coll)).to.eql(
        { '301': 5, '302': 2, '404': 3, '500': 1 });
    });
  });


});
