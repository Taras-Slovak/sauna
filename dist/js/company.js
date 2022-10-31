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

/***/ "./src/blocks/modules/COMPANY/company-contacts/company-contacts.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/modules/COMPANY/company-contacts/company-contacts.js ***!
  \*************************************************************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-useless-escape */
function addOrRemove() {
  var getMainField = document.querySelector(" .company-contacts__telephone-group");
  var getAddButtons = document.querySelector(".company-contacts__telephone-add");

  function addNewElement() {
    var newTelephone = document.createElement("div");
    newTelephone.classList.add("company-contacts__telephone");
    newTelephone.innerHTML = "\n    <div class=\"company-contacts__field\">\n      <label for=\"telephone\">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n      <input id=\"telephone\" name=\"telephone\" type=\"text\" placeholder=\"+38 067 123-23-23\">\n    </div>\n    <button class=\"company-contacts__telephone-delete\" type=\"button\">\n      <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"13\" cy=\"13\" r=\"12\" fill=\"#2F2F2F\"></circle>\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z\"></path>\n      </svg>\n    </button>\n    ";
    getMainField.appendChild(newTelephone);
  }

  getAddButtons.addEventListener("click", function () {
    addNewElement();

    _toConsumableArray(getMainField.children).forEach(function (element) {
      var btn = element.firstElementChild.nextElementSibling;
      btn.addEventListener("click", function () {
        if (btn.classList.contains("company-contacts__telephone-delete")) element.remove();
      });
    });
  });
}

addOrRemove();

function removeAddTime() {
  var getAddBtn = document.querySelector(".company-contacts__time-add");
  getAddBtn.addEventListener("click", function () {
    createNewDate();
    var getAllDelete = document.querySelectorAll(".company-contacts__date");
    getText();
    getAllDelete.forEach(function (item) {
      var getDeleteBtn = item.firstElementChild.nextElementSibling.nextElementSibling;
      getDeleteBtn.addEventListener("click", function () {
        if (getDeleteBtn.classList.contains("company-contacts__time-delete")) item.remove();
        getText();
      });
    });
  });
}

