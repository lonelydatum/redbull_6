(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

function init(id) {

	var list = [".t1", ".t2", ".t3"];
	list.map(function (item, i) {
		TweenLite.set(item, { x: i * size.w });
	});

	TweenLite.set("#holder", { x: size.w });
	TweenLite.set(".bg", { x: "-" + size.w / 2, y: "-" + size.h / 2 });

	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var w = size.w;
	var h = size.h;

	var time = .2;
	TweenLite.defaultEase = Power3.easeInOut;
	tl.from(".bg", .4, { scale: .7, opacity: 0, ease: Power4.easeOut }, "+=.1");
	var x = "-=" + size.w;
	tl.to("#holder", time, { x: x }, "+=.1");
	tl.to("#holder", time, { x: x }, "+=2");
	tl.to("#holder", time, { x: x }, "+=4");

	return tl;
}

exports.size = size;
exports.init = init;

// export {init}

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function init(id) {

	var WIDTH = 320;

	var list = [".t1", ".t2", ".t3"];
	list.map(function (item, i) {
		TweenLite.set(item, { x: i * WIDTH });
	});

	TweenLite.set("#holder", { x: WIDTH });
	TweenLite.set(".bg", { x: "-" + _commonJsCommonJs.size.w / 2, y: "-" + _commonJsCommonJs.size.h / 2 });

	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var w = _commonJsCommonJs.size.w;
	var h = _commonJsCommonJs.size.h;

	var time = .2;
	TweenLite.defaultEase = Power3.easeInOut;
	tl.from(".bg", .4, { scale: .7, opacity: 0, ease: Power4.easeOut }, "+=.1");
	var x = "-=" + WIDTH;
	tl.to("#holder", time, { x: x }, "+=.1");
	tl.to("#holder", time, { x: x }, "+=2");
	tl.to("#holder", time, { x: x }, "+=4");

	return tl;
}

init();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
