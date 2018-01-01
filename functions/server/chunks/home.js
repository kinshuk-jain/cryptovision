require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(55).concat([
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(64);
var action = function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var fetch;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch;
            return _context.abrupt("return", {
              chunks: ['home'],
              title: 'knowyourcrypto',
              component: _ref3
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function action(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {}));

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
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
/* 81 */
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
/* 82 */
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showFeedbackModal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);

function showFeedbackModal() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* SHOW_FEEDBACK */],
    payload: payload
  };
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_utils__ = __webpack_require__(58);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var avoidFixed = this.props.avoidFixed;
      Object(__WEBPACK_IMPORTED_MODULE_5__core_utils__["c" /* disableBodyScrolling */])(true, avoidFixed);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var avoidFixed = this.props.avoidFixed;
      Object(__WEBPACK_IMPORTED_MODULE_5__core_utils__["c" /* disableBodyScrolling */])(false, avoidFixed);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          overlay = _props.overlay,
          showCross = _props.showCross,
          _props$isFull = _props.isFull,
          isFull = _props$isFull === void 0 ? false : _props$isFull,
          height = _props.height,
          _props$classes = _props.classes,
          classes = _props$classes === void 0 ? '' : _props$classes,
          closeFn = _props.closeFn,
          top = _props.top,
          width = _props.width,
          overflow = _props.overflow;
      var linkStyle = {
        height: "".concat(height, "%"),
        top: "".concat(top || (100 - height) / 2 - 1, "%"),
        width: "".concat(width, "%"),
        left: "".concat((100 - width) / 2 - 1, "%"),
        overflow: overflow
      };
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.popupInfo, classes)
      }, void 0, overlay ? _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.backInfo,
        onClick: closeFn
      }) : null, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames = {}, _defineProperty(_classNames, __WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.popupContainerFull, isFull), _defineProperty(_classNames, __WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.popupContainer, !isFull), _classNames)),
        style: isFull ? {} : linkStyle
      }, void 0, showCross ? _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.crossInfo,
        onClick: closeFn
      }, void 0, _ref) : null, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a.contentContainer
      }, void 0, children)));
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Modal.defaultProps = {
  avoidFixed: false,
  classes: '',
  overlay: true,
  showCross: true,
  closeFn: function closeFn() {},
  overflow: 'scroll',
  top: 20,
  isFull: false,
  height: 60,
  width: 70
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Modal_css___default.a)(Modal));

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(86);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Modal.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Modal.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".qJ1R1{top:0;left:0;z-index:99}._2VMTT,.qJ1R1{position:fixed;width:100%;height:100%}._2VMTT{background:rgba(0,0,0,.4)}._3hj0z{min-height:15%;padding:24px 24px 16px;padding:1.5rem 1.5rem 1rem;border-radius:5px;z-index:1}._1u9Ah,._3hj0z{position:absolute;background:#fff;white-space:normal}._1u9Ah{width:100%;height:100%}.xfUvz{position:absolute;cursor:pointer;right:12.8px;right:.8rem;top:0;padding:16px;padding:1rem;z-index:10}.Xi8Ij{width:100%;height:100%}", ""]);

// exports
exports.locals = {
	"popupInfo": "qJ1R1",
	"backInfo": "_2VMTT",
	"popupContainer": "_3hj0z",
	"popupContainerFull": "_1u9Ah",
	"crossInfo": "xfUvz",
	"contentContainer": "Xi8Ij"
};

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addToPinBar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);

function addToPinBar() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ADD_TO_PINBAR */],
    payload: payload
  };
}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PostCard__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SuggestedQues__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CategoryNav__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AddQuestion__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_NegativeFeedback__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_PinBar__ = __webpack_require__(114);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_8__components_CategoryNav__["a" /* default */], {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_PostCard__["a" /* default */], {}, 1);

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_PostCard__["a" /* default */], {}, 2);

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_PostCard__["a" /* default */], {}, 3);

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_6__components_PostCard__["a" /* default */], {}, 4);

var _ref7 = _jsx(__WEBPACK_IMPORTED_MODULE_7__components_SuggestedQues__["a" /* default */], {});

