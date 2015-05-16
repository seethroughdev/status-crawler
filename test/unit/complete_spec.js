const expect = require('chai').expect;
const complete = require('../../lib/complete');
const obj       = require('../fixtures/obj');

describe('complete', function() {

  describe('showCompleteMsg()', function() {

    it('should showCompleteMsg()', function() {
      expect(complete.showCompleteMsg).to.be.a('function');
    });

    it('should return a string', function() {
      expect(complete.showCompleteMsg(obj)).to.equal('complete');
    });

  });

});
