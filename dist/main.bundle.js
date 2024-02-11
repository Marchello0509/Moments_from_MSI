/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/main.js */ \"./src/scss/main.js\");\n/* harmony import */ var _src_js_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/post.js */ \"./src/js/post.js\");\n/* harmony import */ var _src_js_post_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_post_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst mainEl = {\r\n    btnSearch: document.querySelector('#btnSearch'),\r\n    comText: document.querySelector('#comText'),\r\n    userName: document.querySelector('#userName'),\r\n}\n\n//# sourceURL=webpack://moments_from_msi/./main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.modal {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  fill: rgba(161, 161, 161, 0.1);\n  stroke-width: 1px;\n  stroke: rgba(255, 255, 255, 0.23);\n  filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.25));\n  backdrop-filter: blur(7px);\n  z-index: 3;\n  position: fixed;\n}\n.modal_content {\n  width: 925px;\n  height: 676px;\n  border: 3px solid rgb(0, 0, 0);\n  border-radius: 5px;\n  background: rgb(255, 255, 255);\n}\n.modal_content_forbtnClose {\n  display: flex;\n  justify-content: flex-end;\n}\n.modal_content_forbtnClose_btnClose {\n  position: absolute;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.modal_content_p1 {\n  color: #000;\n  font-family: \"Overpass Mono\";\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 60px;\n  margin-left: 52px;\n}\n.modal_content_forinput {\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n}\n.modal_content_forinput_input {\n  width: 812px;\n  height: 170px;\n  border: 0.5px solid rgb(0, 0, 0);\n  border-radius: 2px;\n  background: rgb(252, 252, 252);\n  font-family: \"Overpass Mono\";\n}\n.modal_content_p2 {\n  color: #000;\n  font-family: \"Overpass Mono\";\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 28px;\n  margin-left: 52px;\n}\n.modal_content_forblock {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.modal_content_forblock_block {\n  display: flex;\n  width: 812px;\n  height: 217px;\n}\n.modal_content_forblock_block_btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 460px;\n  height: 215px;\n  cursor: pointer;\n  background: #fff;\n  column-gap: 36px;\n}\n.modal_content_forblock_block_btn_p {\n  color: rgb(119, 119, 119);\n  font-family: \"Overpass Mono\";\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.modal_content_forblock_block_btn2 {\n  width: 301px;\n  height: 61px;\n  border-radius: 7px;\n  background: linear-gradient(164.32deg, rgb(43, 196, 159) 13.832%, rgba(255, 255, 255, 0) 407.714%);\n  border: none;\n  cursor: pointer;\n  text-align: center;\n  color: rgb(255, 255, 255);\n  font-family: \"Overpass Mono\";\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-left: 50px;\n  margin-top: 155px;\n}\n\n.header {\n  width: 100%;\n  height: 83px;\n  border-bottom: 1px solid #000;\n}\n.header_head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  width: 1273px;\n  height: 38px;\n}\n.header_head_a {\n  text-decoration: none;\n}\n.header_head_a_logo {\n  margin-top: 40px;\n  display: flex;\n}\n.header_head_a_logo_p {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.header_head_nav {\n  width: 200px;\n  height: 13px;\n  margin-top: 30px;\n  margin-left: 50px;\n}\n.header_head_nav_ul {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 10px;\n}\n.header_head_nav_ul_li {\n  list-style: none;\n}\n.header_head_nav_ul_li_a {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n  transition-duration: 0.6s;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\n.header_head_nav_ul_li_a:hover {\n  transition-duration: 0.6s;\n  border-bottom: 1px solid #000000;\n}\n.header_head_forinput {\n  margin-top: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 400px;\n  height: 55px;\n  border-radius: 38px;\n  border: 0.5px solid #000;\n  column-gap: 60px;\n}\n.header_head_forinput_input {\n  background: none;\n  border: none;\n  height: 100%;\n  outline: none;\n  color: #000;\n  font-family: Oxanium;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.header_head_forinput_btn {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.header_head_btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 297px;\n  height: 64px;\n  text-decoration: none;\n  margin-top: 40px;\n  column-gap: 12px;\n}\n.header_head_btns_username {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.main {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  column-gap: 300px;\n}\n.main_block1 {\n  border-right: 1px solid #555;\n  width: 322px;\n  height: 100vh;\n}\n.main_block1_fora {\n  display: flex;\n  justify-content: center;\n}\n.main_block1_fora_ablock {\n  width: 178px;\n  height: 258px;\n  margin-top: 15px;\n}\n.main_block1_fora_ablock_a {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n}\n.main_block1_fora_ablock_a1 {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n}\n.main_block1_fora_ablock_a2 {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n}\n.main_block1_fora_ablock_a3 {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n}\n.main_block1_fora_ablock_a4 {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  text-decoration: none;\n}\n.main_block2 {\n  width: 871px;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.main_block2_forptd {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n.main_block2_forptd_p {\n  color: #000;\n  font-family: Nunito;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n}\n.main_block2_forptd_btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.main_block2_forpost_forms {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n.main_block2_forpost_forms_ms {\n  width: 812px;\n  height: 280px;\n  border: 1px solid #00482E;\n  background: #FFF;\n}\n.main_block2_forpost_forms_ms_user {\n  display: flex;\n  column-gap: 5px;\n  margin-left: 30px;\n  margin-top: 15px;\n}\n.main_block2_forpost_forms_ms_user_nickname {\n  margin-top: 15px;\n  color: #000;\n  font-family: Oxanium;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main_block2_forpost_forms_ms_forcom {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.main_block2_forpost_forms_ms_forcom_com {\n  width: 743px;\n  height: 127px;\n}\n.main_block2_forpost_forms_ms_forcom_com_text {\n  color: #000;\n  font-family: Oxanium;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main_block2_forpost_forms_ms_forlikes {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.main_block2_forpost_forms_ms_forlikes_likes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 35px;\n  column-gap: 10px;\n}\n.main_block2_forpost_forms_ms_forlikes_likes_dislp {\n  color: #F00;\n  font-family: Oxanium;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main_block2_forpost_forms_ms_forlikes_likes_dislbtn {\n  border-radius: 3px;\n  border: 1px solid #480808;\n  background: #FFF;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  transition-duration: 0.6s;\n}\n.main_block2_forpost_forms_ms_forlikes_likes_dislbtn:hover {\n  transition-duration: 0.6s;\n  border: 1px solid rgb(145, 1, 1);\n}\n.main_block2_forpost_forms_ms_forlikes_likes_likep {\n  color: #00482E;\n  font-family: Oxanium;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.main_block2_forpost_forms_ms_forlikes_likes_likebtn {\n  border-radius: 3px;\n  border: 1px solid #00482E;\n  background: #FFF;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  transition-duration: 0.6s;\n}\n.main_block2_forpost_forms_ms_forlikes_likes_likebtn:hover {\n  transition-duration: 0.6s;\n  border: 1px solid #02613e;\n}\n\n.forbtnadd {\n  position: fixed;\n  right: 60px;\n  bottom: 20px;\n}\n.forbtnadd_btnadd {\n  background: none;\n  border: none;\n  cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://moments_from_msi/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n*  html5resetcss\n*/\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nnav ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none;\n}\n\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput, select {\n  vertical-align: middle;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://moments_from_msi/./src/scss/reset.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://moments_from_msi/./src/scss/main.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://moments_from_msi/./src/scss/reset.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://moments_from_msi/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/post.js":
/*!************************!*\
  !*** ./src/js/post.js ***!
  \************************/
