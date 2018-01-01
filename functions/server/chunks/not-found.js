require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Footer__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SuggestedQues__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Link__ = __webpack_require__(59);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = _jsx("p", {}, void 0, "Sorry, could not find what you were looking for");

var _ref2 = _jsx("p", {}, void 0, "Please check if you have misspelt any word or search again with a different keyword.");

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_Link__["a" /* default */], {
  to: "/"
}, void 0, "Go To Home");

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_5__components_SuggestedQues__["a" /* default */], {});

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_4__components_Footer__["a" /* default */], {});

var NotFound =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.root
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.containerLeft
      }, void 0, _jsx("h1", {}, void 0, this.props.title), _ref, _ref2, _ref3), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.containerRight
      }, void 0, _ref4), _ref5);
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(128);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".hprJC{padding-left:0;padding-right:0;text-align:center}._3WBuq{margin:0 auto;width:74%;padding:0 0 40px;min-height:400px;max-width:1024px}._3pkss,._3WBuq{display:inline-block}._3pkss{width:25%}", ""]);

// exports
exports.locals = {
	"root": "hprJC",
	"containerLeft": "_3WBuq",
	"containerRight": "_3pkss"
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(126);
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }




var title = 'Page Not Found';

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], {
  title: title
}));

function action() {
  return {
    chunks: ['not-found'],
    title: title,
    component: _ref,
    status: 404
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return disableBodyScrolling; });
/* harmony export (immutable) */ __webpack_exports__["d"] = escapeHTML;
/* harmony export (immutable) */ __webpack_exports__["b"] = addRemoveScrollEventListener;
/* unused harmony export requestAnimFrame */
/* harmony export (immutable) */ __webpack_exports__["f"] = scrollToTop;
/* harmony export (immutable) */ __webpack_exports__["a"] = addItemToLS;
/* unused harmony export getItemFromLS */
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchAndParseLSItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* eslint-disable no-unused-expressions */

var disableBodyScrolling = function disableBodyScrolling(condition, avoidFixed) {
  if (condition) {
    document.body.style.overflow = 'hidden'; // avoid fixed is used here in order to prevent the body from making position fixed.
    // this is used for disabling scroll while slider is active.

    !avoidFixed && (document.body.style.position = 'fixed'); // eslint-disable-line no-unused-expressions
  } else {
    document.body.style.overflow = 'visible';
    !avoidFixed && (document.body.style.position = 'static'); // eslint-disable-line no-unused-expressions
  }
};
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/("|')/g, '&quot;').replace(/\{/g, '&lbrac;');
}
function addRemoveScrollEventListener(fn) {
  var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // detect if passive event listers are supported
  var supportPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportPassive = true;
        return true;
      }
    });
    window.addEventListener('dummy', null, opts);
    window.removeEventListener('dummy', null, opts);
  } catch (err) {}
  /* do nothing */
  // attach event listener


  var scrollCB = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.throttle(fn, 200);

  var options = supportPassive ? {
    capture: true,
    passive: true
  } : true;
  remove ? window.removeEventListener('scroll', scrollCB, options) : window.addEventListener('scroll', scrollCB, options);
} // raf shim

var requestAnimFrame = function () {
  if (true) return function () {
    return {};
  };
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return setTimeout(callback, 1000 / 60);
  };
}();
function scrollToTop() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
  var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeInOutQuint';
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var currentTime = 0; // min time 0.1, max time 0.8 seconds

  var time = Math.max(0.1, Math.min(scrollY / speed, 0.8)); // copied from https://github.com/danro/easing-js/blob/master/easing.js

  var easingEquations = {
    easeOutSine: function easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint: function easeInOutQuint(pos) {
      pos /= 0.5; // eslint-disable-line

      return pos < 1 ? 0.5 * Math.pow(pos, 5) : 0.5 * (Math.pow(pos - 2, 5) + 2);
    }
  }; // add animation loop

  function tick() {
    // frame number
    currentTime += 1 / 60; // position in anim frame is (scrollY*currentTime/time)

    var p = currentTime / time; // do not multiply by scrollY yet as we need to add easing to position

    var t = easingEquations[easing](p);

    if (p < 1) {
      requestAnimFrame(tick);
      window.scrollTo(0, scrollY - scrollY * t);
    } else {
      window.scrollTo(0, 0);
    }
  } // call it once to get started


  tick();
}

