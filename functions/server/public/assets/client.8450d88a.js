webpackJsonp([8],{209:function(e,t,n){"use strict";var r=n(516),o=n.n(r);t.a=o()()},210:function(e,t,n){n(211),e.exports=n(410)},410:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){var n=t.baseUrl,r=t.cookie,o={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:s({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return function(t,r){return t.startsWith("/graphql")||t.startsWith("/api")?e("".concat(n).concat(t),s({},o,r,{headers:s({},o.headers,r&&r.headers)})):e(t,r)}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments[1].type,e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case L:return d({},e,h({},t.payload.name,t.payload.value));default:return e}}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}function b(e){return function(){function t(e,t){return n.apply(this,arguments)}var n=v(regeneratorRuntime.mark(function t(n,r){var o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:n,variables:r}),credentials:"include"},t.next=3,e("/graphql",o);case 3:if(i=t.sent,200===i.status){t.next=6;break}throw new Error(i.statusText);case 6:return t.abrupt("return",i.json());case 7:case"end":return t.stop()}},t,this)}));return t}()}function m(e){var t=e.fetch;return{fetch:t,history:e.history,graphqlRequest:b(t)}}function w(e,t,n,r,o){var i=document.head.querySelector("".concat(e,"[").concat(t,'="').concat(n,'"]'));if((!i||i.getAttribute(r)!==o)&&(i&&i.parentNode.removeChild(i),"string"==typeof o)){var a=document.createElement(e);a.setAttribute(t,n),a.setAttribute(r,o),document.head.appendChild(a)}}function g(e,t){w("meta","name",e,"content",t)}function O(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}function j(e,t,n,r){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var u=new Array(i),c=0;c<i;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:Y,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function P(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}Object.defineProperty(t,"__esModule",{value:!0});var S=(n(411),n(71)),C=n.n(S),R=n(426),_=n.n(R),E=(n(503),n(504)),A=n.n(E),T=n(137),q=n(93),U=n.n(q),B=n(508),I=l({insertCss:U.a.func.isRequired,fetch:U.a.func.isRequired},B.a.childContextTypes),N=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return C.a.Children.only(this.props.children)}}]),t}(C.a.PureComponent);Object.defineProperty(N,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:I});var Y,X,J=N,M=f,W=n(138),$=n(514),H=n.n($),L="SET_RUNTIME_VARIABLE",V=Object(W.c)({user:p,runtime:y}),z=(n(515),n(209)),D=n(522),F={path:"",children:[{path:"",load:function(){return n.e(5).then(n.bind(null,656))}},{path:"/contact",load:function(){return n.e(6).then(n.bind(null,657))}},{path:"/login",load:function(){return n.e(4).then(n.bind(null,658))}},{path:"/register",load:function(){return n.e(2).then(n.bind(null,659))}},{path:"/about",load:function(){return n.e(1).then(n.bind(null,660))}},{path:"/privacy",load:function(){return n.e(0).then(n.bind(null,661))}},{path:"/admin",load:function(){return n.e(7).then(n.bind(null,662))}},{path:"(.*)",load:function(){return n.e(3).then(n.bind(null,663))}}],action:function(){function e(e){return t.apply(this,arguments)}var t=O(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.next,e.next=3,n();case 3:return r=e.sent,r.title="".concat(r.title||"Untitled Page"," - www.reactstarterkit.com"),r.description=r.description||"",e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return e}()},G=F,K=new D.a(G,{resolveRoute:function(e,t){return"function"==typeof e.route.load?e.route.load().then(function(n){return n.default(e,t)}):"function"==typeof e.route.action?e.route.action(e,t):null}}),Q=function(){var e=P(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ne[te.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete ne[t.key],te=t,r=!n,e.prev=4,e.next=7,K.resolve(k({},Z,{pathname:t.pathname,query:A.a.parse(t.search)}));case 7:if(o=e.sent,te.key===t.key){e.next=10;break}return e.abrupt("return");case 10:if(!o.redirect){e.next=13;break}return z.a.replace(o.redirect),e.abrupt("return");case 13:i=_.a.render,console.log(i),console.log(x(i)),X=i(j(J,{context:Z},void 0,o.component),ee,function(){if(r){var e=document.getElementById("css");return void(e&&e.parentNode.removeChild(e))}document.title=o.title,g("description",o.description);var n=0,i=0,a=ne[t.key];if(a)n=a.scrollX,i=a.scrollY;else{var u=t.hash.substr(1);if(u){var c=document.getElementById(u);c&&(i=window.pageYOffset+c.getBoundingClientRect().top)}}window.scrollTo(n,i),window.ga&&window.ga("send","pageview",Object(T.createPath)(t))}),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),e.next=23;break;case 23:console.error(e.t0),r||te.key!==t.key||window.location.reload();case 25:case"end":return e.stop()}},e,this,[[4,19]])}));return function(t,n){return e.apply(this,arguments)}}(),Z={insertCss:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},fetch:M(fetch,{baseUrl:window.App.apiUrl}),store:function(e,t){var n,r=m(t),o=[H.a.withExtraArgument(r)];n=W.a.apply(void 0,o);var i=Object(W.d)(V,e,n);return i}(window.App.state,{history:z.a}),storeSubscription:null},ee=document.getElementById("app"),te=z.a.location,ne={};window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),z.a.listen(Q),Q(te)}},[210]);
//# sourceMappingURL=client.8450d88a.js.map