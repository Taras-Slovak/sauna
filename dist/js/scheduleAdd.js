/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/SCHEDULE/schedule-add/schedule-add.js":
/*!******************************************************************!*\
  !*** ./src/blocks/modules/SCHEDULE/schedule-add/schedule-add.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

function getText() {
  var getAllText = document.querySelectorAll('.schedule-add__dropdown-item');
  getAllText.forEach(function (element) {
    element.addEventListener('click', function () {
      element.parentElement.parentElement.firstElementChild.innerText = element.innerText;
    });
  });
}

getText();

function cloneElement() {
  var getAddBtn = document.querySelectorAll('.schedule-add__time-add');
  var cloneDeepElement = document.querySelector('.schedule-add__date');
  getAddBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      var getElementGroup = element.parentElement.parentElement;
      var clonedElement = cloneDeepElement.cloneNode(true);
      var newElement = document.createElement('div');
      newElement.classList.add('schedule-add__flat-field', 'schedule-add__date-item');
      var removeButton = document.createElement('button');
      removeButton.classList.add('schedule-add__remove-btn');
      removeButton.innerHTML = "\n      <svg viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\n      onclick = \"this.parentElement.parentElement.remove()\"\n      >\n        <circle cx=\"16.9999\" cy=\"17\" r=\"12\" transform=\"rotate(-45 16.9999 17)\" fill=\"#2F2F2F\"/>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.9505 12.8899C13.6576 12.597 13.1827 12.597 12.8898 12.8899C12.5969 13.1828 12.597 13.6577 12.8898 13.9506L15.9392 17L12.8898 20.0494C12.597 20.3423 12.5969 20.8172 12.8898 21.1101C13.1827 21.403 13.6576 21.403 13.9505 21.1101L16.9999 18.0607L20.0493 21.1101C20.3422 21.403 20.8171 21.403 21.11 21.1101C21.4029 20.8172 21.4029 20.3423 21.11 20.0494L18.0606 17L21.11 13.9506C21.4029 13.6577 21.4029 13.1828 21.11 12.8899C20.8171 12.597 20.3422 12.597 20.0493 12.8899L16.9999 15.9393L13.9505 12.8899Z\" fill=\"white\"/>\n      </svg>\n      ";
      newElement.append(clonedElement);
      newElement.append(removeButton);
      getElementGroup.append(newElement);
      getText();
    });
  });
}

cloneElement();

function toggleCalculation() {
  var getAllRadio = document.querySelectorAll('.schedule-add__radio-calculation');
  getAllRadio.forEach(function (radio) {
    radio.addEventListener('change', function () {
      var inputPlace = radio.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling;
      var inputAddPlace = radio.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
      var inputPrice = radio.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling;
      var inputAddPrice = radio.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;

      if (radio.checked && radio.classList.contains('schedule-add__radio-place')) {
        inputPlace.classList.add('input-active');
        inputAddPlace.classList.add('input-active');
        inputPrice.classList.remove('input-active');
        inputAddPrice.classList.remove('input-active');
      }

      if (radio.checked && radio.classList.contains('schedule-add__radio-price')) {
        inputPrice.classList.add('input-active');
        inputAddPrice.classList.add('input-active');
        inputPlace.classList.remove('input-active');
        inputAddPlace.classList.remove('input-active');
      }
    });
  });
}

toggleCalculation();

/***/ }),

/***/ "./src/js/import/modules-schedule-add.js":
/*!***********************************************!*\
  !*** ./src/js/import/modules-schedule-add.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SCHEDULE_schedule_add_schedule_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/SCHEDULE/schedule-add/schedule-add */ "./src/blocks/modules/SCHEDULE/schedule-add/schedule-add.js");


/***/ }),

/***/ "./src/js/schedule-add.js":
/*!********************************!*\
  !*** ./src/js/schedule-add.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_schedule_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules-schedule-add */ "./src/js/import/modules-schedule-add.js");
/* eslint-disable no-unused-vars */


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
/******/ 			"scheduleAdd": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/schedule-add.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scheduleAdd.js.map