var _ref8 = _jsx(__WEBPACK_IMPORTED_MODULE_9__components_AddQuestion__["a" /* default */], {});

var _ref9 = _jsx(__WEBPACK_IMPORTED_MODULE_10__components_NegativeFeedback__["a" /* default */], {});

var _ref10 = _jsx(__WEBPACK_IMPORTED_MODULE_11__components_PinBar__["a" /* default */], {});

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        show: false,
        sortFilter: 'popular'
      }
    }), _temp));
  }

  _createClass(Home, [{
    key: "mouseInOut",
    value: function mouseInOut(state) {
      var _this2 = this;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        return _this2.setState({
          show: state
        });
      }, 200);
    }
  }, {
    key: "renderSortBy",
    value: function renderSortBy() {
      var _this3 = this;

      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.sortContainer
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.subHeader,
        onMouseEnter: function onMouseEnter() {
          return _this3.mouseInOut(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this3.mouseInOut(false);
        }
      }, void 0, "Sort by ", "".concat(this.state.sortFilter), _jsx("i", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('icon-chevron-down', _defineProperty({}, __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.rotate, this.state.show))
      }), this.state.show && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.sortDropDown
      }, void 0, ['currency', 'latest', 'popular'].map(function (key, i) {
        return _jsx("div", {
          onClick: function onClick() {
            _this3.setState({
              sortFilter: key
            });

            _this3.mouseInOut(false);
          }
        }, i, key);
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.root
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.container
      }, void 0, _jsx("h1", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.title
      }, void 0, "Q & A"), this.renderSortBy(), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.left, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.smallLeft, !this.props.showSidebar))
      }, void 0, _ref2), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.mid, _defineProperty({}, __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.bigMid, !this.props.showSidebar))
      }, void 0, _ref3, _ref4, _ref5, _ref6), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a.right
      }, void 0, _ref7)), _ref8, _ref9, _ref10);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Home, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showSidebar: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Home_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_ref11) {
  var showSidebar = _ref11.showSidebar;
  return {
    showSidebar: showSidebar
  };
}, null)(Home)));

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(93);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1avl7{padding-left:10px;padding-right:10px}._3YPN-{margin:0 auto;padding:0 0 40px}._2o-aM,._18krz,._24qTm{display:inline-block;width:20%;vertical-align:top}._24qTm{width:53%}._2o-aM,._24qTm{margin-left:10px}._2o-aM{width:25%}._2Rav6{font-size:18px;font-weight:600;text-align:right;display:inline-block;width:50%;padding-left:11%}._KQx5{width:8%}._3raKJ{width:65%}._2SEkU{display:inline-block;width:50%;color:#4c505d}._2SEkU,._3ADKV{position:relative}._3ADKV{font-size:14px;cursor:pointer;background:#fff;width:20%;margin-left:27%;padding:4px;border:1px solid #efefef}._3ADKV i{font-size:12px;position:absolute;top:8px;right:7px;padding-left:4px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;-o-transition:transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}._1QgPB{position:absolute;background:#fff;left:0;width:100%;font-size:14px;text-align:center;padding:5px 0;-webkit-box-shadow:0 3px 4px 0 hsla(0,0%,45%,.14);box-shadow:0 3px 4px 0 hsla(0,0%,45%,.14);z-index:2}._1QgPB div{padding:5px 0;cursor:pointer}._1QgPB div:hover{background:#ddd}._2z634{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}", ""]);

// exports
exports.locals = {
	"root": "_1avl7",
	"container": "_3YPN-",
	"left": "_18krz",
	"mid": "_24qTm",
	"right": "_2o-aM",
	"title": "_2Rav6",
	"smallLeft": "_KQx5",
	"bigMid": "_3raKJ",
	"sortContainer": "_2SEkU",
	"subHeader": "_3ADKV",
	"sortDropDown": "_1QgPB",
	"rotate": "_2z634"
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostCard_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__PostCard_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserOptions__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlagOptions__ = __webpack_require__(100);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = _jsx("div", {}, void 0, "0 Answers");

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_3__UserOptions__["a" /* default */], {});

var PostCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostCard, _React$Component);

  function PostCard() {
    _classCallCheck(this, PostCard);

    return _possibleConstructorReturn(this, (PostCard.__proto__ || Object.getPrototypeOf(PostCard)).apply(this, arguments));
  }

  _createClass(PostCard, [{
    key: "render",
    value: function render() {
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.container
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.questionContainer
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.question
      }, void 0, "What is Bitcoin?"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.flagpin
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__FlagOptions__["a" /* default */], {
        postId: "".concat(Math.random(), "1231231"),
        title: "what is bitcoin?"
      }))), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.answerContainer
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.voteContainer
      }, void 0, _ref), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a.answer
      }, void 0, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")), _ref2);
    }
  }]);

  return PostCard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__PostCard_css___default.a)(PostCard));

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(96);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./PostCard.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./PostCard.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._39W6J{border-radius:15px;border:1px solid #efefef;background:#fff;width:100%;min-height:200px;margin:15px 0;text-align:center;padding:16px}._39W6J:first-child{margin-top:0}._39W6J:hover{-webkit-box-shadow:1px 1px #eee;box-shadow:1px 1px #eee}._1foqS{font-weight:600;margin:0 auto;padding-bottom:15px;width:100%;border-bottom:1px solid #efefef}._3sBaR{width:92%;padding-right:10px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}._3sBaR,._22Mh2{display:inline-block}._22Mh2{width:7%;position:relative;right:-20px;cursor:pointer}._1fXOf{padding:10px 5px;min-height:100px;width:100%}._158T4{width:15%;position:relative;left:-20px;vertical-align:top}._2TDUq,._158T4{display:inline-block}._2TDUq{width:80%;text-align:left}", ""]);

// exports
exports.locals = {
	"container": "_39W6J",
	"questionContainer": "_1foqS",
	"question": "_3sBaR",
	"flagpin": "_22Mh2",
	"answerContainer": "_1fXOf",
	"voteContainer": "_158T4",
	"answer": "_2TDUq"
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserOptions_css__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UserOptions_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = _jsx("i", {
  className: "icon-arrow-up"
});

var _ref2 = _jsx("i", {
  className: "icon-arrow-down"
});

var _ref3 = _jsx("i", {
  className: "icon-share"
});

var _ref4 = _jsx("i", {
  className: "icon-bubble"
});

var UserOptions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserOptions, _React$Component);

  function UserOptions() {
    _classCallCheck(this, UserOptions);

    return _possibleConstructorReturn(this, (UserOptions.__proto__ || Object.getPrototypeOf(UserOptions)).apply(this, arguments));
  }

  _createClass(UserOptions, [{
    key: "render",
    value: function render() {
      return _jsx("ul", {
        className: __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a.userOptions
      }, void 0, _jsx("li", {}, void 0, _ref, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a.optionText
      }, void 0, "Upvote(32)")), _jsx("li", {}, void 0, _ref2, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a.optionText
      }, void 0, "Downvote(2)")), _jsx("li", {}, void 0, _ref3, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a.optionText
      }, void 0, "Share(1.3k)")), _jsx("li", {}, void 0, _ref4, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a.optionText
      }, void 0, "Comment(234)")));
    }
  }]);

  return UserOptions;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__UserOptions_css___default.a)(UserOptions));

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(99);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./UserOptions.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./UserOptions.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._2MC8a{width:100%;margin:0;margin-top:10px;font-size:14px;border-top:1px solid #efefef;list-style:none;padding:0;padding-top:10px;color:#4c505d}._2MC8a li{display:inline-block;width:25%;border-right:1px solid #4c505d}._2MC8a li:hover{cursor:pointer;color:#000}._2MC8a li:last-child{border:none}._2MC8a li i{position:relative;top:2px}._3iMFX{padding:0 5px}", ""]);

// exports
exports.locals = {
	"userOptions": "_2MC8a",
	"optionText": "_3iMFX"
};

/***/ }),
/* 100 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlagOptions_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FlagOptions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FlagOptions_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_feedbackAction__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_pinBarActions__ = __webpack_require__(90);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */








var _ref2 = _jsx("i", {
  className: "icon-ellipsis_vertical"
});

var _ref3 = _jsx("li", {
  id: "flag"
}, void 0, _jsx("i", {
  className: "icon-flag"
}), "Flag");

var _ref4 = _jsx("li", {
  id: "pin"
}, void 0, _jsx("i", {
  className: "icon-pin"
}), " Pin");

var FlagOptions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlagOptions, _React$Component);

  function FlagOptions() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, FlagOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = FlagOptions.__proto__ || Object.getPrototypeOf(FlagOptions)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        showHover: false
      }
    }), _temp));
  }

  _createClass(FlagOptions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var showHover = this.state.showHover;
      return _jsx("div", {
        onMouseOver: function onMouseOver() {
          clearTimeout(_this2.timeout);

          _this2.setState({
            showHover: true
          });
        },
        onMouseOut: function onMouseOut() {
          _this2.timeout = setTimeout(function () {
            _this2.setState({
              showHover: false
            });
          }, 300);
        }
      }, void 0, _ref2, showHover ? _jsx("ul", {
        className: __WEBPACK_IMPORTED_MODULE_4__FlagOptions_css___default.a.flagPin,
        onClick: function onClick(e) {
          var li = e.target && e.target.closest('li');

          if (li) {
            switch (li.id) {
              case 'flag':
                _this2.props.showFeedbackModal(true);

                return;

              case 'pin':
                _this2.props.addToPinBar({
                  postId: _this2.props.postId,
                  title: _this2.props.title
                });

                return;

              default:
                console.error('Invalid Id');
              // eslint-disable-line
            }
          }
        }
      }, void 0, _ref3, _ref4) : null);
    }
  }]);

  return FlagOptions;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__FlagOptions_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(null, function (dispatch) {
  return {
    showFeedbackModal: function showFeedbackModal(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_feedbackAction__["a" /* showFeedbackModal */])(payload));
    },
    addToPinBar: function addToPinBar(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_pinBarActions__["a" /* addToPinBar */])(payload));
    }
  };
})(FlagOptions)));

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(102);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./FlagOptions.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./FlagOptions.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._1x9KM{height:83px;width:100px;list-style:none;display:inline-block;cursor:pointer;position:absolute;z-index:1;top:20px;background:#fff;-webkit-box-shadow:1px 2px 4px #ccc;box-shadow:1px 2px 4px #ccc;right:5px;padding:0;margin:0;margin-left:5px}._1x9KM li{padding:10px 0;font-weight:400}._1x9KM li:hover{background:#fafafa}._1x9KM li i{padding:0 8px}", ""]);

// exports
exports.locals = {
	"flagPin": "_1x9KM"
};

/***/ }),
/* 103 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CategoryNav_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_categoryNavActions__ = __webpack_require__(106);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref = _jsx("i", {
  className: "icon-chevron-left"
});

var _ref2 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-BTC-alt"
}), " Bitcoin");

var _ref3 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-BCH-alt"
}), " Bitcoin Cash");

var _ref4 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-GLD"
}), " Gold Coin");

var _ref5 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-ETC"
}), " Ethereum");

var _ref6 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-DASH-alt"
}), " Dash");

var _ref7 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-XRP-alt"
}), " Ripple");

var _ref8 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-OMG"
}), " OmiseGo");

var _ref9 = _jsx("i", {
  className: "icon-chevron-right"
});

var _ref10 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-BTC-alt"
}), ' ');

var _ref11 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-BCH-alt"
}), ' ');

var _ref12 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-GLD"
}), ' ');

var _ref13 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-ETC"
}), ' ');

var _ref14 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-DASH-alt"
}), ' ');

var _ref15 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-XRP-alt"
}), ' ');

var _ref16 = _jsx("li", {}, void 0, _jsx("i", {
  className: "icon-OMG"
}), ' ');

var CategoryNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CategoryNav, _React$Component);

  function CategoryNav() {
    _classCallCheck(this, CategoryNav);

    return _possibleConstructorReturn(this, (CategoryNav.__proto__ || Object.getPrototypeOf(CategoryNav)).apply(this, arguments));
  }

  _createClass(CategoryNav, [{
    key: "render",
    value: function render() {
      var _this = this;

      return this.props.showSidebar ? _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.container
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.title
      }, void 0, "Currencies"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.caret,
        onClick: function onClick() {
          return _this.props.showNavBar(false);
        }
      }, void 0, _ref), _jsx("ul", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.catList
      }, void 0, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8)) : _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.container
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.caret,
        onClick: function onClick() {
          return _this.props.showNavBar(true);
        }
      }, void 0, _ref9), _jsx("ul", {
        className: __WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a.smallList
      }, void 0, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16));
    }
  }]);

  return CategoryNav;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(CategoryNav, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showSidebar: true
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__CategoryNav_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_ref17) {
  var showSidebar = _ref17.showSidebar;
  return {
    showSidebar: showSidebar
  };
}, function (dispatch) {
  return {
    showNavBar: function showNavBar() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_categoryNavActions__["a" /* showNavBar */])(payload));
    }
  };
})(CategoryNav)));

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(105);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./CategoryNav.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./CategoryNav.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._2hfa2{background:#4c505d;color:#fff;width:100%;border-radius:10px;margin-right:10px;text-align:center;position:relative}._1s511{font-size:16px;font-weight:600;padding-top:10px}._2tC6O{margin-top:10px;list-style:none;padding:10px 20px 10px 10px}._2tC6O li,._29_Kd li{text-align:left;padding:10px 0;border-bottom:1px solid #efefef}._29_Kd li{text-align:center}._2tC6O li i,._29_Kd li i{padding:0 15px;font-size:20px}._2tC6O li:last-child,._29_Kd li:last-child{border:none}._2tC6O li:hover{cursor:pointer;color:#ccc}._3ZBFk{position:absolute;right:5px;color:#fff;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}._3ZBFk i{font-size:20px}._29_Kd{margin:0;list-style:none;padding:10px 20px 10px 10px}", ""]);

// exports
exports.locals = {
	"container": "_2hfa2",
	"title": "_1s511",
	"catList": "_2tC6O",
	"smallList": "_29_Kd",
	"caret": "_3ZBFk"
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showNavBar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);

function showNavBar(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* SHOW_SIDEBAR */],
    payload: payload
  };
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Addquestion_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Addquestion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_additionalQuestion__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(84);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var _ref2 = _jsx("div", {}, void 0, _jsx("i", {
  className: "icon-ok_sign"
}), "Your question has been successfully submitted!");