function checkIFLSAvailable() {
  return false && typeof Storage !== 'undefined' && localStorage;
}

function addItemToLS(key, value) {
  if (checkIFLSAvailable && typeof key === 'string') {
    localStorage.setItem(key, value);
    return true;
  }

  return false;
}
function getItemFromLS(key) {
  if (checkIFLSAvailable && typeof key === 'string') {
    return localStorage.getItem(key);
  }

  return null;
}
function fetchAndParseLSItem(key) {
  var value = getItemFromLS(key);

  if (value) {
    try {
      // try-catch needed because JSON.parse will break when JSON is invalid
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  return null;
}

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(72);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (event.defaultPrevented === true) {
          return;
        }

        event.preventDefault();
        __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(_this.props.to);
      }
    }), _temp));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["to", "children"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({
        href: to
      }, props, {
        onClick: this.handleClick
      }), children);
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Link, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onClick: null
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showAdditionalQuestion;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);

function showAdditionalQuestion() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SHOW_ADDITIONAL_QUESTION */],
    payload: payload
  };
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SuggestedQues =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuggestedQues, _React$Component);

  function SuggestedQues() {
    _classCallCheck(this, SuggestedQues);

    return _possibleConstructorReturn(this, (SuggestedQues.__proto__ || Object.getPrototypeOf(SuggestedQues)).apply(this, arguments));
  }

  _createClass(SuggestedQues, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a.container
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a.title
      }, void 0, "Popular Questions"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a.question
      }, void 0, "question 1"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a.question
      }, void 0, "question 1"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a.question
      }, void 0, "question 1"));
    }
  }]);

  return SuggestedQues;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__SuggestedQues_css___default.a)(SuggestedQues));

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(63);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./SuggestedQues.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./SuggestedQues.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1AOCs{background:#fff;border-radius:15px;border:1px solid #efefef;text-align:center;overflow:hidden}._2VRiu{cursor:pointer;padding:5px 0;border-bottom:1px dotted #ccc}._2VRiu:hover{background:#f5f5f5}._27fh3{font-size:16px;font-weight:600;padding:5px 0 10px}", ""]);

// exports
exports.locals = {
	"container": "_1AOCs",
	"question": "_2VRiu",
	"title": "_27fh3"
};

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layout_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Header__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TopBar__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_utils__ = __webpack_require__(58);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-unused-expressions */




 // external-global styles must be imported in your JS.







var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_8__TopBar__["a" /* default */], {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_7__Header__["a" /* default */], {});

var _ref4 = _jsx("i", {
  className: "icon-chevron-up"
});

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        showScrollToTop: false
      }
    }), _temp));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_9__core_utils__["b" /* addRemoveScrollEventListener */])(function () {
        var top = window.pageYOffset || document.documentElement.scrollTop;

        if (top > 200) {
          !_this2.state.showScrollToTop && _this2.setState({
            showScrollToTop: true
          });
          return;
        }

        _this2.state.showScrollToTop && _this2.setState({
          showScrollToTop: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hideTopBar = this.props.hideTopBar;
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a.pageContainer
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a.topBarContainer
      }, void 0, _ref2, _ref3), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a.child, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a.addTopBarHeight, !hideTopBar))
      }, void 0, this.props.children), this.state.showScrollToTop && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a.scrollToTop,
        onClick: function onClick() {
          Object(__WEBPACK_IMPORTED_MODULE_9__core_utils__["f" /* scrollToTop */])(1500);
        }
      }, void 0, _ref4));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Layout, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hideTopBar: false
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_6__Layout_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_ref5) {
  var hideTopBar = _ref5.hideTopBar;
  return {
    hideTopBar: hideTopBar
  };
}, null)(Layout)));

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(66);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(68);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "[class*=\" icon-\"],[class^=icon-]{font-family:kyc!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-ok:before{content:\"\\F00C\"}.icon-remove_sign:before{content:\"\\F057\"}.icon-ok_sign:before{content:\"\\F058\"}.icon-minus:before{content:\"\\F068\"}.icon-ellipsis_vertical:before{content:\"\\F142\"}.icon-BCH-alt:before{content:\"\\E905\"}.icon-BTC-alt:before{content:\"\\E906\"}.icon-BTCD-alt:before{content:\"\\E907\"}.icon-DASH-alt:before{content:\"\\E908\"}.icon-ETC:before{content:\"\\E909\"}.icon-GLD:before{content:\"\\E90A\"}.icon-LTC-alt:before{content:\"\\E902\"}.icon-OMG:before{content:\"\\E90B\"}.icon-XRP-alt:before{content:\"\\E90C\"}.icon-bars:before{content:\"g\"}.icon-bubble:before{content:\"k\"}.icon-reload:before{content:\"l\"}.icon-share:before{content:\"m\"}.icon-arrow-down:before{content:\"\\F03F\"}.icon-arrow-small-down:before{content:\"\\F0A0\"}.icon-arrow-small-up:before{content:\"\\F09F\"}.icon-arrow-up:before{content:\"\\F03D\"}.icon-chevron-down:before{content:\"\\F0A3\"}.icon-chevron-left:before{content:\"\\F0A4\"}.icon-chevron-right:before{content:\"\\F078\"}.icon-chevron-up:before{content:\"\\F0A2\"}.icon-mail:before{content:\"\\F03B\"}.icon-pin:before{content:\"\\F041\"}.icon-x:before{content:\"\\F081\"}.icon-image:before{content:\"\\E90D\"}.icon-arrow-up-left2:before{content:\"\\EA39\"}.icon-flag:before{content:\"\\E900\"}.icon-search:before{content:\"\\E904\"}html{color:#4c505d;font-weight:400;font-size:1em;font-family:Libre Franklin,sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.375}body{margin:0;width:100%;background:#fafafa}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}._2f3U0{min-width:1024px}._2aw_0{position:fixed;top:0;z-index:99;width:100%}._6h9Iq{position:relative;top:80px}.okYIk{top:110px}._2ahKk{position:fixed;bottom:30px;right:20px;background:rgba(0,0,0,.5);color:#fff;border-radius:50%;width:30px;height:30px;line-height:30px;text-align:center;cursor:pointer}", ""]);

