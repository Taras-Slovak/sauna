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

/***/ "./src/blocks/modules/SCHEDULE/schedule-booking-week/schedule-booking-week.js":
/*!************************************************************************************!*\
  !*** ./src/blocks/modules/SCHEDULE/schedule-booking-week/schedule-booking-week.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker/locale/ru */ "./node_modules/air-datepicker/locale/ru.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-unused-vars */




function initPopover() {
  var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function (item) {
    item.dataset.bsContent = "\n    <div class=\"schedule-booking-week__modal\">\n      <div class=\"schedule-booking-week__modal-item\">\n        <span>\u041A\u043B\u0438\u0435\u043D\u0442</span>\n        <p>\u041F\u0435\u0442\u0440\u043E\u0432 \u0418\u0432\u0430\u043D-2</p>\n      </div>\n      <div class=\"schedule-booking-week__modal-item\">\n        <span>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B-2</span>\n        <p>+38 067 123-23-23</p>\n      </div>\n      <div class=\"schedule-booking-week__modal-item\">\n        <span>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u0442\u0435\u043B-2</span>\n        <p>+38 067 123-23-23</p>\n      </div>\n      <div class=\"schedule-booking-week__modal-item\">\n        <span>\u0414\u0430\u0442\u0430 / \u0412\u0440\u0435\u043C\u044F-2</span>\n        <p>31 \u043C\u0430\u044F 2021 / 01:00 - 02:00</p>\n      </div>\n      <div class=\"schedule-booking-week__modal-item\">\n        <span>\u0427\u0435\u043B\u043E\u0432\u0435\u043A-2</span>\n        <p>10</p>\n      </div>\n      <div class=\"schedule-booking-week__modal-bottom\">\n        <a class=\"schedule-booking-week__modal-link\" href=\"#\">\u0411\u0440\u043E\u043D\u044C </a>\n        <a class=\"schedule-booking-week__modal-edit\" href=\"#\"> \n          <img src=\"img/other/button.svg\" alt=\"\">\n        </a>\n      </div>\n    </div>\n    ";
  });

  var popoverList = _toConsumableArray(popoverTriggerList).map(function (popoverTriggerEl) {
    return new bootstrap__WEBPACK_IMPORTED_MODULE_2__.Popover(popoverTriggerEl, {
      html: true
    });
  }); // console.log(popoverList.dataset.bs.content);

}

initPopover();

function dataPicker() {
  var monthText = document.querySelector('.schedule-booking-week__nav-month');
  var yearText = document.querySelector('.schedule-booking-week__nav-year');
  var getCurrentMonth = document.querySelector('.schedule-booking-week__nav-text');
  var startDate = new Date();
  yearText.textContent = startDate.getFullYear();
  monthText.textContent = air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__["default"].months[startDate.getMonth()];
  getCurrentMonth.dataset.month = startDate.getMonth() + 1;
  var datepicker = new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]('#data-picker', {
    locale: air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__["default"],
    dateFormat: 'MM.d',
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [startDate, startDate],
    autoClose: true,
    position: 'bottom center',
    onSelect: function onSelect(_ref) {
      var date = _ref.date;
      monthText.textContent = air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__["default"].months[date[0].getMonth()];
      yearText.textContent = date[0].getFullYear();
      getCurrentMonth.dataset.month = date[0].getMonth();
      currentDaysOfMonth();
    }
  });
}

dataPicker();

function toggleSchedule() {
  var getDayBtn = document.querySelector('.schedule-booking-week__toggle-day');
  var getWeekBtn = document.querySelector('.schedule-booking-week__toggle-week');
  var getMonthBtn = document.querySelector('.schedule-booking-week__toggle-month');

  getDayBtn.onclick = function () {
    if (!getDayBtn.classList.contains('active-toggle')) {
      getDayBtn.classList.add('active-toggle');
      getMonthBtn.classList.remove('active-toggle');
      getWeekBtn.classList.remove('active-toggle');
    }
  };

  getWeekBtn.onclick = function () {
    if (!getWeekBtn.classList.contains('active-toggle')) {
      getWeekBtn.classList.add('active-toggle');
      getMonthBtn.classList.remove('active-toggle');
      getDayBtn.classList.remove('active-toggle');
    }
  };

  getMonthBtn.onclick = function () {
    if (!getMonthBtn.classList.contains('active-toggle')) {
      getMonthBtn.classList.add('active-toggle');
      getWeekBtn.classList.remove('active-toggle');
      getDayBtn.classList.remove('active-toggle');
    }
  };
}

toggleSchedule();

function currentDaysOfMonth() {
  var getCurrentDay = document.querySelector('.schedule-booking-week__nav-text');
  var getAllDays = document.querySelectorAll('.schedule-booking-week__day');
  getAllDays.forEach(function (day) {
    if (getCurrentDay.dataset.month === day.dataset.month) {
      day.style.opacity = '1';
    } else if (day.dataset.month == undefined || day.dataset.month == null) {
      day.style.opacity = '1';
    } else {
      day.style.opacity = '0.5';
    }
  });
}

currentDaysOfMonth();

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

/***/ "./src/js/import/modules-schedule-booking-week.js":
/*!********************************************************!*\
  !*** ./src/js/import/modules-schedule-booking-week.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_SCHEDULE_schedule_booking_week_schedule_booking_week__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/SCHEDULE/schedule-booking-week/schedule-booking-week */ "./src/blocks/modules/SCHEDULE/schedule-booking-week/schedule-booking-week.js");


/***/ }),

/***/ "./src/js/schedule-booking-week.js":
/*!*****************************************!*\
  !*** ./src/js/schedule-booking-week.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_components_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components-company */ "./src/js/import/components-company.js");
/* harmony import */ var _import_modules_schedule_booking_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules-schedule-booking-week */ "./src/js/import/modules-schedule-booking-week.js");
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
/******/ 			"scheduleBookingWeek": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/schedule-booking-week.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=scheduleBookingWeek.js.map