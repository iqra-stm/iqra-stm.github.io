!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}({1:function(t,e,r){"use strict";function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,n=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(o=(s=c.next()).done)&&(r.push(s.value),!e||r.length!==e);o=!0);}catch(t){n=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(n)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return l}));var s={completed:function(t){this[t]=!0}};function c(t){return void 0!==t.split("as ")[1]?t.split("as ")[1]:t}function a(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};s[c(e)]=!1;var o=t.split(".")[t.split(".").length-1],n={breakdown:function(o){switch(o){case"css":this.createCssReff(t,c(e),r);break;case"js":this.createJsReff(t,c(e),r)}},createCssReff:function(t,e,r){var o=document.createElement("link");null!=e&&(o.onload=function(){s[e]=!0}),o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",t),0!==Object.keys(r).length&&void 0!==r&&this.setOptions(r,o),document.head.appendChild(o)},createJsReff:function(t,e,r){var o=document.createElement("script");null!=e&&(o.onload=function(){s[e]=!0}),o.setAttribute("type","text/javascript"),o.setAttribute("src",t),void 0!==r&&this.setOptions(r,o),document.body.appendChild(o)},setOptions:function(t,e){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}};n.breakdown(o)}function l(t,e){var r=setInterval((function(){(function(t){if("object"===i(t)){for(var e in t)if(!s[t[e]])return!1}else if(!s[t])return!1;return!0})(t)&&(clearTimeout(r),e(s))}),0)}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iframe";this.type=t}u.prototype.open=function(t){if("iframe"===this.type)window.addEventListener("message",(function(e){e.setDispatcher=function(t,r){e.data===t&&r()};var r=function(t){if("object"===i(t.origin))t.origin.map((function(r){e.origin===r&&t.callback(e)}));else{if(e.origin!==t.origin)return;t.callback(e)}};void 0===t.length?r(t):t.map((function(t){r(t)}))}),!1);else if("resources"===this.type){var e=!1;"object"===i(t.origin)?t.origin.map((function(t){window.location.origin===t&&(e=!0)})):window.location.origin===t.origin&&(e=!0),e?t.callback():history.go(-1)}else console.error("[FrontendProtocol]: No constructor with {"+this.type+"} type")},u.prototype.post=function(t){"iframe"===this.type?void 0===t.length?t.iframeElement.contentWindow.postMessage(t.dispatcher,t.remoteOrigin):t.map((function(t){t.iframeElement.contentWindow.postMessage(t.dispatcher,t.remoteOrigin)})):console.error("[FrontendProtocol]: No constructor with {"+this.type+"} type")},u.prototype.get=function(t){Object.entries(t).map((function(t){var e=o(t,2),r=e[0];a(e[1],"as "+r)}))}},15:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(2);var i,s=r(4).production;i=s,new o.a("resources").open({origin:n.a,callback:function(){!function(t){new o.a("resources").get({iqraStaticSourceLeader:"https://iqra-static.herokuapp.com/assets/src/sourceLeader.js"}),Object(o.b)(t.assetsSrcUrl+"/runtime.css","as runtimeStyle"),Object(o.b)(t.assetsSrcUrl+"/pointer.js","as pointerScript"),Object(o.c)(["runtimeStyle","pointerScript"],(function(){Object(o.b)(t.assetsSrcUrl+"/runtime.js","as runtimeScript")})),Object(o.c)(["runtimeScript"],(function(){return!!xr447p4tr.connected}))}(i)}})},2:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o=["http://localhost:2814","http://localhost:4570","http://localhost:4571","http://localhost:4572","http://localhost:4573","http://localhost:4574","http://localhost:4575","http://localhost:4576","http://localhost:4577","http://localhost:4578","http://localhost:4579","http://localhost:8080","https://www.indo-iqra.com","https://iqra-footer.github.io","https://iqra-footer.herokuapp.com","https://iqra-document.herokuapp.com","https://iqra-legal.herokuapp.com"]},4:function(t,e){t.exports={development:{mode:"development",watch:!0,port:4572,baseUrl:"http://localhost:4572",assetsSrcUrl:"http://localhost:4572",assetsImgUrl:"http://localhost:4572",assetsFontUrl:"http://localhost:4572",resourcesUrl:"http://localhost/yourresourcesurl",staticUrl:"https://iqra-static.herokuapp.com",iqraWebUrl:"http://localhost:8080/iqra-web",publicDir:"./public/development",assetsDir:"./assets"},production:{mode:"production",watch:!1,port:2814,baseUrl:"http://localhost:2814",assetsSrcUrl:"http://localhost:2814/assets/src",assetsImgUrl:"http://localhost:2814/assets/img",assetsFontUrl:"http://localhost:2814/assets/font",resourcesUrl:"http://localhost:2814/yourresourcesurl",staticUrl:"https://iqra-static.herokuapp.com",iqraWebUrl:"https://www.indo-iqra.com",publicDir:"./public/production",assetsDir:"./assets"},deliveryTarget:"./dist"}}});