// exports
exports.locals = {
	"pageContainer": "_2f3U0",
	"topBarContainer": "_2aw_0",
	"child": "_6h9Iq",
	"addTopBarHeight": "okYIk",
	"scrollToTop": "_2ahKk"
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_additionalQuestion__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Link__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SearchBar__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MenuBar__ = __webpack_require__(76);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_8__MenuBar__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_7__SearchBar__["a" /* default */], {});

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.header
      }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_6__Link__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.logoInfo,
        target: "_self",
        to: "/"
      }, void 0, "knowyourcrypto"), _ref2, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.askQuestion
      }, void 0, "Answer Question"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Header_css___default.a.askQuestion,
        onClick: function onClick() {
          return _this.props.showAdditionalQuestion(true);
        }
      }, void 0, "Ask Question"));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Header_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(null, function (dispatch) {
  return {
    showAdditionalQuestion: function showAdditionalQuestion(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_additionalQuestion__["a" /* showAdditionalQuestion */])(payload));
    }
  };
})(Header)));

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(71);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1qRCL{position:relative;width:100%;height:74px;padding:0 4%;background:#fff;border-bottom:1px solid #efefef;min-width:1024px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}._10Poe{margin-right:3%;outline:none;display:inline-block;text-decoration:none}._3jrJ0,._10Poe{position:relative;top:20px;cursor:pointer}._3jrJ0{color:#fff;background:#2d4373;padding:5px 15px;border-radius:5px;margin-left:10px;float:right}._3jrJ0 i{position:relative;top:1px}@media (max-width:1024px){._1qRCL{width:1024px}._10Poe{margin-right:5%}}", ""]);

// exports
exports.locals = {
	"header": "_1qRCL",
	"logoInfo": "_10Poe",
	"askQuestion": "_3jrJ0"
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchBar_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SearchBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils__ = __webpack_require__(58);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-cond-assign, no-plusplus, prettier/prettier */




 // TODO: search suggestions shoulld not show more than 5 results

var _ref2 = _jsx("i", {
  className: "icon-search"
});

var _ref3 = _jsx("i", {
  className: "icon-arrow-up-left2"
});

var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        expand: false,
        searchResults: [1, 2, 3, 4],
        selectedKey: -1
      }
    }), _temp));
  }

  _createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.recentSearches = Object(__WEBPACK_IMPORTED_MODULE_4__core_utils__["e" /* fetchAndParseLSItem */])('recentSearches') || [];
      this.searchContentLength = this.recentSearches.length + this.state.searchResults.length;
    }
  }, {
    key: "setRecentSearches",
    value: function setRecentSearches(query) {
      /* Maximum 3 queries can be saved */
      var recentSearches = this.recentSearches;
      var queryIndex = recentSearches.indexOf(query);
      /* If query is already present in recentSearches remove it */

      if (queryIndex !== -1) {
        recentSearches.splice(queryIndex, 1);
      }
      /* If query is not present in recentSearches
         and recentSearches length is >= 3 then remove the last element */


      if (recentSearches.length >= 3 && queryIndex === -1) {
        recentSearches.pop();
      }

      recentSearches.unshift(query);
      /* Save recentSearches in localstorage */

      Object(__WEBPACK_IMPORTED_MODULE_4__core_utils__["a" /* addItemToLS */])('recentSearches', JSON.stringify(recentSearches));
    }
  }, {
    key: "getSearchString",
    value: function getSearchString() {
      var _state = this.state,
          selectedKey = _state.selectedKey,
          searchResults = _state.searchResults;
      var searchText = '';

      if (selectedKey >= 0 && selectedKey < searchResults.length) {
        // in search suggestions
        searchText = this.recentSearches[selectedKey];
      } else if (selectedKey >= searchResults.length && selectedKey < searchResults.length + this.recentSearches.length) {
        // in recent searches
        searchText = this.recentSearches[selectedKey - searchResults.length];
      }

      this.search.value = searchText;
      return searchText;
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var searchString = e.target.value.trim(); // get key pressed by user

      var key = e.which || e.keyCode;
      var selectedKey = this.state.selectedKey;

      switch (key) {
        case 38:
          // up arrow
          this.setState({
            selectedKey: selectedKey > 0 ? --selectedKey : this.searchContentLength + Math.max(--selectedKey, -1) % this.searchContentLength
          });
          break;

        case 40:
          // down arrow
          this.setState({
            selectedKey: selectedKey >= -1 ? ++selectedKey % this.searchContentLength : this.searchContentLength + ++selectedKey
          });
          break;

        case 13:
          // enter key
          if (searchString !== '' || selectedKey > -1) {
            if (selectedKey > -1 && (searchString = this.getSearchString()) === '') {
              // if the method getSearchString returns empty string
              this.setState({
                expand: false
              });
              return;
            } // TODO: retrieve search results
            // user pressed enter after selecting a value in drop down

            /* on enter click save query in localStorage */


            this.setRecentSearches(searchString);
          }

          this.search.blur();
          break;

        default:
          // user typed something into search box
          clearTimeout(this.timeoutId);
          this.timeoutId = setTimeout(function () {
            /* TODO: fetch search results and update this.searchContentLength */
          }, 200);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          expand = _state2.expand,
          searchResults = _state2.searchResults,
          selectedKey = _state2.selectedKey;
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.searchBar
      }, void 0, _ref2, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        ref: function ref(el) {
          _this2.search = el;
        },
        onClick: function onClick() {
          return _this2.setState({
            expand: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            expand: false
          });
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.handleChange(e);
        },
        autoComplete: "off",
        type: "search",
        placeholder: "search"
      }), expand && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.suggestedSearch
      }, void 0, searchResults ? _jsx("ul", {}, void 0, searchResults.map(function (data, index) {
        return _jsx("li", {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.searchItem, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.active, selectedKey === index))
        }, index, _jsx("span", {
          className: __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.searchSuggestion
        }, void 0, data));
      })) : null, this.recentSearches.length ? _jsx("ul", {}, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.popProd
      }, void 0, "Recent Searches"), this.recentSearches.map(function (data, index) {
        return _jsx("li", {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.searchItem, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a.active, selectedKey === index + searchResults.length))
        }, index, _jsx("span", {}, void 0, data), _ref3);
      })) : null));
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__SearchBar_css___default.a)(SearchBar));

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(75);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./SearchBar.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./SearchBar.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._2pN4x{width:50%;padding:6px 0 0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-radius:2px;border:1px solid #efefef}._2pN4x,._2pN4x i{display:inline-block;position:relative}._2pN4x i{width:18px;color:#4c505d;top:2px;left:10px;font-size:18px;font-weight:600}._2pN4x input{width:95%;font-size:17.6px;font-size:1.1rem;font-weight:500;padding:0 8px 8px 33px;color:#4c505d;border:none;background-color:transparent}._2pN4x input:focus{outline:none}._1lAGQ{background:#fff;position:absolute;z-index:99;margin-top:5px;color:#000;width:100%;left:0;padding:11px;-webkit-box-shadow:0 2px 2px #ccc;box-shadow:0 2px 2px #ccc}._1lAGQ ul{padding-left:0}.UJkvo{margin:0;display:block;font-size:12px;line-height:18px;overflow:hidden;padding:3px 0 3px 20px;cursor:pointer}.G1fJH,.UJkvo span{display:inline-block;width:95%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.G1fJH{width:100%}.UJkvo i{font-size:12px;text-align:right;color:#2d4373}.UJkvo:hover{background:#b3d4fc}._1JYVA{font-size:12px;font-weight:800;line-height:1;padding:7px 0;color:#2d4373}._20Pac{background:#b3d4fc}@media (max-width:1200px){._2pN4x{width:43%}}@media (max-width:1024px){._2pN4x{width:40%}}", ""]);

// exports
exports.locals = {
	"searchBar": "_2pN4x",
	"suggestedSearch": "_1lAGQ",
	"searchItem": "UJkvo",
	"searchSuggestion": "G1fJH",
	"popProd": "_1JYVA",
	"active": "_20Pac"
};

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuBar_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MenuBar_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = _jsx("i", {
  className: "icon-bars"
});

var _ref2 = _jsx("i", {
  className: "icon-bars"
});

var _ref3 = _jsx("span", {}, void 0, " Categories");

var _ref4 = _jsx("li", {}, void 0, "ICO");

var _ref5 = _jsx("li", {}, void 0, "ICO");

var _ref6 = _jsx("li", {}, void 0, "ICO");

var _ref7 = _jsx("li", {}, void 0, "ICO");

var MenuBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuBar, _React$Component);

  function MenuBar() {
    _classCallCheck(this, MenuBar);

    return _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).apply(this, arguments));
  }

  _createClass(MenuBar, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__MenuBar_css___default.a.root,
        role: "navigation"
      }, void 0, _ref, _jsx("ul", {
        className: __WEBPACK_IMPORTED_MODULE_2__MenuBar_css___default.a.menu
      }, void 0, _jsx("li", {
        className: __WEBPACK_IMPORTED_MODULE_2__MenuBar_css___default.a.categoryTitle
      }, void 0, _ref2, _ref3), _ref4, _ref5, _ref6, _ref7));
    }
  }]);

  return MenuBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__MenuBar_css___default.a)(MenuBar));

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(78);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./MenuBar.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./MenuBar.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._3hM_C{display:inline-block;position:relative;top:20px;left:-25px}._3hM_C i{cursor:pointer}._3hM_C:hover ._2OywC{display:block}._2OywC{z-index:99;position:absolute;top:-6px;left:-7px;width:200px;margin:0;background:#fff;display:none;list-style:none;padding:0;-webkit-box-shadow:1px 2px 4px #ccc;box-shadow:1px 2px 4px #ccc}._2OywC li{padding:5px;text-align:center}._2OywC li:hover:not(._2W-vo){color:#0074c2;background:#fafafa;cursor:pointer}._2W-vo i{position:relative;left:-44px}._2W-vo{padding-bottom:15px;border-bottom:1px solid #efefef}._2W-vo span{color:#0074c2}", ""]);

// exports
exports.locals = {
	"root": "_3hM_C",
	"menu": "_2OywC",
	"categoryTitle": "_2W-vo"
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TopBar_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TopBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TopBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_topBarActions__ = __webpack_require__(82);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = _jsx("i", {
  className: "icon-x"
});

var TopBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var hideTopBar = this.props.hideTopBar;
      return !hideTopBar ? _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__TopBar_css___default.a.container
      }, void 0, "For pages with infinite scrolling, what we do will go here along with any notifications we might need. For others we will have a footer with About section", _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__TopBar_css___default.a.cross,
        onClick: function onClick() {
          return _this.props.closeTopBar(true);
        }
      }, void 0, _ref)) : null;
    }
  }]);

  return TopBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__TopBar_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (_ref2) {
  var hideTopBar = _ref2.hideTopBar;
  return {
    hideTopBar: hideTopBar
  };
}, function (dispatch) {
  return {
    closeTopBar: function closeTopBar(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_topBarActions__["a" /* closeTopBar */])(payload));
    }
  };
})(TopBar)));

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(81);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./TopBar.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./TopBar.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1VdLo{width:100%;background:#3e95f2;color:#fff;padding:5px 4%}._3PvJq{font-weight:600;display:inline-block;cursor:pointer;color:#000;position:absolute;right:20px}", ""]);

// exports
exports.locals = {
	"container": "_1VdLo",
	"cross": "_3PvJq"
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = closeTopBar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);

function closeTopBar(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* SHOW_TOPBAR */],
    payload: payload
  };
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(59);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container
      }, void 0, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text
      }, void 0, "\xA9 knowyourcrypto"), _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
      }, void 0, "\xB7"), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
        to: "/"
      }, void 0, "Home"), _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
      }, void 0, "\xB7"), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
        to: "/admin"
      }, void 0, "About"), _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
      }, void 0, "\xB7"), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
        className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
        to: "/privacy"
      }, void 0, "Ask Question")));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(89);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1UUMy{background:#333;color:#fff}._3dfAC{margin:0 auto;padding:20px 15px;max-width:1024px;text-align:center}._3ReUN{color:hsla(0,0%,100%,.5)}._297xE{color:hsla(0,0%,100%,.3)}._3qHjF,._3ReUN{padding:2px 5px;font-size:1em}._3qHjF,._3qHjF:active,._3qHjF:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._3qHjF:hover{color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_1UUMy",
	"container": "_3dfAC",
	"text": "_3ReUN",
	"spacer": "_297xE",
	"link": "_3qHjF"
};

/***/ })

};;
//# sourceMappingURL=not-found.js.map