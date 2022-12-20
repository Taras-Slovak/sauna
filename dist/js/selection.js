/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/SELECTION/card-list/card-list.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/SELECTION/card-list/card-list.js ***!
  \*************************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/SELECTION/main/main.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/SELECTION/main/main.js ***!
  \***************************************************/
/***/ (function() {

var getMainBtn = document.querySelector('.selection__button');
var getCloseBtn = document.querySelector('.selection__close');
var getMainSideBar = document.querySelector('.selection__side-bar');
getMainBtn.addEventListener('click', function () {
  if (!getMainSideBar.classList.contains('side-bar-opened')) {
    getMainSideBar.classList.add('side-bar-opened');
    getMainBtn.classList.add('button-hidden');
    document.body.style.overflow = 'hidden';
  } else {
    getMainSideBar.classList.remove('side-bar-opened');
    getMainBtn.classList.remove('button-hidden');
    document.body.style.overflow = '';
  }
});
getCloseBtn.addEventListener('click', function () {
  getMainSideBar.classList.remove('side-bar-opened');
  getMainBtn.classList.remove('button-hidden');
  document.body.style.overflow = '';
});
getMainSideBar.addEventListener('click', function (e) {
  if (e.target.classList.contains('side-bar-opened')) {
    document.body.style.overflow = '';
    getMainSideBar.classList.remove('side-bar-opened');
    getMainBtn.classList.remove('button-hidden');
  }
});

/***/ }),

/***/ "./src/blocks/modules/SELECTION/map/google-map.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/SELECTION/map/google-map.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

var isFullScreen = false;
var map;