var AddQuestion =
/*#__PURE__*/
function (_Component) {
  _inherits(AddQuestion, _Component);

  function AddQuestion() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, AddQuestion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = AddQuestion.__proto__ || Object.getPrototypeOf(AddQuestion)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        invalidTag: false,
        invalidTitle: false,
        invalidDesc: false,
        successSubmit: false
      }
    }), _temp));
  }

  _createClass(AddQuestion, [{
    key: "closeModalFunction",
    value: function closeModalFunction() {
      this.props.showAdditionalQuestion(false);
      this.setState({
        successSubmit: false
      });
    }
  }, {
    key: "formValidate",
    value: function formValidate() {
      var invalidDesc = false;
      var invalidTag = false;
      var invalidTitle = false; // check validity of inputs

      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.quesTitle, 'value.length', 0) < 10) {
        invalidTitle = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.quesTag, 'value.length', 0) < 10) {
        invalidTag = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.get(this.desc, 'value.length', 0) < 20) {
        invalidDesc = true;
      }

      if (invalidDesc || invalidTag || invalidTitle) {
        this.setState({
          invalidDesc: invalidDesc,
          invalidTag: invalidTag,
          invalidTitle: invalidTitle,
          successSubmit: false
        });
      } else {
        // TODO: submit question
        this.setState({
          invalidDesc: false,
          invalidTag: false,
          invalidTitle: false,
          successSubmit: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          invalidDesc = _state.invalidDesc,
          invalidTag = _state.invalidTag,
          invalidTitle = _state.invalidTitle,
          successSubmit = _state.successSubmit;
      return this.props.showAddQuestion ? _jsx(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        showCross: true,
        closeFn: function closeFn() {
          return _this2.closeModalFunction();
        },
        height: 60,
        width: 50
      }, void 0, successSubmit ? _ref2 : _jsx("form", {}, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.heading
      }, void 0, "Title"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        ref: function ref(el) {
          _this2.quesTitle = el;
        },
        placeholder: "Question title (min 20 characters)",
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.quesTitle
      }), invalidTitle && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.error
      }, void 0, "Please enter a title in minimum 10 words"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.heading
      }, void 0, "Tags"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        ref: function ref(el) {
          _this2.quesTag = el;
        },
        placeholder: "add comma separated list of tags such as (bitcoin, ico)",
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.quesCategory
      }), invalidTag && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.error
      }, void 0, "Please enter at least one tag"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.heading
      }, void 0, "Description"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        ref: function ref(el) {
          _this2.desc = el;
        },
        placeholder: "Question description",
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.quesDesc
      }), invalidDesc && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.error
      }, void 0, "Please enter the description in minimum 20 words"), _jsx("button", {
        className: __WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a.submit,
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          _this2.formValidate();
        }
      }, void 0, "Submit"))) : null;
    }
  }]);

  return AddQuestion;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(AddQuestion, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showAddQuestion: false,
    showAdditionalQuestion: function showAdditionalQuestion() {}
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__Addquestion_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (_ref3) {
  var showAddQuestion = _ref3.showAddQuestion;
  return {
    showAddQuestion: showAddQuestion
  };
}, function (dispatch) {
  return {
    showAdditionalQuestion: function showAdditionalQuestion(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_additionalQuestion__["a" /* showAdditionalQuestion */])(payload));
    }
  };
})(AddQuestion)));

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(109);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Addquestion.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Addquestion.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "._3pq8_,._3slZI{width:90%;outline:none;border:none;border-bottom:1px solid #e2e2e2;margin:5px 0 15px}._1olDT{margin-top:15px;width:90%;min-height:120px;border:1px solid #e2e2e2;outline:none}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#ccc;font-size:14px}input:-ms-input-placeholder,input::-ms-input-placeholder,textarea:-ms-input-placeholder,textarea::-ms-input-placeholder{color:#ccc;font-size:14px}input::placeholder,textarea::placeholder{color:#ccc;font-size:14px}._157h0{background:#2d4373;color:#fff;padding:10px 20px;margin-top:15px;border:none;border-radius:5px;outline:none;display:inherit}._2ZeCk{display:block}._3e6wg{font-size:12px;color:#ef4e28;position:relative;top:-5px}", ""]);