/***/ (() => {

eval("const mainEl = {\r\n    btnAdd: document.querySelector('#btnAdd'),\r\n    modal: document.querySelector('#modal'),\r\n    btnClose: document.querySelector('#btnClose'),\r\n    btnAddImg: document.querySelector('#btnAddImg'),\r\n    btnPost: document.querySelector('#btnPost'),\r\n    comText: document.querySelector('#comText'),\r\n    inputText: document.querySelector('#inputText'),\r\n    blockPost: document.querySelector('#blockPost'),\r\n}\r\n\r\nconsole.log(mainEl)\r\n\r\nconst postArr = [\r\n    {\r\n        id: 1,\r\n        text: `${mainEl.inputText.value}`,\r\n        count: 0\r\n    }\r\n]\r\n\r\nconst renderCom = (arr) => {\r\n    mainEl.blockPost.innerHTML = ''\r\n    arr.forEach((item) => {\r\n        mainEl.blockPost.innerHTML = `\r\n                <div idPost = \"${item.id}\" class=\"main_block2_forpost_forms\">\r\n                    <div class=\"main_block2_forpost_forms_ms\">\r\n                        <div class=\"main_block2_forpost_forms_ms_user\">\r\n                            <img src=\"./src/img/download 2.png\" alt=\"userlogo\">\r\n                            <p id=\"userName\" class=\"main_block2_forpost_forms_ms_user_nickname\">UserName</p>\r\n                        </div>\r\n                        <div class=\"main_block2_forpost_forms_ms_forcom\">\r\n                            <div class=\"main_block2_forpost_forms_ms_forcom_com\">\r\n                                <p id=\"comText\" class=\"main_block2_forpost_forms_ms_forcom_com_text\">${item.text}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"main_block2_forpost_forms_ms_forlikes\">\r\n                            <div class=\"main_block2_forpost_forms_ms_forlikes_likes\">\r\n                                <p id=\"disText\" class=\"main_block2_forpost_forms_ms_forlikes_likes_dislp\">${item.count}</p>\r\n                                <button idPost = \"${item.id}\" id=\"disBtn\" class=\"main_block2_forpost_forms_ms_forlikes_likes_dislbtn\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n                                        <path d=\"M4.00008 1.99999L10.6667 1.99999L10.6667 10.6667L6.00008 15.3333L5.16675 14.5C5.08897 14.4222 5.02508 14.3167 4.97508 14.1833C4.92508 14.05 4.90008 13.9222 4.90008 13.8L4.90008 13.5667L5.63341 10.6667L2.00008 10.6667C1.64453 10.6667 1.33342 10.5333 1.06675 10.2667C0.800082 10 0.666749 9.68888 0.666748 9.33333L0.666748 8C0.666748 7.92222 0.675082 7.83888 0.691748 7.75C0.708415 7.66111 0.733415 7.57777 0.766748 7.5L2.76675 2.79999C2.86675 2.57777 3.03341 2.38888 3.26675 2.23333C3.50008 2.07777 3.74453 1.99999 4.00008 1.99999ZM12.0001 10.6667L12.0001 1.99999L14.6667 1.99999L14.6667 10.6667L12.0001 10.6667Z\" fill=\"#6F0808\"/>\r\n                                    </svg>\r\n                                </button>\r\n                                <p id=\"plusText\" class=\"main_block2_forpost_forms_ms_forlikes_likes_likep\">${item.count}</p>\r\n                                <button idPost = \"${item.id}\" id=\"plusBtn\" class=\"main_block2_forpost_forms_ms_forlikes_likes_likebtn\">\r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\">\r\n                                        <path d=\"M11.25 13.125H5V5L9.375 0.625L10.1562 1.40625C10.2292 1.47917 10.2891 1.57812 10.3359 1.70312C10.3828 1.82812 10.4062 1.94792 10.4062 2.0625V2.28125L9.71875 5H13.125C13.4583 5 13.75 5.125 14 5.375C14.25 5.625 14.375 5.91667 14.375 6.25V7.5C14.375 7.57292 14.3672 7.65104 14.3516 7.73438C14.3359 7.81771 14.3125 7.89583 14.2812 7.96875L12.4062 12.375C12.3125 12.5833 12.1562 12.7604 11.9375 12.9062C11.7188 13.0521 11.4896 13.125 11.25 13.125ZM3.75 5V13.125H1.25V5H3.75Z\" fill=\"#00482E\"/>\r\n                                    </svg>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>       \r\n        `    \r\n    })\r\n    const disBtn = document.querySelectorAll('#disBtn')\r\n    const plusBtn = document.querySelectorAll('#plusText')\r\n    disBtn.forEach(btnDis => {\r\n        const idCandidate = btnDis.getAttribute(\"idPost\")\r\n        const newList = postArr.map(mapItem => {\r\n            if (mapItem.id == idCandidate) {\r\n                mapItem.count -= 1\r\n            }\r\n            return mapItem\r\n        })\r\n        renderCom(newList)\r\n    })\r\n    plusBtn.forEach(plusBt => {\r\n        const idCandidate = plusBt.getAttribute(\"idPost\")\r\n        const newList = postArr.map(mapItem => {\r\n            if (mapItem.id == idCandidate) {\r\n                mapItem.count += 1\r\n            }\r\n            return mapItem\r\n        })\r\n        renderCom(newList)\r\n    })\r\n}\r\n\r\nmainEl.btnAdd.addEventListener('click', () => {\r\n    mainEl.modal.style.display = \"flex\"\r\n})\r\n\r\nmainEl.btnClose.addEventListener('click', () => {\r\n    mainEl.modal.style.display = \"none\"\r\n})\r\n\r\nmainEl.btnAddImg.addEventListener('click', () => {\r\n    alert('Coming soon')\r\n})\r\n\r\nmainEl.btnPost.addEventListener('click', () => {\r\n    renderCom()\r\n})\n\n//# sourceURL=webpack://moments_from_msi/./src/js/post.js?");

/***/ }),

/***/ "./src/scss/main.js":
/*!**************************!*\
  !*** ./src/scss/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ \"./src/scss/main.scss\");\n\r\n\n\n//# sourceURL=webpack://moments_from_msi/./src/scss/main.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;