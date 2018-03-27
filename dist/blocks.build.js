/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imagetext_imagetext_js__ = __webpack_require__(/*! ./imagetext/imagetext.js */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_gallery_js__ = __webpack_require__(/*! ./gallery/gallery.js */ 5);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9pbWFnZXRleHQvaW1hZ2V0ZXh0LmpzJztcbmltcG9ydCAnLi9nYWxsZXJ5L2dhbGxlcnkuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/imagetext/imagetext.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);\n/**\n * BLOCK: Image/Text\n */\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    BlockControls = _wp$blocks.BlockControls,\n    AlignmentToolbar = _wp$blocks.AlignmentToolbar;\n\n\nregisterBlockType('ccblocks/imagetext', {\n\ttitle: 'Image/Text',\n\ticon: 'shield',\n\tcategory: 'common',\n\tattributes: {\n\t\tbody: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.ccBody'\n\t\t},\n\t\tmediaID: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tmediaURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: 'img',\n\t\t\tattribute: 'src'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    isSelected = _ref.isSelected,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar mediaID = attributes.mediaID,\n\t\t    mediaURL = attributes.mediaURL,\n\t\t    body = attributes.body,\n\t\t    alignment = attributes.alignment,\n\t\t    title = attributes.title;\n\n\t\tvar setBody = function setBody(value) {\n\t\t\tsetAttributes({ body: value });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(media) {\n\t\t\tsetAttributes({\n\t\t\t\tmediaURL: media.url,\n\t\t\t\tmediaID: media.id\n\t\t\t});\n\t\t};\n\t\tvar editClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(alignment, 'flexx');\n\t\treturn [isSelected && wp.element.createElement(\n\t\t\tBlockControls,\n\t\t\t{ key: 'controls' },\n\t\t\twp.element.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: alignment,\n\t\t\t\tonChange: function onChange(nextAlign) {\n\t\t\t\t\tsetAttributes({ alignment: nextAlign });\n\t\t\t\t}\n\t\t\t})\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: attributes.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: editClasses },\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\ttype: 'image',\n\t\t\t\t\tvalue: mediaID,\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },\n\t\t\t\t\t\t\t!mediaID ? __('Upload Image') : wp.element.createElement('img', { src: mediaURL })\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tplaceholder: 'write',\n\t\t\t\t\tclassName: 'ccBody',\n\t\t\t\t\tonChange: setBody,\n\t\t\t\t\tvalue: body\n\t\t\t\t})\n\t\t\t)\n\t\t)];\n\t},\n\n\tsave: function save(props) {\n\t\tvar className = props.className,\n\t\t    _props$attributes = props.attributes,\n\t\t    mediaURL = _props$attributes.mediaURL,\n\t\t    body = _props$attributes.body,\n\t\t    alignment = _props$attributes.alignment;\n\n\t\tvar saveClasses = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(alignment, 'flexx');\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: saveClasses },\n\t\t\t\twp.element.createElement('img', { src: mediaURL }),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'ccBody' },\n\t\t\t\t\tbody\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZXRleHQvaW1hZ2V0ZXh0LmpzP2I2NjkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogSW1hZ2UvVGV4dFxuICovXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgQ2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciBfd3AkYmxvY2tzID0gd3AuYmxvY2tzLFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gX3dwJGJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZSxcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja3MuUmljaFRleHQsXG4gICAgRWRpdGFibGUgPSBfd3AkYmxvY2tzLkVkaXRhYmxlLFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2Nrcy5NZWRpYVVwbG9hZCxcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGJsb2Nrcy5CbG9ja0NvbnRyb2xzLFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkYmxvY2tzLkFsaWdubWVudFRvb2xiYXI7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NjYmxvY2tzL2ltYWdldGV4dCcsIHtcblx0dGl0bGU6ICdJbWFnZS9UZXh0Jyxcblx0aWNvbjogJ3NoaWVsZCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRzb3VyY2U6ICdjaGlsZHJlbicsXG5cdFx0XHRzZWxlY3RvcjogJy5jY0JvZHknXG5cdFx0fSxcblx0XHRtZWRpYUlEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJ1xuXHRcdH0sXG5cdFx0bWVkaWFVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnYXR0cmlidXRlJyxcblx0XHRcdHNlbGVjdG9yOiAnaW1nJyxcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYydcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXHRcdHZhciBtZWRpYUlEID0gYXR0cmlidXRlcy5tZWRpYUlELFxuXHRcdCAgICBtZWRpYVVSTCA9IGF0dHJpYnV0ZXMubWVkaWFVUkwsXG5cdFx0ICAgIGJvZHkgPSBhdHRyaWJ1dGVzLmJvZHksXG5cdFx0ICAgIGFsaWdubWVudCA9IGF0dHJpYnV0ZXMuYWxpZ25tZW50LFxuXHRcdCAgICB0aXRsZSA9IGF0dHJpYnV0ZXMudGl0bGU7XG5cblx0XHR2YXIgc2V0Qm9keSA9IGZ1bmN0aW9uIHNldEJvZHkodmFsdWUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBib2R5OiB2YWx1ZSB9KTtcblx0XHR9O1xuXHRcdHZhciBvblNlbGVjdEltYWdlID0gZnVuY3Rpb24gb25TZWxlY3RJbWFnZShtZWRpYSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1lZGlhVVJMOiBtZWRpYS51cmwsXG5cdFx0XHRcdG1lZGlhSUQ6IG1lZGlhLmlkXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHZhciBlZGl0Q2xhc3NlcyA9IENsYXNzbmFtZXMoYWxpZ25tZW50LCAnZmxleHgnKTtcblx0XHRyZXR1cm4gW2lzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdHsga2V5OiAnY29udHJvbHMnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQWxpZ25tZW50VG9vbGJhciwge1xuXHRcdFx0XHR2YWx1ZTogYWxpZ25tZW50LFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV4dEFsaWduKSB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogbmV4dEFsaWduIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IGF0dHJpYnV0ZXMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGVkaXRDbGFzc2VzIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRcdG9uU2VsZWN0OiBvblNlbGVjdEltYWdlLFxuXHRcdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdFx0dmFsdWU6IG1lZGlhSUQsXG5cdFx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3Blbjtcblx0XHRcdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogbWVkaWFJRCA/ICdpbWFnZS1idXR0b24nIDogJ2J1dHRvbiBidXR0b24tbGFyZ2UnLCBvbkNsaWNrOiBvcGVuIH0sXG5cdFx0XHRcdFx0XHRcdCFtZWRpYUlEID8gX18oJ1VwbG9hZCBJbWFnZScpIDogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbWVkaWFVUkwgfSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0dGFnTmFtZTogJ2RpdicsXG5cdFx0XHRcdFx0bXVsdGlsaW5lOiAncCcsXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICd3cml0ZScsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnY2NCb2R5Jyxcblx0XHRcdFx0XHRvbkNoYW5nZTogc2V0Qm9keSxcblx0XHRcdFx0XHR2YWx1ZTogYm9keVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCldO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIG1lZGlhVVJMID0gX3Byb3BzJGF0dHJpYnV0ZXMubWVkaWFVUkwsXG5cdFx0ICAgIGJvZHkgPSBfcHJvcHMkYXR0cmlidXRlcy5ib2R5LFxuXHRcdCAgICBhbGlnbm1lbnQgPSBfcHJvcHMkYXR0cmlidXRlcy5hbGlnbm1lbnQ7XG5cblx0XHR2YXIgc2F2ZUNsYXNzZXMgPSBDbGFzc25hbWVzKGFsaWdubWVudCwgJ2ZsZXh4Jyk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBzYXZlQ2xhc3NlcyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBtZWRpYVVSTCB9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2NCb2R5JyB9LFxuXHRcdFx0XHRcdGJvZHlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdldGV4dC9pbWFnZXRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************!*\
  !*** ./src/imagetext/style.scss ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZXRleHQvc3R5bGUuc2Nzcz9lMDAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2V0ZXh0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************************!*\
  !*** ./src/imagetext/editor.scss ***!
  \***********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWFnZXRleHQvZWRpdG9yLnNjc3M/MmE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdldGV4dC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!********************************!*\
  !*** ./src/gallery/gallery.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);\n/**\n * BLOCK: Gallery\n */\n\n\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    Editable = _wp$blocks.Editable,\n    MediaUpload = _wp$blocks.MediaUpload,\n    BlockControls = _wp$blocks.BlockControls,\n    AlignmentToolbar = _wp$blocks.AlignmentToolbar;\n\n\nregisterBlockType('ccblocks/ccgallery', {\n\ttitle: 'CCGallery',\n\ticon: 'shield',\n\tcategory: 'common',\n\tattributes: {\n\t\tmages: []\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    isSelected = _ref.isSelected,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar mages = attributes.mages;\n\n\t\tvar onSelectImage = function onSelectImage(media) {\n\t\t\tsetAttributes({\n\t\t\t\tmages: media\n\t\t\t});\n\t\t};\n\t\t//let mageTags = mages.map(mage=>{\n\t\t//\treturn <img src={mage.url} />\n\t\t//});\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: attributes.className },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: onSelectImage,\n\t\t\t\ttype: 'image',\n\t\t\t\tmultiple: 'true',\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t'Open Media Library'\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\tvar className = props.className,\n\t\t    mages = props.attributes.mages;\n\n\t\tvar mageTags = mages.map(function (mage) {\n\t\t\treturn wp.element.createElement('img', { src: mage.url });\n\t\t});\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ className: 'mages' },\n\t\t\t\tmageTags\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYWxsZXJ5L2dhbGxlcnkuanM/Yzk2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBHYWxsZXJ5XG4gKi9cblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCBDbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIF93cCRibG9ja3MgPSB3cC5ibG9ja3MsXG4gICAgcmVnaXN0ZXJCbG9ja1R5cGUgPSBfd3AkYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlLFxuICAgIFJpY2hUZXh0ID0gX3dwJGJsb2Nrcy5SaWNoVGV4dCxcbiAgICBFZGl0YWJsZSA9IF93cCRibG9ja3MuRWRpdGFibGUsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkYmxvY2tzLk1lZGlhVXBsb2FkLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkYmxvY2tzLkJsb2NrQ29udHJvbHMsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja3MuQWxpZ25tZW50VG9vbGJhcjtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2NibG9ja3MvY2NnYWxsZXJ5Jywge1xuXHR0aXRsZTogJ0NDR2FsbGVyeScsXG5cdGljb246ICdzaGllbGQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRtYWdlczogW11cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXM7XG5cdFx0dmFyIG1hZ2VzID0gYXR0cmlidXRlcy5tYWdlcztcblxuXHRcdHZhciBvblNlbGVjdEltYWdlID0gZnVuY3Rpb24gb25TZWxlY3RJbWFnZShtZWRpYSkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdG1hZ2VzOiBtZWRpYVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHQvL2xldCBtYWdlVGFncyA9IG1hZ2VzLm1hcChtYWdlPT57XG5cdFx0Ly9cdHJldHVybiA8aW1nIHNyYz17bWFnZS51cmx9IC8+XG5cdFx0Ly99KTtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogYXR0cmlidXRlcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RJbWFnZSxcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcblx0XHRcdFx0bXVsdGlwbGU6ICd0cnVlJyxcblx0XHRcdFx0cmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZjIpIHtcblx0XHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBvbkNsaWNrOiBvcGVuIH0sXG5cdFx0XHRcdFx0XHQnT3BlbiBNZWRpYSBMaWJyYXJ5J1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgbWFnZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLm1hZ2VzO1xuXG5cdFx0dmFyIG1hZ2VUYWdzID0gbWFnZXMubWFwKGZ1bmN0aW9uIChtYWdlKSB7XG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogbWFnZS51cmwgfSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnbWFnZXMnIH0sXG5cdFx0XHRcdG1hZ2VUYWdzXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FsbGVyeS9nYWxsZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/gallery/style.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYWxsZXJ5L3N0eWxlLnNjc3M/MDBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbGxlcnkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************!*\
  !*** ./src/gallery/editor.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9nYWxsZXJ5L2VkaXRvci5zY3NzP2JjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYWxsZXJ5L2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);