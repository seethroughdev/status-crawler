const expect = require('chai').expect;
const data = require('../../lib/data');
const f = require('../fixtures/data');

describe('data', function () {

  describe('getObj', function () {

    var newObj;

    beforeEach(function () {
      newObj = data.getObj();
    });

    it('should getObj()', function() {
      expect(data.getObj).to.be.a('function');
    });

    it('should return an object', function() {
      expect(newObj).to.be.an('object');
    });

    it('should have keys', function() {
      expect(newObj).to.have.all.keys(['data', 'meta']);
    });

    it('should return data keys', function() {
      var keys = ['links', 'errors', 'messages', 'issues', 'status', 'timeouts', 'resources', 'custom'];
      expect(newObj.data[0]).to.have.all.keys(keys);
    });

    it('should return meta keys', function() {
      var keys = ['type', 'total', 'date'];
      expect(newObj.meta).to.have.all.keys(keys);
    });

  });

  describe('setData', function () {

    var newObj;

    beforeEach(function () {
      newObj = null;
    });

    it('should setData', function() {
      expect(data.setData).to.be.a('function');
    });

    it('should setData()', function() {
      newObj = data.setData(f.data, 'errors', 'asdf');
      expect(newObj.errors).to.be.an('array');
      expect(newObj.errors).to.contain('asdf');
    });

    it('should replace setData()', function() {
      newObj = data.setData(f.data, 'errors', 'asdf', true);
      expect(newObj.errors).to.be.a('string');
      expect(newObj.errors).to.equal('asdf');
    });

  });

  describe('setMeta', function() {

    it('should setMeta', function() {
      expect(data.setMeta).to.be.a('function');
    });

    it('should setMeta()', function() {
      var newObj = data.setMeta(f.data, 'total', 50);
      expect(newObj.meta.total).to.equal(50);
    });

  });

  describe('dataClean', function() {

    var newObj2;

    beforeEach(function () {
      newObj2 = data.dataClean(f.preData, f.preVisitedUrls, f.preLinkCount, f.preOpts);
    });

    it('should dataClean', function() {
      expect(data.dataClean).to.be.a('function');
    });

    it('should dataClean()', function() {
      expect(newObj2).to.have.all.keys(['data', 'meta']);
      expect(newObj2.meta).to.have.all.keys([ 'type', 'total', 'date', 'config' ]);
    });

    it('should set date in meta', function() {
      expect(newObj2.meta.date instanceof Date).to.be.true;
    });

    it('should set config object', function() {
      expect(newObj2.meta.config).to.be.an('object');
    });

    it('should set total in meta', function() {
      expect(newObj2.meta.total).to.be.a('number');
      expect(newObj2.meta.total).to.be.equal(5);
    });



  });

});
