const expect = require('chai').expect;
const pageCheck = require('../../lib/page-check');
const pageRun = require('../../lib/page-run');
const pageSetup = require('../../lib/page-setup');
const opts = require('../fixtures/opts');

describe('page setup', function() {

  describe('page-setup', function() {

    var pageHandlers;

    beforeEach(function () {
      pageHandlers = pageSetup(opts.obj.startUrl, opts.obj);
    });

    it('should return a function', function() {
      expect(pageHandlers).to.be.a('function');
    });

  });

  describe('page-check', function() {

    var pageHandlers;

    beforeEach(function () {
      pageHandlers = pageCheck(opts.obj.startUrl, function() {});
    });

    it('should return a function', function() {
      expect(pageHandlers).to.be.a('function');
    });

  });

  describe('page-run', function() {

    it('should return a function', function() {
      expect(pageRun).to.be.a('function');
    });

  });

});
