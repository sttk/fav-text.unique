(function(){
'use strict';


var expect = chai.expect;


var unique = fav.text.unique;

unique.__array = [];

describe('fav.text.unique : 0 〜 999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(0);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

  it('Should be disable to write `.seqno`', function() {
    var bak = unique.seqno;
    unique.seqno = bak - 10;
    expect(unique.seqno).to.be.equal(bak);
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


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

})();
(function(){
'use strict';


var expect = chai.expect;


var unique = fav.text.unique;

describe('fav.text.unique : 2000 〜 2999', function() {

  it('Should get an unique string', function() {
    expect(unique.seqno).to.equal(2000);
    for (var i = 0; i < 1000; i++) {
      var u = unique();
      expect(unique.seqno).to.equal(2000 + i + 1);
      expect(unique.__array.indexOf(u) < 0).to.be.true;
      unique.__array.push(u);
    }
  });

});

})();
