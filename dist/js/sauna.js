/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/SAUNA/slider-sauna/slider-sauna.js":
/*!******************************************************************!*\
  !*** ./src/blocks/components/SAUNA/slider-sauna/slider-sauna.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* eslint-disable no-unused-vars */


/***/ }),

/***/ "./src/blocks/modules/SAUNA/footer/footer.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/SAUNA/footer/footer.js ***!
  \***************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/SAUNA/header/header.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/SAUNA/header/header.js ***!
  \***************************************************/
/***/ (function() {

function showHideNavbar() {
  var getNavBarSauna = document.querySelector("#saunaNavBar");
  var getMenuSauna = document.querySelector(".menu-sauna");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
      getNavBarSauna.style.display = "none";
      getMenuSauna.style.display = "flex";
    } else {
      getNavBarSauna.style.display = "flex";
      getMenuSauna.style.display = "none";
    }
  });
}

showHideNavbar();

/***/ }),

/***/ "./src/blocks/modules/SAUNA/main/main.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/SAUNA/main/main.js ***!
  \***********************************************/
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function booking() {
  var getAllBooking = document.querySelectorAll(".booking");
  getAllBooking.forEach(function (elements) {
    var getAllButtons = elements.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.children;

    _toConsumableArray(getAllButtons).forEach(function (button) {
      button.addEventListener("click", function (e) {
        elements.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.display = "flex";
        e.currentTarget.firstElementChild.classList.toggle("booked");
      });
    });
  });
}

booking();

function pickerAmount() {
  var getAllPickers = document.querySelectorAll(".booking .booking__picker");
  getAllPickers.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      var number = e.currentTarget.firstElementChild.nextElementSibling;

      if (e.target.classList.contains("booking__picker-minus")) {
        if (number.textContent > 0) {
          number.textContent = --number.textContent;
        }
      }

      if (e.target.classList.contains("booking__picker-plus")) {
        if (number.textContent < 8) {
          number.textContent = ++number.textContent;
        }
      }
    });
  });
}

pickerAmount();

/***/ }),

/***/ "./src/blocks/modules/SAUNA/map-sauna/map-sauna.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/SAUNA/map-sauna/map-sauna.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */


function renderingMapOfSauna() {
  var isFullScreen = false;
  var map;

  function renderSaunaMap() {
    var mapOptions = {
      center: [50.4368368475358, 30.401243422712376],
      zoom: 12,
      zoomControl: false
    };
    map = new L.map("map-sauna", mapOptions);
    var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    L.control.zoom({
      position: "topright"
    }).addTo(map);
    map.addLayer(layer);
    var locationSauna = L.icon({
      iconUrl: "img/SAUNA/icon/location-sauna.svg",
      iconSize: [25, 25],
      popupAnchor: [-3, -25]
    });
    L.marker([50.4368368475358, 30.401243422712376], {
      icon: locationSauna
    }).addTo(map).bindPopup("Сауна Аквамарин");
  }

  renderSaunaMap();

  function getLocationSauna() {
    var locationBtn = document.querySelector(".map-sauna__location");
    locationBtn.addEventListener("click", function () {
      var successCallback = function successCallback(_ref) {
        var coords = _ref.coords;
        console.log(coords.latitude);
      };

      var errorCallback = function errorCallback(error) {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    });
  }

  getLocationSauna();
}

renderingMapOfSauna();

/***/ }),

/***/ "./src/blocks/modules/SAUNA/reviews/reviews.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/SAUNA/reviews/reviews.js ***!
  \*****************************************************/
/***/ (function() {

function tabulation() {
  var getServiceBtn = document.querySelector(".reviews__service-btn");
  var getFlampBtn = document.querySelector(".reviews__flamp-btn");
  var getService = document.querySelector(".reviews__service");
  var getFlamp = document.querySelector(".reviews__flamp");
  getServiceBtn.addEventListener("click", function () {
    getServiceBtn.classList.add("active-tab");
    getFlampBtn.classList.remove("active-tab");
    getService.style.height = "auto";
    getService.style.opacity = "1";
    getFlamp.style.height = "0";
    getFlamp.style.opacity = "0";
  });
  getFlampBtn.addEventListener("click", function () {
    getFlampBtn.classList.add("active-tab");
    getServiceBtn.classList.remove("active-tab");
    getService.style.height = "0";
    getService.style.opacity = "0";
    getFlamp.style.height = "auto";
    getFlamp.style.opacity = "1";
  });
}

tabulation();

/***/ }),

/***/ "./src/blocks/modules/SAUNA/sauna-card/sauna-card.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/SAUNA/sauna-card/sauna-card.js ***!
  \***********************************************************/
/***/ (function() {

function showLessOrMore() {
  var getButtons = document.querySelectorAll(".sauna-card__btn-capacity");
  getButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.open === "false") {
        button.innerHTML = "\n        <p>\u0421\u043A\u0440\u044B\u0442\u044C</p> \n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M6.175 12.8417L10 9.02501L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z\" />\n        </svg>\n      ";
        button.previousElementSibling.classList.add("height-auto");
        button.dataset.open = "true";
      } else {
        button.innerHTML = "\n        <p> \u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 </p>\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"   xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.825 6.66663L10 10.4833L6.175 6.66663L5 7.84163L10 12.8416L15 7.84163L13.825 6.66663Z\"/>\n        </svg>\n        ";
        button.previousElementSibling.classList.remove("height-auto");
        button.dataset.open = "false";
      }
    });
  });
}