function createNewDate() {
  var getDatePicker = document.querySelector(".company-contacts__date-picker");
  var newDate = document.createElement("div");
  newDate.classList.add("company-contacts__date");
  newDate.innerHTML = "\n\n  <div class=\"company-contacts__days\">\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u041F\u043D\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u0412\u0442\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u0421\u0440\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u0427\u0442\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u041F\u0442\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u0421\u0431\n    </button>\n    <button\n      class=\"company-contacts__day\"\n      type=\"button\"\n      onclick=\"this.classList.toggle('background-grey')\"\n    >\n      \u0412\u0441\n    </button>\n</div>\n<div class=\"company-contacts__times\">\n  <div class=\"company-contacts__field\">\n    <button onclick=\"this.classList.toggle('dropdown-opened')\"\n      class=\"company-contacts__dropdown-button\"\n      id=\"dropdown-item\"\n      type=\"button\"\n    >\n      <p class=\"company-contacts__dropdown-txt\">00:00</p>\n      <svg\n        width=\"20\"\n        height=\"20\"\n        viewBox=\"0 0 20 20\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z\"\n          fill=\"#2F2F2F\"\n        />\n      </svg>\n      <div class=\"company-contacts__dropdown-menu\" id=\"menu-hour\">\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"00:00\">\n          00:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"01:00\">\n          01:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"02:00\">\n          02:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"03:00\">\n          03:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"04:00\">\n          04:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"05:00\">\n          05:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"06:00\">\n          06:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"07:00\">\n          07:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"08:00\">\n          08:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"09:00\">\n          09:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"10:00\">\n          10:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"11:00\">\n          11:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"12:00\">\n          12:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"13:00\">\n          13:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"14:00\">\n          14:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"15:00\">\n          15:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"16:00\">\n          16:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"17:00\">\n          17:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"18:00\">\n          18:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"19:00\">\n          19:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"20:00\">\n          20:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"21:00\">\n          21:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"22:00\">\n          22:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"23:00\">\n          23:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"24:00\">\n          24:00\n        </span>\n      </div>\n    </button>\n  </div>\n  <span class=\"company-contacts__line\"> </span>\n  <div class=\"company-contacts__field\">\n    <button onclick=\"this.classList.toggle('dropdown-opened')\"\n      class=\"company-contacts__dropdown-button\"\n      id=\"dropdown-item\"\n      type=\"button\"\n    >\n      <p class=\"company-contacts__dropdown-txt\">00:00</p>\n      <svg\n        width=\"20\"\n        height=\"20\"\n        viewBox=\"0 0 20 20\"\n        fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          d=\"M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z\"\n          fill=\"#2F2F2F\"\n        />\n      </svg>\n      <div class=\"company-contacts__dropdown-menu\" id=\"menu-hour\" >\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"00:00\">\n          00:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"01:00\">\n          01:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"02:00\">\n          02:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"03:00\">\n          03:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"04:00\">\n          04:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"05:00\">\n          05:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"06:00\">\n          06:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"07:00\">\n          07:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"08:00\">\n          08:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"09:00\">\n          09:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"10:00\">\n          10:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"11:00\">\n          11:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"12:00\">\n          12:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"13:00\">\n          13:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"14:00\">\n          14:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"15:00\">\n          15:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"16:00\">\n          16:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"17:00\">\n          17:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"18:00\">\n          18:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"19:00\">\n          19:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"20:00\">\n          20:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"21:00\">\n          21:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"22:00\">\n          22:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"23:00\">\n          23:00\n        </span>\n        <span class=\"company-contacts__dropdown-item\" data-hour=\"24:00\">\n          24:00\n        </span>\n      </div>\n    </button>\n  </div>\n</div>\n<button class=\"company-contacts__time-delete\" type=\"button\">\n  <svg\n    width=\"26\"\n    height=\"26\"\n    viewBox=\"0 0 26 26\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <circle cx=\"13\" cy=\"13\" r=\"12\" fill=\"#2F2F2F\"></circle>\n    <path\n      fill-rule=\"evenodd\"\n      clip-rule=\"evenodd\"\n      d=\"M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z\"\n    ></path>\n  </svg>\n</button>\n  \n  ";
  getDatePicker.appendChild(newDate);
}

removeAddTime();

function getText() {
  var getAllText = document.querySelectorAll(".company-contacts__dropdown-item");
  getAllText.forEach(function (element) {
    element.addEventListener("click", function () {
      element.parentElement.parentElement.firstElementChild.innerText = element.innerText;
      console.log(element.parentElement.parentElement.firstElementChild.innerText);
    });
  });
}

getText();

function uploadingLogo() {
  var getInputFile = document.getElementById("contacts-img-upload");
  getInputFile.addEventListener("change", uploadYourLogo);

  function uploadYourLogo() {
    var path = getInputFile.value;
    var extension = path.split(".").pop();
    var getImg = document.getElementById("contacts-img-preview");

    if (extension == "jpg" || extension == "svg" || extension == "jpeg" || extension == "png" || extension == "webp") {
      getImg.classList.add("company-contacts__uploading-img");
      getImg.src = window.URL.createObjectURL(getInputFile.files[0]); // const filename = path
      //   .replace(/^.*[\\\/]/, "")
      //   .split(".")
      //   .slice(0, -1)
      //   .join(".");
      // document.getElementById("contacts-img-filename").innerHTML = filename;

      document.getElementById("contacts-img-filename").style.display = "none";
    } else {
      alert("File not supported");
    }
  }
}

uploadingLogo();

/***/ }),

/***/ "./src/js/company.js":
/*!***************************!*\
  !*** ./src/js/company.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_components_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components-company */ "./src/js/import/components-company.js");
/* harmony import */ var _import_modules_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules-company */ "./src/js/import/modules-company.js");
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

/***/ "./src/js/import/modules-company.js":
/*!******************************************!*\
  !*** ./src/js/import/modules-company.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_COMPANY_company_contacts_company_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/COMPANY/company-contacts/company-contacts */ "./src/blocks/modules/COMPANY/company-contacts/company-contacts.js");
/* harmony import */ var _modules_COMPANY_company_contacts_company_contacts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_COMPANY_company_contacts_company_contacts__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 			"company": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/company.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=company.js.map