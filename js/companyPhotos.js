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

/***/ "./src/blocks/modules/COMPANY/company-photos/company-photos.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/COMPANY/company-photos/company-photos.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* eslint-disable no-unused-vars */


function uploadingPhotos() {
  var files = [],
      input = document.querySelector("#photos-upload"),
      container = document.querySelector(".company-photos__gallery");
  input.addEventListener("change", function () {
    var file = input.files;
    if (file.length == 0) return;

    var _loop = function _loop(i) {
      if (file[i].type.split("/")[0] != "image") return "continue";
      if (!files.some(function (e) {
        return e.name == file[i].name;
      })) files.push(file[i]);
    };

    for (var i = 0; i < file.length; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    showImages();
    sortPhotos();
  });

  function showImages() {
    if (files.length > 0) {
      container.classList.add("show-gallery");
      container.parentElement.classList.add("show-gallery");
    } else {
      container.classList.remove("show-gallery");
      container.parentElement.classList.remove("show-gallery");
    }

    container.innerHTML = files.reduce(function (prev, curr) {
      return "".concat(prev, "\n      <div class=\"company-photos__image\"  >\n\n        <svg class=\"company-photos__delete\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"white\"/>\n        <path d=\"M14.2273 7.59026C14.2273 7.20449 14.074 6.83452 13.8012 6.56174C13.5285 6.28896 13.1585 6.13571 12.7727 6.13571C12.387 6.13571 12.017 6.28896 11.7442 6.56174C11.4714 6.83452 11.3182 7.20449 11.3182 7.59026H10.3485C10.3485 6.94731 10.6039 6.33069 11.0585 5.87606C11.5132 5.42143 12.1298 5.16602 12.7727 5.16602C13.4157 5.16602 14.0323 5.42143 14.4869 5.87606C14.9416 6.33069 15.197 6.94731 15.197 7.59026H19.5606C19.6892 7.59026 19.8125 7.64134 19.9034 7.73227C19.9944 7.82319 20.0455 7.94652 20.0455 8.07511C20.0455 8.2037 19.9944 8.32702 19.9034 8.41795C19.8125 8.50887 19.6892 8.55995 19.5606 8.55995H19.0234L17.7667 19.4496C17.712 19.9223 17.4854 20.3583 17.1301 20.6748C16.7749 20.9912 16.3157 21.1661 15.8399 21.166H9.70558C9.22979 21.1661 8.77058 20.9912 8.41531 20.6748C8.06004 20.3583 7.8335 19.9223 7.77879 19.4496L6.52109 8.55995H5.98485C5.87137 8.55999 5.76147 8.52022 5.67429 8.44758C5.58712 8.37493 5.52818 8.274 5.50776 8.16238L5.5 8.07511C5.5 7.94652 5.55108 7.82319 5.64201 7.73227C5.73294 7.64134 5.85626 7.59026 5.98485 7.59026H14.2273ZM18.0459 8.55995H7.49855L8.7417 19.3381C8.76906 19.5745 8.8824 19.7926 9.06014 19.9509C9.23788 20.1091 9.4676 20.1965 9.70558 20.1963H15.8399C16.0777 20.1962 16.3072 20.1088 16.4847 19.9505C16.6622 19.7923 16.7754 19.5744 16.8028 19.3381L18.0459 8.55995ZM11.3182 10.9842C11.5558 10.9842 11.7545 11.1345 11.7953 11.3323L11.803 11.4089V17.3483C11.803 17.582 11.5858 17.7721 11.3182 17.7721C11.0806 17.7721 10.8818 17.6218 10.8411 17.424L10.8333 17.3473V11.4099C10.8333 11.1752 11.0505 10.9852 11.3182 10.9852V10.9842ZM14.2273 10.9842C14.4648 10.9842 14.6636 11.1345 14.7044 11.3323L14.7121 11.4089V17.3483C14.7121 17.582 14.4949 17.7721 14.2273 17.7721C13.9897 17.7721 13.7909 17.6218 13.7502 17.424L13.7424 17.3473V11.4099C13.7424 11.1752 13.9596 10.9852 14.2273 10.9852V10.9842Z\"/>\n        </svg>        \n        <img src=\"").concat(URL.createObjectURL(curr), "\" />\n      </div>");
    }, "");
    document.querySelectorAll(".company-photos__delete").forEach(function (element, i) {
      element.addEventListener("click", function () {
        delImage(i);
      });
    });
  }

  function delImage(index) {
    files.splice(index, 1);
    showImages();
  }
}

uploadingPhotos();

function sortPhotos() {
  var el = document.querySelector(".company-photos__gallery");
  var sortable = sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"].create(el);
}

sortPhotos();

/***/ }),

/***/ "./src/js/company-photos.js":
/*!**********************************!*\
  !*** ./src/js/company-photos.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_components_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components-company */ "./src/js/import/components-company.js");
/* harmony import */ var _import_modules_company_photos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules-company-photos */ "./src/js/import/modules-company-photos.js");
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

/***/ "./src/js/import/modules-company-photos.js":
/*!*************************************************!*\
  !*** ./src/js/import/modules-company-photos.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_COMPANY_company_photos_company_photos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/COMPANY/company-photos/company-photos */ "./src/blocks/modules/COMPANY/company-photos/company-photos.js");


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
/******/ 			"companyPhotos": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/company-photos.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=companyPhotos.js.map