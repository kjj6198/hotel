!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=0)}([function(e,t,o){"use strict";o(1),$(document).ready(function(){$(".nav-toggle").on("click",function(){$(".navigation").toggleClass("active")}),$(".carousel-container").owlCarousel({responsive:{0:{items:1,singleItem:!0,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1e3}}}),$(".room-image__container").owlCarousel({responsive:{0:{items:1,loop:!1,URLhashListener:!0,startPosition:"URLHash"}}})})},function(e,t){}]);