// exports
exports.locals = {
	"quesTitle": "_3pq8_",
	"quesCategory": "_3slZI",
	"quesDesc": "_1olDT",
	"submit": "_157h0",
	"heading": "_2ZeCk",
	"error": "_3e6wg"
};

/***/ }),
/* 110 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_feedbackAction__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_utils__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Modal__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_json__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__data_json__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var _ref = _jsx("option", {
  value: "select",
  disabled: true
}, void 0, "Please select an issue");

var _ref2 = _jsx("i", {
  className: "icon-ok_sign"
});

var NegativeFeedback =
/*#__PURE__*/
function (_Component) {
  _inherits(NegativeFeedback, _Component);

  function NegativeFeedback(props) {
    var _this;

    _classCallCheck(this, NegativeFeedback);

    _this = _possibleConstructorReturn(this, (NegativeFeedback.__proto__ || Object.getPrototypeOf(NegativeFeedback)).call(this, props));
    _this.modalCloseFn = _this.modalCloseFn.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.comment = '';
    _this.state = {
      value: 'select',
      commentLength: 0,
      invalidInput: false,
      successSubmit: false,
      invalidText: false
    };
    return _this;
  }

  _createClass(NegativeFeedback, [{
    key: "modalCloseFn",
    value: function modalCloseFn() {
      this.setState({
        value: 'select',
        commentLength: 0,
        invalidInput: false,
        successSubmit: false,
        invalidText: false
      });
      this.props.showFeedbackModal(false);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "changeComment",
    value: function changeComment(event) {
      this.comment = event.target.value;
      this.setState({
        commentLength: this.comment.length
      });
    }
  }, {
    key: "formValidate",
    value: function formValidate() {
      var desc = Object(__WEBPACK_IMPORTED_MODULE_6__core_utils__["d" /* escapeHTML */])(this.comment);

      if (this.issue.selectedIndex === 0) {
        this.setState({
          invalidInput: true,
          successSubmit: false,
          invalidText: false
        });
        return;
      } else if (this.issue.selectedIndex === __WEBPACK_IMPORTED_MODULE_8__data_json___default.a.issue.length && this.text.value.length < 30) {
        this.setState({
          invalidText: true,
          invalidInput: false,
          successSubmit: false
        });
        return;
      } // TODO: submit form


      this.setState({
        successSubmit: true,
        invalidInput: false,
        invalidText: false
      });
    }
  }, {
    key: "renderForm",
    value: function renderForm() {
      var _this2 = this;

      var _state = this.state,
          commentLength = _state.commentLength,
          invalidInput = _state.invalidInput,
          invalidText = _state.invalidText;
      return _jsx("form", {}, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.modalTitle
      }, void 0, "Your feedback is very valuable to us. Please let us know how can can we fix this"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.label
      }, void 0, "Issue: "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange,
        ref: function ref(issue) {
          _this2.issue = issue;
        }
      }, _ref, __WEBPACK_IMPORTED_MODULE_8__data_json___default.a.issue.map(function (issue, index) {
        return _jsx("option", {
          value: issue
        }, index, issue);
      })), invalidInput && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.error
      }, void 0, "Please select an issue"), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.label
      }, void 0, "Description: "), _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.textareaContainer
      }, void 0, _jsx("span", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.wordCount
      }, void 0, "".concat(300 - commentLength, " / 300")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        ref: function ref(text) {
          _this2.text = text;
        },
        maxLength: 300,
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.feedbackRow,
        onChange: function onChange(e) {
          return _this2.changeComment(e);
        },
        placeholder: "Please give us a detailed description"
      })), invalidText && _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.error
      }, void 0, "Please enter the reason in minimum 30 words"), _jsx("button", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.submit,
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          _this2.formValidate();
        }
      }, void 0, "Submit"));
    }
  }, {
    key: "render",
    value: function render() {
      var successSubmit = this.state.successSubmit;
      return this.props.showNegativeFeedback ? _jsx(__WEBPACK_IMPORTED_MODULE_7__Modal__["a" /* default */], {
        overlay: true,
        closeFn: this.modalCloseFn,
        showCross: true,
        width: 40,
        height: 70
      }, void 0, _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.negativeFeedback
      }, void 0, !successSubmit ? this.renderForm() : _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a.successSubmit
      }, void 0, _ref2, " Successfully submitted. We will try to address this issue as soon as possible. Thank you!"))) : null;
    }
  }]);

  return NegativeFeedback;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(NegativeFeedback, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showNegativeFeedback: false,
    postId: ''
  }
});
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__NegativeFeedback_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (_ref3) {
  var showNegativeFeedback = _ref3.showNegativeFeedback;
  return {
    showNegativeFeedback: showNegativeFeedback
  };
}, function (dispatch) {
  return {
    showFeedbackModal: function showFeedbackModal(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_feedbackAction__["a" /* showFeedbackModal */])(payload));
    }
  };
})(NegativeFeedback)));

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(112);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./NegativeFeedback.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./NegativeFeedback.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".OfXLU{position:relative;top:5%}.OfXLU form{padding:20px 0}.leQ64{width:400px;height:150px;outline:none}._1puOC{font-size:14px;padding:10px 0;color:#2d4373;font-weight:600}select{border:none;background:#efefef;border-radius:0;border-bottom:1px solid #4c505d;outline:none;padding:5px}._1RjHT{padding-bottom:20px}.MzNsZ{background:#2d4373;color:#fff;padding:10px 20px;margin-top:15px;border:none;border-radius:5px}.A0DsO{position:relative}._35Za_{position:absolute;top:85%;right:27%;font-size:10px;color:#ccc}.kxA8k{font-size:12px;padding-top:5px;color:#ef4e28}._3nS2b i{color:#64b44b}", ""]);

