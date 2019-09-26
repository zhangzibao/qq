(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "../../../../vue/my_unip_app/qq/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}":
/*!**********************************************************************!*\
  !*** G:/vue/my_unip_app/qq/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../vue/my_unip_app/qq/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ "../../../../vue/my_unip_app/qq/pages/login/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_login.default));

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages.json":
/*!****************************************!*\
  !*** G:/vue/my_unip_app/qq/pages.json ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/login/login.vue":
/*!***************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/login/login.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=776998fa&scoped=true& */ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true& */ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true&");
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "776998fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue/my_unip_app/qq/pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-1!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-3!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true&");
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_3_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_776998fa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=776998fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_776998fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _default =

{
  data: function data() {
    return {
      providerList: [],
      hasProvider: false,
      username: '',
      password: '' };

  },
  methods: {
    initProvider: function initProvider() {var _this = this;
      // const filters = ['weixin', 'qq', 'sinaweibo'];
      var filters = ['weixin'];
      uni.getProvider({
        service: 'oauth',
        success: function success(res) {
          if (res.provider && res.provider.length) {
            for (var i = 0; i < res.provider.length; i++) {
              if (~filters.indexOf(res.provider[i])) {
                _this.providerList.push({
                  value: res.provider[i],
                  image: '../../static/img/' + res.provider[i] + '.png' });

              }
            }
            _this.hasProvider = true;
          }
        },
        fail: function fail(err) {
          // console.error('获取服务供应商失败：' + JSON.stringify(err));
        } });

    },
    initPosition: function initPosition() {
      /**
                                            * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                                            * 反向使用 top 进行定位，可以避免此问题。
                                            */
      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
    },
    bindLogin: function bindLogin() {var _this2 = this;
      if (this.username.length < 1) {
        uni.showToast({
          icon: 'none',
          title: '用户名不允许为空' });

        return;
      }
      if (this.password.length < 0) {
        uni.showToast({
          icon: 'none',
          title: '密码不允许为空' });

        return;
      }
      uni.request({
        url: 'http://zhangzibao.xyz:8080/myqqServer/api/login',
        data: {
          username: this.username,
          password: this.password },

        header: {
          'content-type': 'application/json' },

        method: 'POST' }).

      then(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),err = _ref2[0],res = _ref2[1];
        uni.showLoading({
          title: '登录中' });

        if (res.statusCode === 200) {
          _this2.toMain(res.data);
        } else {
          uni.hideLoading();
          uni.showToast({
            icon: 'none',
            title: res.data });

        }
      }).
      catch(function (e) {
        uni.showToast({
          icon: 'none',
          title: '网络连接错误' });

      });
    },
    oauth: function oauth(value) {var _this3 = this;
      uni.showLoading({
        title: '登录中' });

      uni.login({
        provider: value,
        success: function success(res) {
          uni.getUserInfo({
            provider: value,
            success: function success(infoRes) {
              /**
                                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                                 */
              uni.request({
                url: 'http://zhangzibao.xyz:8080/myqqServer/api/oauth',
                data: infoRes.userInfo,
                header: {
                  'content-type': 'application/json' },

                method: 'POST' }).

              then(function (_ref3) {var _ref4 = _slicedToArray(_ref3, 2),err = _ref4[0],res = _ref4[1];

                if (res.statusCode === 200) {
                  _this3.toMain(res.data);
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.data });

                }
              }).
              catch(function (e) {
                uni.hideLoading();
                uni.showToast({
                  icon: 'none',
                  title: '网络连接错误' });

              });
            } });

        },
        fail: function fail(err) {
          uni.hideLoading();
          uni.showToast({
            icon: 'none',
            title: '授权登录失败，请使用其他登录方式' });

        } });

    },
    toMain: function toMain(userInfo) {
      this.$store.dispatch('Login', userInfo).then(function (res) {
        uni.hideLoading();
        uni.reLaunch({
          url: '../user/user' });

        // console.log('登录成功');
      });
    } },

  onLoad: function onLoad() {
    //         this.initPosition();
    //         this.initProvider();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=style&index=0&id=776998fa&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!G:/vue/my_unip_app/qq/pages/login/login.vue?vue&type=template&id=776998fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "content" }, [
    _c("view", { staticClass: "input-group" }, [
      _c("view", { staticClass: "input-row border" }, [
        _c("text", { staticClass: "title" }, [_vm._v("账号：")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.username,
              expression: "username"
            }
          ],
          attrs: { type: "text", placeholder: "请输入账号", eventid: "E-0" },
          domProps: { value: _vm.username },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.username = $event.target.value
            }
          }
        })
      ]),
      _c("view", { staticClass: "input-row" }, [
        _c("text", { staticClass: "title" }, [_vm._v("密码：")]),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.password,
              expression: "password"
            }
          ],
          attrs: {
            type: "text",
            password: "true",
            placeholder: "请输入密码",
            eventid: "E-1"
          },
          domProps: { value: _vm.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.password = $event.target.value
            }
          }
        })
      ])
    ]),
    _c(
      "view",
      { staticClass: "btn-row" },
      [
        _c(
          "button",
          {
            staticClass: "primary",
            attrs: { type: "primary", eventid: "E-2" },
            on: { tap: _vm.bindLogin }
          },
          [_vm._v("登录")]
        )
      ],
      1
    ),
    _c(
      "view",
      { staticClass: "action-row" },
      [_c("navigator", { attrs: { url: "../reg/reg" } }, [_vm._v("注册账号")])],
      1
    ),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box" }, [
      _c("span", { staticClass: "line" }),
      _c("span", { staticClass: "text" }, [_vm._v("其他登录方式")]),
      _c("span", { staticClass: "line" })
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../vue/my_unip_app/qq/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map