/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/PROFILE/footer/footer.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/PROFILE/footer/footer.js ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/PROFILE/header/header.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/PROFILE/header/header.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* eslint-disable no-unused-vars */

var modalHeader = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal("#modalHeader", {});

/***/ }),

/***/ "./src/blocks/modules/PROFILE/main/main.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/PROFILE/main/main.js ***!
  \*************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/PROFILE/register/register.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/PROFILE/register/register.js ***!
  \*********************************************************/
/***/ (function() {

function validationRegisterPhone() {
  var getInputCode = document.querySelector('#telReg');
  var getButtonCode = document.querySelector('#telRegBtn');
  var getAgreeTel = document.querySelector('#agreeTel');
  getInputCode.addEventListener('input', function () {
    if (getInputCode.value.length >= 5 && getAgreeTel.checked) {
      getButtonCode.disabled = false;
    } else {
      getButtonCode.disabled = true;
    }
  });
  getAgreeTel.addEventListener('click', function () {
    if (getInputCode.value.length >= 5 && getAgreeTel.checked) {
      getButtonCode.disabled = false;
    } else {
      getButtonCode.disabled = true;
    }
  });
}

validationRegisterPhone();

function validationCountdown() {
  var getRegBtn = document.querySelector('#sendPhone');
  var getCountdown = document.querySelector('#countdown');
  var getSmsBtn = document.querySelector('#no-sms');
  var getInputCode = document.querySelector('#telReg');
  var getNewCode = document.querySelector('#newCode');
  var intervalId;
  getRegBtn.addEventListener('click', function () {
    getInputCode.value = '';
    countdown();
  });
  getNewCode.addEventListener('click', function () {
    getInputCode.value = '';
    countdown();
  });

  function countdown() {
    var seconds = 45;
    clearInterval(intervalId);
    intervalId = null;

    if (!intervalId) {
      intervalId = setInterval(function () {
        if (seconds >= 0) {
          getCountdown.innerHTML = seconds;
          getSmsBtn.disabled = true;

          if (seconds < 10) {
            getCountdown.innerHTML = "0".concat(seconds);
          }

          seconds -= 1;
        } else {
          getSmsBtn.disabled = false;
        }
      }, 1000);
    }
  }
}

validationCountdown();

function validationForm(regBtn, field, require, agree) {
  var getTelRegFormBtn = document.querySelector(regBtn);
  var getAllField = document.querySelectorAll(field);
  var getAllRequired = document.querySelectorAll(require);
  var getAgreeTelForm = document.querySelector(agree);
  getAllField.forEach(function (input) {
    input.addEventListener('input', function () {
      var trueRequired = [];
      getAllRequired.forEach(function (element) {
        if (element.checkValidity()) {
          trueRequired.push(element);
        }
      });

      if (trueRequired.length === getAllRequired.length && getAgreeTelForm.checked) {
        getTelRegFormBtn.disabled = false;
      } else {
        getTelRegFormBtn.disabled = true;
      }

      getAgreeTelForm.addEventListener('change', function () {
        if (trueRequired.length === getAllRequired.length && getAgreeTelForm.checked) {
          getTelRegFormBtn.disabled = false;
        } else {
          getTelRegFormBtn.disabled = true;
        }
      });
    });
  });
}

validationForm('#telRegFormBtn', '.form__phone-field', '.form__phone-field[required]', '#agreeTelForm');
validationForm('#mailRegFormBtn', '.form__mail-field', '.form__mail-field[required]', '#agreeMailForm');

function togglePassword() {
  var getPassword = document.querySelector('#mailPass');
  var getTogglePass = document.querySelector('.form__show-password');
  getTogglePass.addEventListener('click', function () {
    if (getPassword.type === 'password') {
      getPassword.type = 'text';
    } else {
      getPassword.type = 'password';
    }
  });
}

togglePassword();

/***/ }),

/***/ "./src/blocks/modules/PROFILE/search-panel/search-panel.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/PROFILE/search-panel/search-panel.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/index.es.js");
/* harmony import */ var air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! air-datepicker/locale/ru */ "./node_modules/air-datepicker/locale/ru.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable no-unused-vars */




function dataPicker() {
  var startDate = new Date();
  new air_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]('#data-picker', {
    locale: air_datepicker_locale_ru__WEBPACK_IMPORTED_MODULE_1__["default"],
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [startDate],
    autoClose: true,
    position: 'bottom center'
  });
}

dataPicker();

