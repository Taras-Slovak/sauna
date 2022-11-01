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
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function uploadingPhotos() {
  var dropBox = document.getElementById("dropBox");
  var getInputFile = document.getElementById("imgUpload");
  getInputFile.addEventListener("change", filesManager); // modify all of the event types needed for the script so that the browser
  // doesn't open the image in the browser tab (default behavior)

  ["dragenter", "dragover", "dragleave", "drop"].forEach(function (evt) {
    dropBox.addEventListener(evt, prevDefault, false);
  });

  function prevDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  } // remove and add the hover class, depending on whether something is being
  // actively dragged over the box area


  ["dragenter", "dragover"].forEach(function (evt) {
    dropBox.addEventListener(evt, hover, false);
  });
  ["dragleave", "drop"].forEach(function (evt) {
    dropBox.addEventListener(evt, unhover, false);
  });

  function hover() {
    dropBox.classList.add("hover");
  }

  function unhover() {
    dropBox.classList.remove("hover");
  } // the DataTransfer object holds the data being dragged. it's accessible
  // from the dataTransfer property of drag events. the files property has
  // a list of all the files being dragged. put it into the filesManager function


  dropBox.addEventListener("drop", mngDrop, false);

  function mngDrop(e) {
    var dataTrans = e.dataTransfer;
    var files = dataTrans.files;
    filesManager(files);
  } // use FormData browser API to create a set of key/value pairs representing
  // form fields and their values, to send using XMLHttpRequest.send() method.
  // Uses the same format a form would use with multipart/form-data encoding


  function upFile(file) {
    //only allow images to be dropped
    var imageType = /image.*/;

    if (file.type.match(imageType)) {
      var url = "HTTP/HTTPS URL TO SEND THE DATA TO"; // create a FormData object

      var formData = new FormData(); // add a new value to an existing key inside a FormData object or add the
      // key if it doesn't exist. the filesManager function will loop through
      // each file and send it here to be added

      formData.append("file", file); // standard file upload fetch setup

      fetch(url, {
        method: "put",
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log("Success:", result);
      }).catch(function (error) {
        console.error("Error:", error);
      });
    } else {
      console.error("Only images are allowed!", file);
    }
  } // use the FileReader API to get the image data, create an img element, and add
  // it to the gallery div. The API is asynchronous so onloadend is used to get the
  // result of the API function


  function previewFile(file) {
    // only allow images to be dropped
    var imageType = /image.*/;

    if (file.type.match(imageType)) {
      var fReader = new FileReader();
      var gallery = document.getElementById("gallery"); // reads the contents of the specified Blob. the result attribute of this
      // with hold a data: URL representing the file's data

      fReader.readAsDataURL(file); // handler for the loadend event, triggered when the reading operation is
      // completed (whether success or failure)

      fReader.onloadend = function () {
        var wrap = document.createElement("div");
        var img = document.createElement("img"); // set the img src attribute to the file's contents (from read operation)

        img.src = fReader.result;
        var imgCapt = document.createElement("p"); // the name prop of the file contains the file name, and the size prop
        // the file size. convert bytes to KB for the file size

        var fSize = file.size / 1000 + " KB";
        imgCapt.innerHTML = "<span class=\"fName\">".concat(file.name, "</span><span class=\"fSize\">").concat(fSize, "</span><span class=\"fType\">").concat(file.type, "</span>");
        gallery.appendChild(wrap).appendChild(img);
        gallery.appendChild(wrap).appendChild(imgCapt);
      };
    } else {
      console.error("Only images are allowed!", file);
    }
  }

  function filesManager(files) {
    // spread the files array from the DataTransfer.files property into a new
    // files array here
    files = _toConsumableArray(getInputFile.files); // send each element in the array to both the upFile and previewFile
    // functions

    files.forEach(upFile);
    files.forEach(previewFile);
  }
}

uploadingPhotos();

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
/* harmony import */ var _modules_COMPANY_company_photos_company_photos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_COMPANY_company_photos_company_photos__WEBPACK_IMPORTED_MODULE_0__);


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