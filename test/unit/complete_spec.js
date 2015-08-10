const expect = require('chai').expect;
const complete = require('../../lib/complete');
const obj       = require('../fixtures/data').data;
const opts = require('../fixtures/opts').obj;
const objectAssign = require('object-assign');

describe('complete', function() {

  describe('onComplete()', function() {

    it('should onComplete()', function() {
      expect(complete.onComplete).to.be.a('function');
    });

    it('should return an object', function() {
      expect(complete.onComplete(obj, opts)).to.be.an('object');
    });

    describe('callbacks', function() {
      var newObj, newOpts;

      beforeEach(function () {
        newOpts = objectAssign({}, opts);
        newObj = null;
        newOpts.onComplete = function(cb) {
          newObj = cb;
        };
      });

      it('should call the callback', function() {
        complete.onComplete(obj, newOpts);
        expect(newObj).to.be.an('object');
      });

    });

  });

  describe('showCompleteMsg()', function() {

    it('should showCompleteMsg()', function() {
      expect(complete.showCompleteMsg).to.be.a('function');
      expect(complete.showCompleteMsg).to.be.defined;
    });

    it('should return a string', function() {
      expect(complete.showCompleteMsg(obj)).to.equal('complete');
    });

  });

});
