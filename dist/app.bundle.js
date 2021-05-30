/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,100;1,200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/******** General ********/\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Montserrat', sans-serif;\n\tfont-size: 20px;\n}\n\nbody {\n\tbackground-color: #e8e8e8;\n}\n\n/******** Text ********/\n\n.intro {\n\twidth: 700px;\n\tmargin: auto;\n\tpadding: 30px 0px;\n}\nh1 {\n\tfont-size: 45px;\n\tline-height: 45px;\n\ttext-align: center;\n\tpadding-bottom: 30px;\n}\nh2 {\n\tfont-size: 35px;\n\tline-height: 35px;\n\tpadding-bottom: 20px;\n\tfont-weight: 900;\n}\n.intro p {\n\tfont-size: 18px;\n\tline-height: 22px;\n\tpadding-bottom: 20px;\n}\n\n/******** Accordion ********/\n\nsummary {\n\tfont-size: 25px;\n\tfont-weight: 600;\n\tbackground-color: rgba(255, 255, 255, 0.2);;\n\tpadding: 1rem;\n\tmargin-bottom: 1rem;\n\toutline: none;\n\tborder-radius: 20px;\n\ttext-align: left;\n\tcursor: pointer;\n\tposition: relative;\n\tbox-shadow: 0px 0px 22px rgb(0,0,0,0.1);\n}\ndetails[open] summary ~ * {\n \tanimation: sweep .5s ease-in-out;\n}\n@keyframes sweep {\n\t0%    {opacity: 0; margin-top: -10px}\n\t100%  {opacity: 1; margin-top: 0px}\n}\ndetails > summary::after {\n\tposition: absolute;\n\tcontent: \"+\";\n\tright: 20px;\n}\ndetails[open] > summary::after {\n\tposition: absolute;\n\tcontent: \"-\";\n\tright: 20px;\n}\n\n/******** Box White ********/\n\n.aqiBox {\n\tbackground-color: rgb(255,255,255,0.2);\n\tborder-radius: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\twidth:500px;\n\tmargin: auto;\n\tbox-shadow: 0px 0px 22px rgb(0,0,0,0.1);\n\tpadding: 20px;\n}\n\n/******** Your City Button ********/\n\n.youtAqiCityButton {\n\tmax-width: 180px !important;\n}\n\n/******** Result ********/\n\n.aqiResult {\n\tmargin-bottom: 30px;\n}\n.nameCity {\n\tfont-size: 30px;\n\tline-height: 30px;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tfont-weight: 700;\n}\n.aqiCity {\n\tfont-size: 50px;\n\tline-height: 50px;\n\tpadding-top: 10px;\n\tfont-weight: 700;\n\ttext-align: center;\n}\n\n/******** Form ********/\n\n.aqiInput {\n\tborder-radius: 50px;\n\tborder: solid 0px;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\tpadding: 10px 0px;\n\ttext-align: center;\n\toutline: none;\n}\nbutton {\n\tborder-radius: 50px;\n\twidth: 100%;\n\tbackground-color: #222222;\n\tcolor: #ffffff;\n\tborder: none;\n\tpadding: 10px 0px;\n\tcursor: pointer;\n\toutline: none;\n}\n\n/******** AQI Info ********/\n\n.aqiInfo {\n\ttext-align: center;\n\tmargin-top: -20px;\n}\n\n/******** Footer ********/\n\nfooter, footer em {\n\tmargin: 50px 0px;\n\ttext-align: center;\n\tfont-size: 13px;\n\topacity: 0.5;\n}\n\n/******** Responsive ********/\n\n@media only screen and (max-width: 700px) {\n\n\tbody {\n\t\tpadding: 0px 20px;\n\t}\n\n\t/******** Text ********/\n\n\t.intro {\n\t\twidth: 100%;\n\t}\n\th1 {\n\t\tfont-size: 35px;\n\t\tline-height: 35px;\n\t}\n\th2 {\n\t\tfont-size: 25px;\n\t\tline-height: 25px;\n\t}\n\n\t/******** Accordion ********/\n\n\tsummary {\n\t  font-size: 20px;\n\t}\n\n\t/******** Box White ********/\n\n\t.aqiBox {\n\t\twidth:100%;\n\t}\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,0BAA0B;;AAI1B;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,qCAAqC;CACrC,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA,uBAAuB;;AAEvB;CACC,YAAY;CACZ,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,oBAAoB;AACrB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,oBAAoB;CACpB,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,oBAAoB;AACrB;;AAEA,4BAA4B;;AAE5B;CACC,eAAe;CACf,gBAAgB;CAChB,0CAA0C;CAC1C,aAAa;CACb,mBAAmB;CACnB,aAAa;CACb,mBAAmB;CACnB,gBAAgB;CAChB,eAAe;CACf,kBAAkB;CAClB,uCAAuC;AACxC;AACA;EACE,gCAAgC;AAClC;AACA;CACC,OAAO,UAAU,EAAE,iBAAiB;CACpC,OAAO,UAAU,EAAE,eAAe;AACnC;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;AACZ;;AAEA,4BAA4B;;AAE5B;CACC,sCAAsC;CACtC,mBAAmB;CACnB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,sBAAsB;CACtB,WAAW;CACX,YAAY;CACZ,uCAAuC;CACvC,aAAa;AACd;;AAEA,mCAAmC;;AAEnC;CACC,2BAA2B;AAC5B;;AAEA,yBAAyB;;AAEzB;CACC,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,yBAAyB;CACzB,kBAAkB;CAClB,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,iBAAiB;CACjB,iBAAiB;CACjB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA,uBAAuB;;AAEvB;CACC,mBAAmB;CACnB,iBAAiB;CACjB,WAAW;CACX,mBAAmB;CACnB,iBAAiB;CACjB,kBAAkB;CAClB,aAAa;AACd;AACA;CACC,mBAAmB;CACnB,WAAW;CACX,yBAAyB;CACzB,cAAc;CACd,YAAY;CACZ,iBAAiB;CACjB,eAAe;CACf,aAAa;AACd;;AAEA,2BAA2B;;AAE3B;CACC,kBAAkB;CAClB,iBAAiB;AAClB;;AAEA,yBAAyB;;AAEzB;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,YAAY;AACb;;AAEA,6BAA6B;;AAE7B;;CAEC;EACC,iBAAiB;CAClB;;CAEA,uBAAuB;;CAEvB;EACC,WAAW;CACZ;CACA;EACC,eAAe;EACf,iBAAiB;CAClB;CACA;EACC,eAAe;EACf,iBAAiB;CAClB;;CAEA,4BAA4B;;CAE5B;GACE,eAAe;CACjB;;CAEA,4BAA4B;;CAE5B;EACC,UAAU;CACX;;AAED","sourcesContent":["/******** General ********/\n\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,100;1,200&display=swap');\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Montserrat', sans-serif;\n\tfont-size: 20px;\n}\n\nbody {\n\tbackground-color: #e8e8e8;\n}\n\n/******** Text ********/\n\n.intro {\n\twidth: 700px;\n\tmargin: auto;\n\tpadding: 30px 0px;\n}\nh1 {\n\tfont-size: 45px;\n\tline-height: 45px;\n\ttext-align: center;\n\tpadding-bottom: 30px;\n}\nh2 {\n\tfont-size: 35px;\n\tline-height: 35px;\n\tpadding-bottom: 20px;\n\tfont-weight: 900;\n}\n.intro p {\n\tfont-size: 18px;\n\tline-height: 22px;\n\tpadding-bottom: 20px;\n}\n\n/******** Accordion ********/\n\nsummary {\n\tfont-size: 25px;\n\tfont-weight: 600;\n\tbackground-color: rgba(255, 255, 255, 0.2);;\n\tpadding: 1rem;\n\tmargin-bottom: 1rem;\n\toutline: none;\n\tborder-radius: 20px;\n\ttext-align: left;\n\tcursor: pointer;\n\tposition: relative;\n\tbox-shadow: 0px 0px 22px rgb(0,0,0,0.1);\n}\ndetails[open] summary ~ * {\n \tanimation: sweep .5s ease-in-out;\n}\n@keyframes sweep {\n\t0%    {opacity: 0; margin-top: -10px}\n\t100%  {opacity: 1; margin-top: 0px}\n}\ndetails > summary::after {\n\tposition: absolute;\n\tcontent: \"+\";\n\tright: 20px;\n}\ndetails[open] > summary::after {\n\tposition: absolute;\n\tcontent: \"-\";\n\tright: 20px;\n}\n\n/******** Box White ********/\n\n.aqiBox {\n\tbackground-color: rgb(255,255,255,0.2);\n\tborder-radius: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\twidth:500px;\n\tmargin: auto;\n\tbox-shadow: 0px 0px 22px rgb(0,0,0,0.1);\n\tpadding: 20px;\n}\n\n/******** Your City Button ********/\n\n.youtAqiCityButton {\n\tmax-width: 180px !important;\n}\n\n/******** Result ********/\n\n.aqiResult {\n\tmargin-bottom: 30px;\n}\n.nameCity {\n\tfont-size: 30px;\n\tline-height: 30px;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tfont-weight: 700;\n}\n.aqiCity {\n\tfont-size: 50px;\n\tline-height: 50px;\n\tpadding-top: 10px;\n\tfont-weight: 700;\n\ttext-align: center;\n}\n\n/******** Form ********/\n\n.aqiInput {\n\tborder-radius: 50px;\n\tborder: solid 0px;\n\twidth: 100%;\n\tmargin-bottom: 10px;\n\tpadding: 10px 0px;\n\ttext-align: center;\n\toutline: none;\n}\nbutton {\n\tborder-radius: 50px;\n\twidth: 100%;\n\tbackground-color: #222222;\n\tcolor: #ffffff;\n\tborder: none;\n\tpadding: 10px 0px;\n\tcursor: pointer;\n\toutline: none;\n}\n\n/******** AQI Info ********/\n\n.aqiInfo {\n\ttext-align: center;\n\tmargin-top: -20px;\n}\n\n/******** Footer ********/\n\nfooter, footer em {\n\tmargin: 50px 0px;\n\ttext-align: center;\n\tfont-size: 13px;\n\topacity: 0.5;\n}\n\n/******** Responsive ********/\n\n@media only screen and (max-width: 700px) {\n\n\tbody {\n\t\tpadding: 0px 20px;\n\t}\n\n\t/******** Text ********/\n\n\t.intro {\n\t\twidth: 100%;\n\t}\n\th1 {\n\t\tfont-size: 35px;\n\t\tline-height: 35px;\n\t}\n\th2 {\n\t\tfont-size: 25px;\n\t\tline-height: 25px;\n\t}\n\n\t/******** Accordion ********/\n\n\tsummary {\n\t  font-size: 20px;\n\t}\n\n\t/******** Box White ********/\n\n\t.aqiBox {\n\t\twidth:100%;\n\t}\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const api_key = "5049653a32561adfc0fa9fc133fc4cafbc3099ed";
const nameCity = document.getElementById("nameCity");
const aqiCity = document.getElementById("aqiCity");
const resultAqiTitle = document.getElementById("resultAqiTitle");
const resultAqiText = document.getElementById("resultAqiText");
const idSearch = document.getElementById("idSearch");

nameCity.innerHTML = "Do you want to know the AQI of another city?";
aqiCity.innerHTML = "Let's go!";

const introSerchAqiCity = `Do you want to know the AQI of your city?<br/><em style="font-size: 15px;">Remember to turn on the location on your device!</em>`;
resultAqiTitle.innerHTML = introSerchAqiCity;

const yourAqiCity = `<button class="youtAqiCityButton" id="aqiYourFinderAqi" type="button">OF COURSE!</button>`;
resultAqiText.innerHTML = yourAqiCity;

document.getElementById("aqiYourFinderAqi").addEventListener("click", myCityAqiFunction);

function myCityAqiFunction() {

    let city = idSearch.value
    let cityURL = `https://api.waqi.info/feed/here/?token=${api_key}`

    fetch(cityURL)
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
        })
        .then(app => {
            nameCity.innerHTML = idSearch.value;
            aqiCity.innerHTML = app.data.aqi;

                var backgroundAqi = aqiCity.innerHTML;

                switch (true) {
                  case backgroundAqi <= 50:
                    document.body.style.backgroundColor = "#009966";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "☀️ Good ☀️";
                    resultAqiText.innerHTML = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
                    break;
                  case backgroundAqi <= 100:
                    document.body.style.backgroundColor = "#ffde33";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "☁️ Moderate ☁️";
                    resultAqiText.innerHTML = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    break;
                  case backgroundAqi <= 150:
                    document.body.style.backgroundColor = "#ff9933";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy for Sensitive Groups ⚠️";
                    resultAqiText.innerHTML = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    break;
                  case backgroundAqi <= 200:
                    document.body.style.backgroundColor = "#cc0033";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
                    break;
                  case backgroundAqi <= 300:
                    document.body.style.backgroundColor = "#660099";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Very Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    break;
                  case backgroundAqi >= 301:
                    document.body.style.backgroundColor = "#7e0023";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Hazardous ⚠️";
                    resultAqiText.innerHTML = "Health alert: everyone may experience more serious health effects!";
                    break;
                  case backgroundAqi === "undefined":
                    document.body.style.backgroundColor = "#e8e8e8";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "🔍 City not found";
                    resultAqiText.innerHTML = "Please try again later or search for a neighboring city. Thank you for understanding.";
                    break;
                  default:
                    document.body.style.backgroundColor = "#e8e8e8";
                }

        })
        .catch(error => console.log("Si è verificato un errore!"));

}

document.getElementById("aqiFinderAqi").addEventListener("click", cityAqiFunction);

function cityAqiFunction() {

    let city = idSearch.value
    let cityURL = `https://api.waqi.info/feed/` + city + `/?token=${api_key}`

    fetch(cityURL)
        .then(response => {
                if (response.ok) {
                    return response.json();
                }
        })
        .then(app => {
            nameCity.innerHTML = idSearch.value;
            aqiCity.innerHTML = app.data.aqi;

                var backgroundAqi = aqiCity.innerHTML;

                switch (true) {
                  case backgroundAqi <= 50:
                    document.body.style.backgroundColor = "#009966";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "☀️ Good ☀️";
                    resultAqiText.innerHTML = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
                    break;
                  case backgroundAqi <= 100:
                    document.body.style.backgroundColor = "#ffde33";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "☁️ Moderate ☁️";
                    resultAqiText.innerHTML = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
                    break;
                  case backgroundAqi <= 150:
                    document.body.style.backgroundColor = "#ff9933";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy for Sensitive Groups ⚠️";
                    resultAqiText.innerHTML = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
                    break;
                  case backgroundAqi <= 200:
                    document.body.style.backgroundColor = "#cc0033";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
                    break;
                  case backgroundAqi <= 300:
                    document.body.style.backgroundColor = "#660099";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Very Unhealthy ⚠️";
                    resultAqiText.innerHTML = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
                    break;
                  case backgroundAqi >= 301:
                    document.body.style.backgroundColor = "#7e0023";
                    document.body.style.color = "#ffffff";
                    resultAqiTitle.innerHTML = "⚠️ Hazardous ⚠️";
                    resultAqiText.innerHTML = "Health alert: everyone may experience more serious health effects!";
                    break;
                  case backgroundAqi === "undefined":
                    document.body.style.backgroundColor = "#e8e8e8";
                    document.body.style.color = "#000000";
                    resultAqiTitle.innerHTML = "🔍 City not found";
                    resultAqiText.innerHTML = "Please try again later or search for a neighboring city. Thank you for understanding.";
                    break;
                  default:
                    document.body.style.backgroundColor = "#e8e8e8";
                }

        })
        .catch(error => console.log("Si è verificato un errore!"));

}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUFAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0FQUC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQVBQLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQVBQLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0FQUC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9BUFAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQVBQL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FQUC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQVBQL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQVBQL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVBQLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEhBQTBILE1BQU0sTUFBTSxvQkFBb0I7QUFDMUo7QUFDQSw0RUFBNEUsY0FBYyxlQUFlLDJCQUEyQiwwQ0FBMEMsb0JBQW9CLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyx3Q0FBd0MsaUJBQWlCLGlCQUFpQixzQkFBc0IsR0FBRyxNQUFNLG9CQUFvQixzQkFBc0IsdUJBQXVCLHlCQUF5QixHQUFHLE1BQU0sb0JBQW9CLHNCQUFzQix5QkFBeUIs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxvRUFBb0UsUUFBUTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDsxLDEwMDsxLDIwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKiogR2VuZXJhbCAqKioqKioqKi9cXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG5cXG4vKioqKioqKiogVGV4dCAqKioqKioqKi9cXG5cXG4uaW50cm8ge1xcblxcdHdpZHRoOiA3MDBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzBweCAwcHg7XFxufVxcbmgxIHtcXG5cXHRmb250LXNpemU6IDQ1cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDQ1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5pbnRybyBwIHtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qKioqKioqKiBBY2NvcmRpb24gKioqKioqKiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOztcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDIycHggcmdiKDAsMCwwLDAuMSk7XFxufVxcbmRldGFpbHNbb3Blbl0gc3VtbWFyeSB+ICoge1xcbiBcXHRhbmltYXRpb246IHN3ZWVwIC41cyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzd2VlcCB7XFxuXFx0MCUgICAge29wYWNpdHk6IDA7IG1hcmdpbi10b3A6IC0xMHB4fVxcblxcdDEwMCUgIHtvcGFjaXR5OiAxOyBtYXJnaW4tdG9wOiAwcHh9XFxufVxcbmRldGFpbHMgPiBzdW1tYXJ5OjphZnRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuZGV0YWlsc1tvcGVuXSA+IHN1bW1hcnk6OmFmdGVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29udGVudDogXFxcIi1cXFwiO1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKiogQm94IFdoaXRlICoqKioqKioqL1xcblxcbi5hcWlCb3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwwLjIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6NTAwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMjJweCByZ2IoMCwwLDAsMC4xKTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKiogWW91ciBDaXR5IEJ1dHRvbiAqKioqKioqKi9cXG5cXG4ueW91dEFxaUNpdHlCdXR0b24ge1xcblxcdG1heC13aWR0aDogMTgwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqIFJlc3VsdCAqKioqKioqKi9cXG5cXG4uYXFpUmVzdWx0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4ubmFtZUNpdHkge1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRsaW5lLWhlaWdodDogMzBweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYXFpQ2l0eSB7XFxuXFx0Zm9udC1zaXplOiA1MHB4O1xcblxcdGxpbmUtaGVpZ2h0OiA1MHB4O1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKioqKioqKiogRm9ybSAqKioqKioqKi9cXG5cXG4uYXFpSW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFx0Ym9yZGVyOiBzb2xpZCAwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDEwcHggMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKioqKioqKiogQVFJIEluZm8gKioqKioqKiovXFxuXFxuLmFxaUluZm8ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLyoqKioqKioqIEZvb3RlciAqKioqKioqKi9cXG5cXG5mb290ZXIsIGZvb3RlciBlbSB7XFxuXFx0bWFyZ2luOiA1MHB4IDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyoqKioqKioqIFJlc3BvbnNpdmUgKioqKioqKiovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcblxcblxcdGJvZHkge1xcblxcdFxcdHBhZGRpbmc6IDBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogVGV4dCAqKioqKioqKi9cXG5cXG5cXHQuaW50cm8ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHRoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdH1cXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNXB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogQWNjb3JkaW9uICoqKioqKioqL1xcblxcblxcdHN1bW1hcnkge1xcblxcdCAgZm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogQm94IFdoaXRlICoqKioqKioqL1xcblxcblxcdC5hcWlCb3gge1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjs7QUFJMUI7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixxQ0FBcUM7Q0FDckMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7QUFFQSw0QkFBNEI7O0FBRTVCO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiwwQ0FBMEM7Q0FDMUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLHVDQUF1QztBQUN4QztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7Q0FDQyxPQUFPLFVBQVUsRUFBRSxpQkFBaUI7Q0FDcEMsT0FBTyxVQUFVLEVBQUUsZUFBZTtBQUNuQztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0FBQ1o7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBLDRCQUE0Qjs7QUFFNUI7Q0FDQyxzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxhQUFhO0FBQ2Q7O0FBRUEsbUNBQW1DOztBQUVuQztDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQSx5QkFBeUI7O0FBRXpCO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBLHVCQUF1Qjs7QUFFdkI7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixhQUFhO0FBQ2Q7O0FBRUEsMkJBQTJCOztBQUUzQjtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUEseUJBQXlCOztBQUV6QjtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQSw2QkFBNkI7O0FBRTdCOztDQUVDO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBLHVCQUF1Qjs7Q0FFdkI7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7O0NBRUEsNEJBQTRCOztDQUU1QjtHQUNFLGVBQWU7Q0FDakI7O0NBRUEsNEJBQTRCOztDQUU1QjtFQUNDLFVBQVU7Q0FDWDs7QUFFRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKiogR2VuZXJhbCAqKioqKioqKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDsxLDEwMDsxLDIwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG5cXG4vKioqKioqKiogVGV4dCAqKioqKioqKi9cXG5cXG4uaW50cm8ge1xcblxcdHdpZHRoOiA3MDBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0cGFkZGluZzogMzBweCAwcHg7XFxufVxcbmgxIHtcXG5cXHRmb250LXNpemU6IDQ1cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDQ1cHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5oMiB7XFxuXFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5pbnRybyBwIHtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qKioqKioqKiBBY2NvcmRpb24gKioqKioqKiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOztcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3gtc2hhZG93OiAwcHggMHB4IDIycHggcmdiKDAsMCwwLDAuMSk7XFxufVxcbmRldGFpbHNbb3Blbl0gc3VtbWFyeSB+ICoge1xcbiBcXHRhbmltYXRpb246IHN3ZWVwIC41cyBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBzd2VlcCB7XFxuXFx0MCUgICAge29wYWNpdHk6IDA7IG1hcmdpbi10b3A6IC0xMHB4fVxcblxcdDEwMCUgIHtvcGFjaXR5OiAxOyBtYXJnaW4tdG9wOiAwcHh9XFxufVxcbmRldGFpbHMgPiBzdW1tYXJ5OjphZnRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG5cXHRyaWdodDogMjBweDtcXG59XFxuZGV0YWlsc1tvcGVuXSA+IHN1bW1hcnk6OmFmdGVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29udGVudDogXFxcIi1cXFwiO1xcblxcdHJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKiogQm94IFdoaXRlICoqKioqKioqL1xcblxcbi5hcWlCb3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSwwLjIpO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6NTAwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGJveC1zaGFkb3c6IDBweCAwcHggMjJweCByZ2IoMCwwLDAsMC4xKTtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKioqKioqKiogWW91ciBDaXR5IEJ1dHRvbiAqKioqKioqKi9cXG5cXG4ueW91dEFxaUNpdHlCdXR0b24ge1xcblxcdG1heC13aWR0aDogMTgwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqIFJlc3VsdCAqKioqKioqKi9cXG5cXG4uYXFpUmVzdWx0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4ubmFtZUNpdHkge1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRsaW5lLWhlaWdodDogMzBweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYXFpQ2l0eSB7XFxuXFx0Zm9udC1zaXplOiA1MHB4O1xcblxcdGxpbmUtaGVpZ2h0OiA1MHB4O1xcblxcdHBhZGRpbmctdG9wOiAxMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKioqKioqKiogRm9ybSAqKioqKioqKi9cXG5cXG4uYXFpSW5wdXQge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFx0Ym9yZGVyOiBzb2xpZCAwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDEwcHggMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKioqKioqKiogQVFJIEluZm8gKioqKioqKiovXFxuXFxuLmFxaUluZm8ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLyoqKioqKioqIEZvb3RlciAqKioqKioqKi9cXG5cXG5mb290ZXIsIGZvb3RlciBlbSB7XFxuXFx0bWFyZ2luOiA1MHB4IDBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxM3B4O1xcblxcdG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyoqKioqKioqIFJlc3BvbnNpdmUgKioqKioqKiovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcblxcblxcdGJvZHkge1xcblxcdFxcdHBhZGRpbmc6IDBweCAyMHB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogVGV4dCAqKioqKioqKi9cXG5cXG5cXHQuaW50cm8ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHRoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzNXB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdH1cXG5cXHRoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiAyNXB4O1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogQWNjb3JkaW9uICoqKioqKioqL1xcblxcblxcdHN1bW1hcnkge1xcblxcdCAgZm9udC1zaXplOiAyMHB4O1xcblxcdH1cXG5cXG5cXHQvKioqKioqKiogQm94IFdoaXRlICoqKioqKioqL1xcblxcblxcdC5hcWlCb3gge1xcblxcdFxcdHdpZHRoOjEwMCU7XFxuXFx0fVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhcGlfa2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVk7XG5jb25zdCBuYW1lQ2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUNpdHlcIik7XG5jb25zdCBhcWlDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcWlDaXR5XCIpO1xuY29uc3QgcmVzdWx0QXFpVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdEFxaVRpdGxlXCIpO1xuY29uc3QgcmVzdWx0QXFpVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0QXFpVGV4dFwiKTtcbmNvbnN0IGlkU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZFNlYXJjaFwiKTtcblxubmFtZUNpdHkuaW5uZXJIVE1MID0gXCJEbyB5b3Ugd2FudCB0byBrbm93IHRoZSBBUUkgb2YgYW5vdGhlciBjaXR5P1wiO1xuYXFpQ2l0eS5pbm5lckhUTUwgPSBcIkxldCdzIGdvIVwiO1xuXG5jb25zdCBpbnRyb1NlcmNoQXFpQ2l0eSA9IGBEbyB5b3Ugd2FudCB0byBrbm93IHRoZSBBUUkgb2YgeW91ciBjaXR5Pzxici8+PGVtIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPlJlbWVtYmVyIHRvIHR1cm4gb24gdGhlIGxvY2F0aW9uIG9uIHlvdXIgZGV2aWNlITwvZW0+YDtcbnJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IGludHJvU2VyY2hBcWlDaXR5O1xuXG5jb25zdCB5b3VyQXFpQ2l0eSA9IGA8YnV0dG9uIGNsYXNzPVwieW91dEFxaUNpdHlCdXR0b25cIiBpZD1cImFxaVlvdXJGaW5kZXJBcWlcIiB0eXBlPVwiYnV0dG9uXCI+T0YgQ09VUlNFITwvYnV0dG9uPmA7XG5yZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IHlvdXJBcWlDaXR5O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFxaVlvdXJGaW5kZXJBcWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15Q2l0eUFxaUZ1bmN0aW9uKTtcblxuZnVuY3Rpb24gbXlDaXR5QXFpRnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgY2l0eSA9IGlkU2VhcmNoLnZhbHVlXG4gICAgbGV0IGNpdHlVUkwgPSBgaHR0cHM6Ly9hcGkud2FxaS5pbmZvL2ZlZWQvaGVyZS8/dG9rZW49JHthcGlfa2V5fWBcblxuICAgIGZldGNoKGNpdHlVUkwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICBuYW1lQ2l0eS5pbm5lckhUTUwgPSBpZFNlYXJjaC52YWx1ZTtcbiAgICAgICAgICAgIGFxaUNpdHkuaW5uZXJIVE1MID0gYXBwLmRhdGEuYXFpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRBcWkgPSBhcWlDaXR5LmlubmVySFRNTDtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBiYWNrZ3JvdW5kQXFpIDw9IDUwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwOTk2NlwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IFwi4piA77iPIEdvb2Qg4piA77iPXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRleHQuaW5uZXJIVE1MID0gXCJBaXIgcXVhbGl0eSBpcyBjb25zaWRlcmVkIHNhdGlzZmFjdG9yeSwgYW5kIGFpciBwb2xsdXRpb24gcG9zZXMgbGl0dGxlIG9yIG5vIHJpc2suXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBiYWNrZ3JvdW5kQXFpIDw9IDEwMDpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmRlMzNcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUaXRsZS5pbm5lckhUTUwgPSBcIuKYge+4jyBNb2RlcmF0ZSDimIHvuI9cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIkFpciBxdWFsaXR5IGlzIGFjY2VwdGFibGU7IGhvd2V2ZXIsIGZvciBzb21lIHBvbGx1dGFudHMgdGhlcmUgbWF5IGJlIGEgbW9kZXJhdGUgaGVhbHRoIGNvbmNlcm4gZm9yIGEgdmVyeSBzbWFsbCBudW1iZXIgb2YgcGVvcGxlIHdobyBhcmUgdW51c3VhbGx5IHNlbnNpdGl2ZSB0byBhaXIgcG9sbHV0aW9uLlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgYmFja2dyb3VuZEFxaSA8PSAxNTA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmY5OTMzXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGl0bGUuaW5uZXJIVE1MID0gXCLimqDvuI8gVW5oZWFsdGh5IGZvciBTZW5zaXRpdmUgR3JvdXBzIOKaoO+4j1wiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IFwiTWVtYmVycyBvZiBzZW5zaXRpdmUgZ3JvdXBzIG1heSBleHBlcmllbmNlIGhlYWx0aCBlZmZlY3RzLiBUaGUgZ2VuZXJhbCBwdWJsaWMgaXMgbm90IGxpa2VseSB0byBiZSBhZmZlY3RlZC5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIGJhY2tncm91bmRBcWkgPD0gMjAwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2NjMDAzM1wiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IFwi4pqg77iPIFVuaGVhbHRoeSDimqDvuI9cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIkV2ZXJ5b25lIG1heSBiZWdpbiB0byBleHBlcmllbmNlIGhlYWx0aCBlZmZlY3RzOyBtZW1iZXJzIG9mIHNlbnNpdGl2ZSBncm91cHMgbWF5IGV4cGVyaWVuY2UgbW9yZSBzZXJpb3VzIGhlYWx0aCBlZmZlY3RzLlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgYmFja2dyb3VuZEFxaSA8PSAzMDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNjYwMDk5XCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGl0bGUuaW5uZXJIVE1MID0gXCLimqDvuI8gVmVyeSBVbmhlYWx0aHkg4pqg77iPXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRleHQuaW5uZXJIVE1MID0gXCJIZWFsdGggd2FybmluZ3Mgb2YgZW1lcmdlbmN5IGNvbmRpdGlvbnMuIFRoZSBlbnRpcmUgcG9wdWxhdGlvbiBpcyBtb3JlIGxpa2VseSB0byBiZSBhZmZlY3RlZC5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIGJhY2tncm91bmRBcWkgPj0gMzAxOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzdlMDAyM1wiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IFwi4pqg77iPIEhhemFyZG91cyDimqDvuI9cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIkhlYWx0aCBhbGVydDogZXZlcnlvbmUgbWF5IGV4cGVyaWVuY2UgbW9yZSBzZXJpb3VzIGhlYWx0aCBlZmZlY3RzIVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgYmFja2dyb3VuZEFxaSA9PT0gXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlOGU4ZThcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUaXRsZS5pbm5lckhUTUwgPSBcIvCflI0gQ2l0eSBub3QgZm91bmRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIgb3Igc2VhcmNoIGZvciBhIG5laWdoYm9yaW5nIGNpdHkuIFRoYW5rIHlvdSBmb3IgdW5kZXJzdGFuZGluZy5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U4ZThlOFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJTaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSFcIikpO1xuXG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXFpRmluZGVyQXFpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaXR5QXFpRnVuY3Rpb24pO1xuXG5mdW5jdGlvbiBjaXR5QXFpRnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgY2l0eSA9IGlkU2VhcmNoLnZhbHVlXG4gICAgbGV0IGNpdHlVUkwgPSBgaHR0cHM6Ly9hcGkud2FxaS5pbmZvL2ZlZWQvYCArIGNpdHkgKyBgLz90b2tlbj0ke2FwaV9rZXl9YFxuXG4gICAgZmV0Y2goY2l0eVVSTClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXBwID0+IHtcbiAgICAgICAgICAgIG5hbWVDaXR5LmlubmVySFRNTCA9IGlkU2VhcmNoLnZhbHVlO1xuICAgICAgICAgICAgYXFpQ2l0eS5pbm5lckhUTUwgPSBhcHAuZGF0YS5hcWk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZEFxaSA9IGFxaUNpdHkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIGJhY2tncm91bmRBcWkgPD0gNTA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDA5OTY2XCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGl0bGUuaW5uZXJIVE1MID0gXCLimIDvuI8gR29vZCDimIDvuI9cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIkFpciBxdWFsaXR5IGlzIGNvbnNpZGVyZWQgc2F0aXNmYWN0b3J5LCBhbmQgYWlyIHBvbGx1dGlvbiBwb3NlcyBsaXR0bGUgb3Igbm8gcmlzay5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIGJhY2tncm91bmRBcWkgPD0gMTAwOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZGUzM1wiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IFwi4piB77iPIE1vZGVyYXRlIOKYge+4j1wiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IFwiQWlyIHF1YWxpdHkgaXMgYWNjZXB0YWJsZTsgaG93ZXZlciwgZm9yIHNvbWUgcG9sbHV0YW50cyB0aGVyZSBtYXkgYmUgYSBtb2RlcmF0ZSBoZWFsdGggY29uY2VybiBmb3IgYSB2ZXJ5IHNtYWxsIG51bWJlciBvZiBwZW9wbGUgd2hvIGFyZSB1bnVzdWFsbHkgc2Vuc2l0aXZlIHRvIGFpciBwb2xsdXRpb24uXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBiYWNrZ3JvdW5kQXFpIDw9IDE1MDpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjk5MzNcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUaXRsZS5pbm5lckhUTUwgPSBcIuKaoO+4jyBVbmhlYWx0aHkgZm9yIFNlbnNpdGl2ZSBHcm91cHMg4pqg77iPXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRleHQuaW5uZXJIVE1MID0gXCJNZW1iZXJzIG9mIHNlbnNpdGl2ZSBncm91cHMgbWF5IGV4cGVyaWVuY2UgaGVhbHRoIGVmZmVjdHMuIFRoZSBnZW5lcmFsIHB1YmxpYyBpcyBub3QgbGlrZWx5IHRvIGJlIGFmZmVjdGVkLlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgYmFja2dyb3VuZEFxaSA8PSAyMDA6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjY2MwMDMzXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGl0bGUuaW5uZXJIVE1MID0gXCLimqDvuI8gVW5oZWFsdGh5IOKaoO+4j1wiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IFwiRXZlcnlvbmUgbWF5IGJlZ2luIHRvIGV4cGVyaWVuY2UgaGVhbHRoIGVmZmVjdHM7IG1lbWJlcnMgb2Ygc2Vuc2l0aXZlIGdyb3VwcyBtYXkgZXhwZXJpZW5jZSBtb3JlIHNlcmlvdXMgaGVhbHRoIGVmZmVjdHMuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBiYWNrZ3JvdW5kQXFpIDw9IDMwMDpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM2NjAwOTlcIjtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUaXRsZS5pbm5lckhUTUwgPSBcIuKaoO+4jyBWZXJ5IFVuaGVhbHRoeSDimqDvuI9cIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGV4dC5pbm5lckhUTUwgPSBcIkhlYWx0aCB3YXJuaW5ncyBvZiBlbWVyZ2VuY3kgY29uZGl0aW9ucy4gVGhlIGVudGlyZSBwb3B1bGF0aW9uIGlzIG1vcmUgbGlrZWx5IHRvIGJlIGFmZmVjdGVkLlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgYmFja2dyb3VuZEFxaSA+PSAzMDE6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjN2UwMDIzXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXFpVGl0bGUuaW5uZXJIVE1MID0gXCLimqDvuI8gSGF6YXJkb3VzIOKaoO+4j1wiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IFwiSGVhbHRoIGFsZXJ0OiBldmVyeW9uZSBtYXkgZXhwZXJpZW5jZSBtb3JlIHNlcmlvdXMgaGVhbHRoIGVmZmVjdHMhXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBiYWNrZ3JvdW5kQXFpID09PSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U4ZThlOFwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEFxaVRpdGxlLmlubmVySFRNTCA9IFwi8J+UjSBDaXR5IG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRBcWlUZXh0LmlubmVySFRNTCA9IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlciBvciBzZWFyY2ggZm9yIGEgbmVpZ2hib3JpbmcgY2l0eS4gVGhhbmsgeW91IGZvciB1bmRlcnN0YW5kaW5nLlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZThlOGU4XCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlNpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlIVwiKSk7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==