showLessOrMore();

function accordion() {
  var getAllBtn = document.querySelectorAll(".sauna-card__offers-top");
  getAllBtn.forEach(function (element) {
    element.addEventListener("click", function () {
      if (element.dataset.open === "false") {
        element.nextElementSibling.classList.add("sauna-card__open");
        element.firstElementChild.nextElementSibling.innerHTML = "\n          <svg class=\"sauna-card__offers-icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\"   xmlns=\"http://www.w3.org/2000/svg\">\n            <circle class=\"sauna-card__offers-circle\" cx=\"15\" cy=\"15\" r=\"15\" />\n            <path d=\"M21.75 15H8.25\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        ";
        element.dataset.open = "true";
      } else {
        element.nextElementSibling.classList.remove("sauna-card__open");
        element.firstElementChild.nextElementSibling.innerHTML = "\n          <svg class=\"sauna-card__offers-icon\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle class=\"sauna-card__offers-circle\" cx=\"15\" cy=\"15\" r=\"15\"/>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.75 8.25C15.75 7.83579 15.4142 7.5 15 7.5C14.5858 7.5 14.25 7.83579 14.25 8.25V14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15C7.5 15.4142 7.83579 15.75 8.25 15.75H14.25V21.75C14.25 22.1642 14.5858 22.5 15 22.5C15.4142 22.5 15.75 22.1642 15.75 21.75V15.75H21.75C22.1642 15.75 22.5 15.4142 22.5 15C22.5 14.5858 22.1642 14.25 21.75 14.25H15.75V8.25Z\" fill=\"white\"/>\n          </svg>     \n        ";
        element.dataset.open = "false";
      }
    });
  });
}

accordion();

/***/ }),

/***/ "./src/blocks/modules/SAUNA/small-card/small-card.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/SAUNA/small-card/small-card.js ***!
  \***********************************************************/
/***/ (function() {

function showLessOrMore() {
  var getButtons = document.querySelectorAll(".small-card__btn-capacity");
  getButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.open === "false") {
        button.innerHTML = "\n        <p>\u0421\u043A\u0440\u044B\u0442\u044C</p> \n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M6.175 12.8417L10 9.02501L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z\" />\n        </svg>\n      ";
        button.previousElementSibling.classList.add("height-auto");
        button.dataset.open = "true";
      } else {
        button.innerHTML = "\n        <p> \u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 </p>\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"   xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.825 6.66663L10 10.4833L6.175 6.66663L5 7.84163L10 12.8416L15 7.84163L13.825 6.66663Z\"/>\n        </svg>\n        ";
        button.previousElementSibling.classList.remove("height-auto");
        button.dataset.open = "false";
      }
    });
  });
}

showLessOrMore();

/***/ }),

/***/ "./src/js/import/components-sauna.js":
/*!*******************************************!*\
  !*** ./src/js/import/components-sauna.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SAUNA_slider_sauna_slider_sauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/SAUNA/slider-sauna/slider-sauna */ "./src/blocks/components/SAUNA/slider-sauna/slider-sauna.js");


/***/ }),

/***/ "./src/js/import/modules-sauna.js":
/*!****************************************!*\
  !*** ./src/js/import/modules-sauna.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SAUNA_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/SAUNA/header/header */ "./src/blocks/modules/SAUNA/header/header.js");
/* harmony import */ var _modules_SAUNA_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_SAUNA_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/SAUNA/footer/footer */ "./src/blocks/modules/SAUNA/footer/footer.js");
/* harmony import */ var _modules_SAUNA_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_SAUNA_sauna_card_sauna_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/SAUNA/sauna-card/sauna-card */ "./src/blocks/modules/SAUNA/sauna-card/sauna-card.js");
/* harmony import */ var _modules_SAUNA_sauna_card_sauna_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_sauna_card_sauna_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_SAUNA_small_card_small_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/SAUNA/small-card/small-card */ "./src/blocks/modules/SAUNA/small-card/small-card.js");
/* harmony import */ var _modules_SAUNA_small_card_small_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_small_card_small_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_SAUNA_main_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/SAUNA/main/main */ "./src/blocks/modules/SAUNA/main/main.js");
/* harmony import */ var _modules_SAUNA_main_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_main_main__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_SAUNA_reviews_reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/SAUNA/reviews/reviews */ "./src/blocks/modules/SAUNA/reviews/reviews.js");
/* harmony import */ var _modules_SAUNA_reviews_reviews__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_SAUNA_reviews_reviews__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_SAUNA_map_sauna_map_sauna__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/SAUNA/map-sauna/map-sauna */ "./src/blocks/modules/SAUNA/map-sauna/map-sauna.js");








/***/ }),

/***/ "./src/js/sauna.js":
/*!*************************!*\
  !*** ./src/js/sauna.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_modules_sauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules-sauna */ "./src/js/import/modules-sauna.js");
/* harmony import */ var _import_components_sauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components-sauna */ "./src/js/import/components-sauna.js");
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
/******/ 			"sauna": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/sauna.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=sauna.js.map