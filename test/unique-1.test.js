'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = {}; fav.text.unique = require('..');

var unique = fav.text.unique;

describe('fav.text.unique : 1000 〜 1999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(1000);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(1000 + i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

});
