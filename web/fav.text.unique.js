(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.text||(g.text = {}));g.unique = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var cyclicIncrement = require('./lib/cyclic-increment');

var seqNo = 0;;

function unique() {
  var n = seqNo;
  seqNo = cyclicIncrement(n);
  return new Date().getTime().toString(36) + n.toString(36);
}

Object.defineProperty(unique, 'seqno', {
  set: function() {},
  get: function() {
    return seqNo;
  },
});

module.exports = unique;

},{"./lib/cyclic-increment":2}],2:[function(require,module,exports){
'use strict';

/* istanbul ignore next */
var maxSeqNo = Number.MAX_SAFE_INTEGER || 9007199254740991;

function cyclicIncrement(value) {
  return value < maxSeqNo ? value + 1 : 0;
}

module.exports = cyclicIncrement;

},{}]},{},[1])(1)
});
