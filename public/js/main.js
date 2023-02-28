/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const modal = __webpack_require__(/*! ./module/burger-menu.js */ \"./src/js/module/burger-menu.js\");\r\nmodal.burger();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://innoma/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger-menu.js":
/*!**************************************!*\
  !*** ./src/js/module/burger-menu.js ***!
  \**************************************/
/***/ (function(module) {

eval("module.exports =  {\r\n    burgerOpen: false,\r\n    burger() {\r\n        let burger = document.querySelector('.burger');\r\n        let menu = document.querySelector('.menu');\r\n        let menuItem = document.querySelector('.menu__item');\r\n\r\n        burger.style.display = 'block';\r\n\r\n        burger.onclick = function (event) {\r\n            let target = event.target;\r\n\r\n            burger.classList.toggle('modal__menu');\r\n\r\n            if (module.exports.burgerOpen) {\r\n                menu.style.top = '-50%';\r\n                module.exports.burgerOpen = false;\r\n                document.body.style.overflow = 'visible';\r\n            } else {\r\n                menu.style.top = '50%';\r\n                module.exports.burgerOpen = true;\r\n                document.body.style.overflow = 'hidden';\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://innoma/./src/js/module/burger-menu.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;