function searchPanel() {
  var canEdit = false;

  function dropdown() {
    var searchItems = document.querySelectorAll('.search-panel__item');

    if (window.screen.width > 1150) {
      searchItems.forEach(function (searchItem) {
        searchItem.addEventListener('click', function () {
          canEdit = !canEdit;
          searchItem.previousElementSibling.classList.toggle('visibility-back');
          searchItem.nextElementSibling.classList.toggle('show');
          searchItem.firstElementChild.classList.toggle('visibility-down');
        });
      });
    } else {
      searchItems.forEach(function (searchItem) {
        searchItem.addEventListener('click', function () {
          canEdit = !canEdit;

          if (searchItem.classList.contains('only-one-opened')) {
            searchItem.classList.remove('only-one-opened');
            searchItems.forEach(function (item) {
              item.classList.remove('only-one-opened');
              item.previousElementSibling.classList.remove('visibility-back');
              item.nextElementSibling.classList.remove('show');
              item.firstElementChild.classList.remove('visibility-down');
            });
          } else {
            searchItems.forEach(function (item) {
              item.classList.remove('only-one-opened');
              item.classList.remove('only-one-opened');
              item.previousElementSibling.classList.remove('visibility-back');
              item.nextElementSibling.classList.remove('show');
              item.firstElementChild.classList.remove('visibility-down');
            });
            searchItem.classList.add('only-one-opened');
            searchItem.previousElementSibling.classList.add('visibility-back');
            searchItem.nextElementSibling.classList.add('show');
            searchItem.firstElementChild.classList.add('visibility-down');
          }
        });
      });
    }
  }

  dropdown();

  function rangeItem() {
    var range = document.getElementById('range');
    nouislider__WEBPACK_IMPORTED_MODULE_2___default().create(range, {
      start: [100, 1500],
      step: 10,
      range: {
        min: 0,
        max: 1500
      },
      connect: true
    });
    var price = document.querySelector('.search-panel__price-hourly');
    var text = document.querySelector('.search-panel__price-txt');
    var inputMin = document.getElementById('input-min');
    var inputMax = document.getElementById('input-max');
    range.noUiSlider.on('update', function (values) {
      inputMin.value = Math.round(values[0]);
      inputMax.value = Math.round(values[1]);

      if (canEdit) {
        text.innerText = 'Цена за час';
        price.innerText = "".concat(inputMin.value, " - ").concat(inputMax.value);
      }
    });
    inputMin.addEventListener('change', function () {
      range.noUiSlider.set([inputMin.value, null]);
    });
    inputMax.addEventListener('change', function () {
      range.noUiSlider.set([null, inputMax.value]);
    });
  }

  rangeItem();
}

searchPanel();

function radioButtons(initName, filterName, buttons) {
  var filteredName = document.querySelector(filterName);
  var radioButtons = document.querySelectorAll(buttons);
  radioButtons.forEach(function (element) {
    element.addEventListener('click', function () {
      var filtered = [];

      if (filtered.length === 0) {
        filteredName.innerText = initName;
      }

      radioButtons.forEach(function (elem) {
        if (elem.checked) {
          filtered.push(elem.nextElementSibling.innerText);
          filteredName.innerText = "".concat(filtered[0], " + 1");
        }
      });
    });
  });
}

radioButtons('Не важно', '.search-panel__sauna-filter', '.search-panel__dropdown-sauna input');
radioButtons('Район города', '.search-panel__location-filter', '.search-panel__location input');

/***/ }),

/***/ "./src/js/import/modules-profile.js":
/*!******************************************!*\
  !*** ./src/js/import/modules-profile.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PROFILE_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/PROFILE/header/header */ "./src/blocks/modules/PROFILE/header/header.js");
/* harmony import */ var _modules_PROFILE_search_panel_search_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/PROFILE/search-panel/search-panel */ "./src/blocks/modules/PROFILE/search-panel/search-panel.js");
/* harmony import */ var _modules_PROFILE_main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/PROFILE/main/main */ "./src/blocks/modules/PROFILE/main/main.js");
/* harmony import */ var _modules_PROFILE_main_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_PROFILE_main_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_PROFILE_register_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/PROFILE/register/register */ "./src/blocks/modules/PROFILE/register/register.js");
/* harmony import */ var _modules_PROFILE_register_register__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_PROFILE_register_register__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_PROFILE_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/PROFILE/footer/footer */ "./src/blocks/modules/PROFILE/footer/footer.js");
/* harmony import */ var _modules_PROFILE_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_PROFILE_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _import_modules_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules-profile */ "./src/js/import/modules-profile.js");
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
/******/ 			"profile": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/profile.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=profile.js.map