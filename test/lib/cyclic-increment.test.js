'use strict';

var cyclicIncrement = require('../../lib/cyclic-increment');

var chai = require('chai');
var expect = chai.expect;

var i;

describe('lib/cyclic-increment', function() {

  it('Should increment sequential', function() {
    var v = 0;
    for (i = 0; i < 1000; i++) {
      expect(v = cyclicIncrement(v)).to.equal(i + 1);
    }
  });

  it('Should be cyclic', function() {
    var v = Number.MAX_SAFE_INTEGER || 9007199254740991;
    v -= 10;
    var v0 = v;
    for (i = 0; i < 10; i++) {
      expect(v = cyclicIncrement(v)).to.equal(v0 + i + 1);
    }
    for (i = 0; i < 10; i++) {
      expect(v = cyclicIncrement(v)).to.equal(i);
    }
  });
});