// exports
exports.locals = {
	"negativeFeedback": "OfXLU",
	"feedbackRow": "leQ64",
	"label": "_1puOC",
	"modalTitle": "_1RjHT",
	"submit": "MzNsZ",
	"textareaContainer": "A0DsO",
	"wordCount": "_35Za_",
	"error": "kxA8k",
	"successSubmit": "_3nS2b"
};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = {"issue":["Irrelevant information","Information too vague","Information not found","Vulgar/Inappropriate content","Information not properly presented","Difficulty in searching information","Difficulty in understanding content","Any other reason"]}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PinBar_css__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PinBar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__PinBar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_pinBarActions__ = __webpack_require__(90);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _ref2 = _jsx("i", {
  className: "icon-minus"
});

var PinBar =
/*#__PURE__*/
function (_Component) {
  _inherits(PinBar, _Component);

  function PinBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, PinBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = PinBar.__proto__ || Object.getPrototypeOf(PinBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        postList: {}
      }
    }), _temp));
  }

  _createClass(PinBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var postList = this.state.postList;
      var _nextProps$getQuesAdd = nextProps.getQuesAddedToPinBar,
          getQuesAddedToPinBar = _nextProps$getQuesAdd === void 0 ? {} : _nextProps$getQuesAdd;
      var pos = postList[getQuesAddedToPinBar.postId];

      if (pos) {
        // post id already present in postlist, remove it
        delete postList[getQuesAddedToPinBar.postId];
        this.setState({
          postList: postList
        });
      } else {
        // new postId not in postList, add it
        this.setState({
          postList: _extends({}, postList, _defineProperty({}, getQuesAddedToPinBar.postId, getQuesAddedToPinBar.title))
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var postList = this.state.postList;
      return _jsx("div", {
        className: __WEBPACK_IMPORTED_MODULE_4__PinBar_css___default.a.pinBar
      }, void 0, Object.keys(postList).map(function (key) {
        var title = postList[key];
        return _jsx("div", {
          className: __WEBPACK_IMPORTED_MODULE_4__PinBar_css___default.a.pinBarItem
        }, key, _jsx("span", {
          className: __WEBPACK_IMPORTED_MODULE_4__PinBar_css___default.a.heading
        }, void 0, title), _ref2, _jsx("i", {
          className: "icon-x",
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.props.addToPinBar({
              postId: key,
              title: title
            });
          }
        }));
      }));
    }
  }]);

  return PinBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__PinBar_css___default.a)(Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (_ref3) {
  var getQuesAddedToPinBar = _ref3.getQuesAddedToPinBar;
  return {
    getQuesAddedToPinBar: getQuesAddedToPinBar
  };
}, function (dispatch) {
  return {
    addToPinBar: function addToPinBar(payload) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_pinBarActions__["a" /* addToPinBar */])(payload));
    }
  };
})(PinBar)));

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(116);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./PinBar.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./PinBar.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".OqLMn{position:fixed;bottom:0;width:100%;overflow:auto;background:transparent;height:40px;white-space:nowrap}.AneGx{background:#333;color:#efefef;width:23%;margin:0 5px;height:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding-top:10px;cursor:pointer}._3idiD,.AneGx{display:inline-block}._3idiD{margin-left:10px;font-size:14px;width:78%}._3idiD~i{font-size:12px;position:relative;right:0;padding:0 7px}", ""]);

// exports
exports.locals = {
	"pinBar": "OqLMn",
	"pinBarItem": "AneGx",
	"heading": "_3idiD"
};

/***/ })
]);;
//# sourceMappingURL=home.js.map