/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OpenStadComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n'use strict';\n\nvar OpenStadComponent =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(OpenStadComponent, _React$Component);\n\n  function OpenStadComponent(props) {\n    var _this;\n\n    _classCallCheck(this, OpenStadComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(OpenStadComponent).call(this, props));\n\n    var self = _assertThisInitialized(_this);\n\n    if (props.attributes) {\n      Object.keys(props.attributes).forEach(function (key) {\n        var attribute = props.attributes[key];\n        self[attribute.name] = attribute.value;\n      });\n    }\n\n    self.config = self.config || props.config;\n\n    if (self.config) {\n      try {\n        self.config = JSON.parse(self.config);\n      } catch (err) {}\n    }\n\n    self.divId = self.divId || self.config && self.config.divId || props.id || \"openstad-component-\".concat(parseInt(100000000 * Math.random()));\n    window[self.divId] = _assertThisInitialized(_this);\n    return _this;\n  }\n\n  _createClass(OpenStadComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount(prevProps, prevState) {// let event = new Event('isReady');\n      // self.isReady = true;\n      // self.instance.dispatchEvent(event);\n    }\n  }]);\n\n  return OpenStadComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4P2VkMTIiXSwibmFtZXMiOlsiT3BlblN0YWRDb21wb25lbnQiLCJwcm9wcyIsInNlbGYiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhdHRyaWJ1dGUiLCJuYW1lIiwidmFsdWUiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJlcnIiLCJkaXZJZCIsImlkIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwid2luZG93IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztJQUVxQkEsaUI7Ozs7O0FBRW5CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLDJGQUFNQSxLQUFOOztBQUVBLFFBQUlDLElBQUksZ0NBQVI7O0FBRUEsUUFBSUQsS0FBSyxDQUFDRSxVQUFWLEVBQXNCO0FBQ3BCQyxZQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBSyxDQUFDRSxVQUFsQixFQUE4QkcsT0FBOUIsQ0FBc0MsVUFBQ0MsR0FBRCxFQUFTO0FBQzdDLFlBQUlDLFNBQVMsR0FBR1AsS0FBSyxDQUFDRSxVQUFOLENBQWlCSSxHQUFqQixDQUFoQjtBQUNBTCxZQUFJLENBQUNNLFNBQVMsQ0FBQ0MsSUFBWCxDQUFKLEdBQXVCRCxTQUFTLENBQUNFLEtBQWpDO0FBQ0QsT0FIRDtBQUlEOztBQUVEUixRQUFJLENBQUNTLE1BQUwsR0FBY1QsSUFBSSxDQUFDUyxNQUFMLElBQWVWLEtBQUssQ0FBQ1UsTUFBbkM7O0FBRUEsUUFBSVQsSUFBSSxDQUFDUyxNQUFULEVBQWlCO0FBQ2YsVUFBSTtBQUNGVCxZQUFJLENBQUNTLE1BQUwsR0FBY0MsSUFBSSxDQUFDQyxLQUFMLENBQVdYLElBQUksQ0FBQ1MsTUFBaEIsQ0FBZDtBQUNELE9BRkQsQ0FFRSxPQUFPRyxHQUFQLEVBQVksQ0FBRTtBQUNqQjs7QUFFRFosUUFBSSxDQUFDYSxLQUFMLEdBQWFiLElBQUksQ0FBQ2EsS0FBTCxJQUFnQmIsSUFBSSxDQUFDUyxNQUFMLElBQWVULElBQUksQ0FBQ1MsTUFBTCxDQUFZSSxLQUEzQyxJQUFzRGQsS0FBSyxDQUFDZSxFQUE1RCxpQ0FBMEZDLFFBQVEsQ0FBRSxZQUFZQyxJQUFJLENBQUNDLE1BQUwsRUFBZCxDQUFsRyxDQUFiO0FBRUFDLFVBQU0sQ0FBQ2xCLElBQUksQ0FBQ2EsS0FBTixDQUFOO0FBdkJpQjtBQXlCbEI7Ozs7c0NBRWlCTSxTLEVBQVdDLFMsRUFBVyxDQUN0QztBQUNBO0FBQ0E7QUFDRDs7OztFQWpDNENDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RhZENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwcm9wcy5hdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IHByb3BzLmF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgc2VsZlthdHRyaWJ1dGUubmFtZV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLmNvbmZpZyA9IHNlbGYuY29uZmlnIHx8IHByb3BzLmNvbmZpZztcblxuICAgIGlmIChzZWxmLmNvbmZpZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZi5jb25maWcgPSBKU09OLnBhcnNlKHNlbGYuY29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG5cbiAgICBzZWxmLmRpdklkID0gc2VsZi5kaXZJZCB8fCAoIHNlbGYuY29uZmlnICYmIHNlbGYuY29uZmlnLmRpdklkICkgfHwgcHJvcHMuaWQgfHwgYG9wZW5zdGFkLWNvbXBvbmVudC0keyAgcGFyc2VJbnQoIDEwMDAwMDAwMCAqIE1hdGgucmFuZG9tKCkgKX1gO1xuICAgIFxuICAgIHdpbmRvd1tzZWxmLmRpdklkXSA9IHRoaXM7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gbGV0IGV2ZW50ID0gbmV3IEV2ZW50KCdpc1JlYWR5Jyk7XG4gICAgLy8gc2VsZi5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAvLyBzZWxmLmluc3RhbmNlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiP2M0ODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });