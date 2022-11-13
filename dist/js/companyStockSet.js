/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/COMPANY/side-bar/side-bar.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/COMPANY/side-bar/side-bar.js ***!
  \************************************************************/
/***/ (function() {

var getMainBtn = document.querySelector(".side-bar__open ");
var getCloseBtn = document.querySelector(".side-bar__close");
var getMainSideBar = document.querySelector(".side-bar ");
getMainBtn.addEventListener("click", function () {
  if (!getMainSideBar.classList.contains("side-bar-opened")) {
    getMainSideBar.classList.add("side-bar-opened");
    getMainBtn.style.opacity = "0";
    document.body.style.overflow = "hidden";
  } else {
    getMainSideBar.classList.remove("side-bar-opened");
    getMainBtn.classList.remove("button-hidden");
    document.body.style.overflow = "";
  }
});
getCloseBtn.addEventListener("click", function () {
  getMainSideBar.classList.remove("side-bar-opened");
  getMainBtn.style.opacity = "1";
  document.body.style.overflow = "";
});
getMainSideBar.addEventListener("click", function (e) {
  if (e.target.classList.contains("side-bar-opened") || e.target.classList.contains("side-bar__inner")) {
    document.body.style.overflow = "";
    getMainSideBar.classList.remove("side-bar-opened");
    getMainBtn.style.opacity = "1";
  }
});

/***/ }),

/***/ "./src/blocks/modules/COMPANY/company-stock-set/company-stock-set.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/modules/COMPANY/company-stock-set/company-stock-set.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-unused-vars */


function initPopover() {
  var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  var popoverList = _toConsumableArray(popoverTriggerList).map(function (popoverTriggerEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Popover(popoverTriggerEl, {
      html: true
    });
  });
}

initPopover();

function changeOffers() {
  var getRadioButtons = document.querySelectorAll('.stock-set__radio-offer');
  var getDynamicText = document.querySelector('.stock-set__dynamic-text');

  function hideAllDynamicContent() {
    document.querySelectorAll('.stock-set__dynamic-content').forEach(function (element) {
      element.style.display = 'none';
      console.log(element);
    });
  }

  function showContent(className) {
    document.querySelector(className).style.display = 'flex';
  }

  getRadioButtons.forEach(function (btn, i) {
    btn.addEventListener('change', function () {
      getDynamicText.innerText = "\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ".concat(i + 1, " (").concat(btn.value, ")");

      switch (btn.id) {
        case 'discount':
          hideAllDynamicContent();
          showContent('.stock-set__discount-content');
          break;

        case 'gift':
          hideAllDynamicContent();
          showContent('.stock-set__gift-content');
          break;

        case 'hourly-rate':
          hideAllDynamicContent();
          showContent('.stock-set__hourly-content');
          break;

        case 'package-rate':
          hideAllDynamicContent();
          showContent('.stock-set__package-content');
          break;
      }
    });
  });
}

changeOffers();

function getText() {
  var getAllText = document.querySelectorAll('.stock-set__dropdown-item');
  getAllText.forEach(function (element) {
    element.addEventListener('click', function () {
      element.parentElement.parentElement.firstElementChild.innerText = element.innerText;
    });
  });
}

getText();

function addOrDeleteDate() {
  var getAddBtn = document.querySelector('.stock-set__date-add');

  function createNewDate() {
    var getDateField = document.querySelector('.stock-set__date-content');
    var dateElement = document.createElement('div');
    dateElement.classList.add('stock-set__field');
    dateElement.innerHTML = "\n    <button class=\"stock-set__dropdown-button\" id=\"dropdown-item\" type=\"button\"\n    onclick=\"this.classList.toggle('dropdown-opened')\">\n      <p class=\"stock-set__dropdown-txt\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)</p>\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z\" fill=\"#2F2F2F\">\n      </path>\n      </svg>\n      <div class=\"stock-set__dropdown-menu\" id=\"menu-branches\"><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-1</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-2</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-3</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-4</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-5</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-6</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-7</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-8</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-9</span><span class=\"stock-set__dropdown-item\"\n        data-branches=\"some-branches\">21.06.21-18.07.21 (\u043F\u043D, \u0432\u0442, \u0441\u0431,\u0432\u0441)-10</span>\n      </div>    \n    </button>\n    <svg class=\"stock-set__date-remove\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" onclick=\"this.parentElement.remove()\">\n      <circle cx=\"13\" cy=\"13\" r=\"11.3\" stroke=\"black\" stroke-width=\"1.4\"/>\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z\" fill=\"#2F2F2F\"/>\n    </svg>  \n    ";
    getDateField.appendChild(dateElement);
  }

  getAddBtn.addEventListener('click', function () {
    createNewDate();
    getText();
  });
}

addOrDeleteDate();

/***/ }),

/***/ "./src/js/company-stock-set.js":
/*!*************************************!*\
  !*** ./src/js/company-stock-set.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_components_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components-company */ "./src/js/import/components-company.js");
/* harmony import */ var _import_modules_company_stock_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules-company-stock-set */ "./src/js/import/modules-company-stock-set.js");
/* eslint-disable no-unused-vars */




/***/ }),

/***/ "./src/js/import/components-company.js":
/*!*********************************************!*\
  !*** ./src/js/import/components-company.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_COMPANY_side_bar_side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/COMPANY/side-bar/side-bar */ "./src/blocks/components/COMPANY/side-bar/side-bar.js");
/* harmony import */ var _components_COMPANY_side_bar_side_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_COMPANY_side_bar_side_bar__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules-company-stock-set.js":
/*!****************************************************!*\
  !*** ./src/js/import/modules-company-stock-set.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_COMPANY_company_stock_set_company_stock_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/COMPANY/company-stock-set/company-stock-set */ "./src/blocks/modules/COMPANY/company-stock-set/company-stock-set.js");


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"companyStockSet": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksauna"] = self["webpackChunksauna"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/company-stock-set.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=companyStockSet.js.map