function renderMap() {
  var mapOptions = {
    center: [50.4368368475358, 30.401243422712376],
    zoom: 12,
    zoomControl: false
  };
  map = new L.map("map", mapOptions);
  var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  L.control.zoom({
    position: "topright"
  }).addTo(map);
  map.addLayer(layer);
  var locationSauna = L.icon({
    iconUrl: "img/SEARCH/map/location-sauna.svg",
    iconSize: [25, 25],
    popupAnchor: [-3, -25]
  });
  L.marker([50.481431223379865, 30.39808773689317], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
  L.marker([50.47137871796593, 30.372233193653827], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
  L.marker([50.46558929098933, 30.364096807395054], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
  L.marker([50.47563591367001, 30.421065088001715], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
  L.marker([50.43755788840393, 30.39711101941428], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
  L.marker([50.43235820151973, 30.4473325232155], {
    icon: locationSauna
  }).addTo(map).bindPopup("Сауна Аквамарин");
}

renderMap();

function fullScreenMap() {
  var hideBtn = document.querySelector(".map__full-btn");
  var getMap = document.querySelector(".map__map-content");
  var getCardList = document.querySelector(".card-list");
  hideBtn.addEventListener("click", function () {
    if (!isFullScreen) {
      map.remove();
      hideBtn.innerHTML = "  \n      <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M11.865 22.1666C12.0393 22.1672 12.2115 22.1287 12.369 22.054C12.5265 21.9793 12.6652 21.8703 12.775 21.7349L18.41 14.7349C18.5816 14.5262 18.6754 14.2643 18.6754 13.9941C18.6754 13.7239 18.5816 13.462 18.41 13.2532L12.5767 6.25325C12.3786 6.015 12.0941 5.86517 11.7856 5.83672C11.4771 5.80828 11.1699 5.90355 10.9317 6.10158C10.6934 6.29961 10.5436 6.58417 10.5152 6.89267C10.4867 7.20117 10.582 7.50833 10.78 7.74658L15.995 13.9999L10.955 20.2532C10.8123 20.4245 10.7217 20.633 10.6939 20.8542C10.666 21.0753 10.7021 21.2998 10.7978 21.5011C10.8935 21.7024 11.0449 21.872 11.2341 21.99C11.4232 22.1079 11.6421 22.1692 11.865 22.1666Z\"/>\n      </svg>\n      <p>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A</p>\n      ";
      getCardList.classList.add("card-list-hide");
      getMap.classList.add("card-full-screen");
      renderMap();
      isFullScreen = !isFullScreen;
    } else {
      map.remove();
      hideBtn.innerHTML = "\n        <svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M16.135 22.1666C15.9607 22.1672 15.7885 22.1287 15.631 22.054C15.4735 21.9793 15.3348 21.8703 15.225 21.7349L9.58999 14.7349C9.41839 14.5262 9.32458 14.2643 9.32458 13.9941C9.32458 13.7239 9.41839 13.462 9.58999 13.2532L15.4233 6.25325C15.6214 6.015 15.9059 5.86517 16.2144 5.83672C16.5229 5.80828 16.8301 5.90355 17.0683 6.10158C17.3066 6.29961 17.4564 6.58417 17.4848 6.89267C17.5133 7.20117 17.418 7.50833 17.22 7.74658L12.005 13.9999L17.045 20.2533C17.1877 20.4245 17.2783 20.633 17.3061 20.8542C17.334 21.0753 17.2979 21.2998 17.2022 21.5011C17.1065 21.7024 16.9551 21.872 16.7659 21.99C16.5768 22.1079 16.3579 22.1692 16.135 22.1666Z\" fill=\"black\"/>\n        </svg>\n        ";
      getCardList.classList.remove("card-list-hide");
      getMap.classList.remove("card-full-screen");
      renderMap();
      isFullScreen = !isFullScreen;
    }
  });
}

fullScreenMap();

function getLocation() {
  var locationBtn = document.querySelector(".map__location");
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

getLocation();

/***/ }),

/***/ "./src/blocks/modules/SELECTION/side-bar/side-bar.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/SELECTION/side-bar/side-bar.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker/locale/ru */ "./node_modules/air-datepicker/locale/ru.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);




function dataPicker() {
  new air_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]("#side-bar-picker", {
    locale: air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_0__["default"],
    multipleDates: true,
    range: true,
    multipleDatesSeparator: " - ",
    autoClose: true,
    position: "bottom center"
  });
}

dataPicker();

function rangeItem(rangeClass, inputMinItem, inputMaxItem) {
  var range = document.querySelector(rangeClass);

  if (range.classList.contains("range-price")) {
    nouislider__WEBPACK_IMPORTED_MODULE_2___default().create(range, {
      start: [100, 1500],
      step: 10,
      range: {
        min: 0,
        max: 1500
      },
      connect: true
    });
  } else {
    nouislider__WEBPACK_IMPORTED_MODULE_2___default().create(range, {
      start: [0, 1440],
      step: 1,
      range: {
        min: 0,
        max: 1440
      },
      connect: true
    });
  }

  var inputMin = document.getElementById(inputMinItem);
  var inputMax = document.getElementById(inputMaxItem);

  if (range.classList.contains("range-price")) {
    range.noUiSlider.on("update", function (values) {
      inputMin.value = Math.round(values[0]);
      inputMax.value = Math.round(values[1]);
    });
    inputMin.addEventListener("change", function () {
      range.noUiSlider.set([inputMin.value, null]);
    });
    inputMax.addEventListener("change", function () {
      range.noUiSlider.set([null, inputMax.value]);
    });
  } else {
    var convertValuesToTime = function convertValuesToTime(values, handle) {
      var hours = 0,
          minutes = 0;

      if (handle === 0) {
        hours = convertToHour(values[0]);
        minutes = convertToMinute(values[0], hours);
        inputMin.value = formatHoursAndMinutes(hours, minutes);
        return;
      }

      hours = convertToHour(values[1]);
      minutes = convertToMinute(values[1], hours);
      inputMax.value = formatHoursAndMinutes(hours, minutes);
    };

    var convertToHour = function convertToHour(value) {
      return Math.floor(value / 60);
    };

    var convertToMinute = function convertToMinute(value, hour) {
      return value - hour * 60;
    };

    var formatHoursAndMinutes = function formatHoursAndMinutes(hours, minutes) {
      if (hours.toString().length == 1) hours = "0" + hours;
      if (minutes.toString().length == 1) minutes = "0" + minutes;
      return hours + ":" + minutes;
    };

    range.noUiSlider.on("update", function (values, handle) {
      convertValuesToTime(values, handle);
    });
  }
}

rangeItem(".range-price", "price-min", "price-max");
rangeItem(".range-time", "time-min", "time-max");

function showLessOrMore() {
  var getButtons = document.querySelectorAll(".side-bar__btn-capacity");
  getButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.open === "false") {
        button.innerHTML = "\n        <p>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435</p> \n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M6.175 12.8417L10 9.02501L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z\" />\n        </svg>\n      ";
        button.previousElementSibling.classList.add("height-auto");
        button.dataset.open = "true";
      } else {
        button.innerHTML = "\n        <p> \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 </p>\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"   xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M13.825 6.66663L10 10.4833L6.175 6.66663L5 7.84163L10 12.8416L15 7.84163L13.825 6.66663Z\"/>\n        </svg>\n        ";
        button.previousElementSibling.classList.remove("height-auto");
        button.dataset.open = "false";
      }
    });
  });
}

showLessOrMore();

/***/ }),

/***/ "./src/js/import/modules-selection.js":
/*!********************************************!*\
  !*** ./src/js/import/modules-selection.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SELECTION_side_bar_side_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/SELECTION/side-bar/side-bar */ "./src/blocks/modules/SELECTION/side-bar/side-bar.js");
/* harmony import */ var _modules_SELECTION_card_list_card_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/SELECTION/card-list/card-list */ "./src/blocks/modules/SELECTION/card-list/card-list.js");
/* harmony import */ var _modules_SELECTION_card_list_card_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_SELECTION_card_list_card_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_SELECTION_map_google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/SELECTION/map/google-map */ "./src/blocks/modules/SELECTION/map/google-map.js");
/* harmony import */ var _modules_SELECTION_main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/SELECTION/main/main */ "./src/blocks/modules/SELECTION/main/main.js");
/* harmony import */ var _modules_SELECTION_main_main__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_SELECTION_main_main__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/selection.js":
/*!*****************************!*\
  !*** ./src/js/selection.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_modules_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules-selection */ "./src/js/import/modules-selection.js");
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
/******/ 			"selection": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/selection.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=selection.js.map