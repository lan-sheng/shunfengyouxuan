"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Lazy=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"isInSight",value:function(e){var n=e.getBoundingClientRect(),t=window.innerHeight;return n.top<=t+100}},{key:"checkImgs",value:function(){for(var e=document.querySelectorAll(".lazy"),n=index;n<e.length;n++)isInSight(e[n])&&(loadImg(e[n]),index=n)}},{key:"loadImg",value:function(e){if(!e.src){var n=e.dataset.src;e.src=n}}},{key:"throttle",value:function(t,e){var r=1<arguments.length&&void 0!==e?e:500,a=null;return function(){var e=new Date,n=arguments;a=a||e,r&&r<=e-a&&(t.apply(this,n),a=e)}}}]),e}();window.onload=checkImgs,window.onscroll=throttle(checkImgs),exports.Lazy=Lazy;