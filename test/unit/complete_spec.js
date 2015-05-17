const expect = require('chai').expect;
const complete = require('../../lib/complete');
const obj       = require('../fixtures/data').data;

describe('complete', function() {

  describe('onComplete()', function() {

    it('should onComplete()', function() {
      expect(complete.onComplete).to.be.a('function');
    });

    it('should return an object', function() {
      expect(complete.onComplete(obj)).to.be.an('object');
    });

    describe('callbacks', function() {
      var newObj, callback;

      beforeEach(function () {
        newObj = null;
        callback = function(cb) {
          newObj = cb;
        };
      });

      it('should call the callback', function() {
        complete.onComplete(obj, 'asdf', callback);
        expect(newObj).to.be.an('object');
      });

      it('should call callback even if no jsonLocation', function() {
        complete.onComplete(obj, callback);
        expect(newObj).to.be.an('object');
      });

    });

  });

  describe('showCompleteMsg()', function() {

    it('should showCompleteMsg()', function() {
      expect(complete.showCompleteMsg).to.be.a('function');
    });

    it('should return a string', function() {
      expect(complete.showCompleteMsg(obj)).to.equal('complete');
    });

  });

});
