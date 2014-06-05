/*!
 * headroom.js v0.6.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(e,t){function r(e){this.callback=e,this.ticking=!1}function i(e){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var t=e||{},n,r;for(r=1;r<arguments.length;r++){var s=arguments[r]||{};for(n in s)typeof t[n]=="object"?t[n]=i(t[n],s[n]):t[n]=t[n]||s[n]}return t}function s(e){return e===Object(e)?e:{down:e,up:e}}function o(e,t){t=i(t,o.options),this.lastKnownScrollY=0,this.elem=e,this.debouncer=new r(this.update.bind(this)),this.tolerance=s(t.tolerance),this.classes=t.classes,this.offset=t.offset,this.initialised=!1,this.onPin=t.onPin,this.onUnpin=t.onUnpin,this.onTop=t.onTop,this.onNotTop=t.onNotTop}var n={bind:!!function(){}.bind,classList:"classList"in t.documentElement,rAF:!!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame)};e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,r.prototype={constructor:r,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){if(!o.cutsTheMustard)return;return this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!1,e.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,e.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var e=this.elem.classList,t=this.classes;if(e.contains(t.pinned)||!e.contains(t.unpinned))e.add(t.unpinned),e.remove(t.pinned),this.onUnpin&&this.onUnpin.call(this)},pin:function(){var e=this.elem.classList,t=this.classes;e.contains(t.unpinned)&&(e.remove(t.unpinned),e.add(t.pinned),this.onPin&&this.onPin.call(this))},top:function(){var e=this.elem.classList,t=this.classes;e.contains(t.top)||(e.add(t.top),e.remove(t.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var e=this.elem.classList,t=this.classes;e.contains(t.notTop)||(e.add(t.notTop),e.remove(t.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return e.pageYOffset!==undefined?e.pageYOffset:(t.documentElement||t.body.parentNode||t.body).scrollTop},getViewportHeight:function(){return e.innerHeight||t.documentElement.clientHeight||t.body.clientHeight},getDocumentHeight:function(){var e=t.body,n=t.documentElement;return Math.max(e.scrollHeight,n.scrollHeight,e.offsetHeight,n.offsetHeight,e.clientHeight,n.clientHeight)},isOutOfBounds:function(e){var t=e<0,n=e+this.getViewportHeight()>this.getDocumentHeight();return t||n},toleranceExceeded:function(e,t){return Math.abs(e-this.lastKnownScrollY)>=this.tolerance[t]},shouldUnpin:function(e,t){var n=e>this.lastKnownScrollY,r=e>=this.offset;return n&&r&&t},shouldPin:function(e,t){var n=e<this.lastKnownScrollY,r=e<=this.offset;return n&&t||r},update:function(){var e=this.getScrollY(),t=e>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(e,t);if(this.isOutOfBounds(e))return;e<=this.offset?this.top():this.notTop(),this.shouldUnpin(e,n)?this.unpin():this.shouldPin(e,n)&&this.pin(),this.lastKnownScrollY=e}},o.options={tolerance:{up:0,down:0},offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},o.cutsTheMustard=typeof n!="undefined"&&n.rAF&&n.bind&&n.classList,e.Headroom=o})(window,document),define("headroom",function(e){return function(){var t,n;return t||e.Headroom}}(this)),require.config({paths:{headroom:"./bower_components/headroom.js/dist/headroom"},shim:{headroom:{exports:"Headroom"}}}),define("main",["require","headroom"],function(e){var t=e("headroom"),n=document.querySelector("#navmain");window.location.hash&&n.classList.add("slide--up"),(new t(n,{tolerance:{down:10,up:20},offset:205,classes:{initial:"slide",pinned:"slide--reset",unpinned:"slide--up"}})).init()}),require(["main"]);