(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./test/Person.ts":
/*!************************!*\
  !*** ./test/Person.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(name, lastname) {\n    _classCallCheck(this, Person);\n\n    _defineProperty(this, \"name\", void 0);\n\n    _defineProperty(this, \"lastame\", void 0);\n\n    this.name = name;\n    this.lastame = lastname;\n  }\n\n  _createClass(Person, [{\n    key: \"setname\",\n    set: function set(name) {\n      this.name = name;\n    }\n  }, {\n    key: \"setLastname\",\n    set: function set(lastname) {\n      this.lastame = lastname;\n    }\n  }, {\n    key: \"getName\",\n    get: function get() {\n      return this.name;\n    }\n  }, {\n    key: \"getLastname\",\n    get: function get() {\n      return this.lastame;\n    }\n  }]);\n\n  return Person;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Person);\n\n//# sourceURL=webpack:///./test/Person.ts?");

/***/ })

}]);