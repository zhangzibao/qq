(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/reg/reg"],{

/***/ "../../../../vue/my_unip_app/qq/main.js?{\"page\":\"pages%2Freg%2Freg\"}":
/*!******************************************************************!*\
  !*** G:/vue/my_unip_app/qq/main.js?{"page":"pages%2Freg%2Freg"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../vue/my_unip_app/qq/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _reg = _interopRequireDefault(__webpack_require__(/*! ./pages/reg/reg.vue */ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_reg.default));

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages.json":
/*!****************************************!*\
  !*** G:/vue/my_unip_app/qq/pages.json ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue":
/*!***********************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/reg/reg.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg.vue?vue&type=template&id=f8644e60&scoped=true& */ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true&");
/* harmony import */ var _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg.vue?vue&type=script&lang=js& */ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8644e60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vue/my_unip_app/qq/pages/reg/reg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js&");
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true&":
/*!******************************************************************************************!*\
  !*** G:/vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Hbuilder-X/HBuilderX-11-26/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=template&id=f8644e60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Hbuilder_X_HBuilderX_11_26_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_f8644e60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!G:/vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _default =























{
  data: function data() {
    return {
      username: '',
      password: ''
      // email: ''
    };
  },
  methods: {
    register: function register() {
      /**
                                    * 客户端对账号信息进行一些必要的校验。
                                    * 实际开发中，根据业务需要进行处理，这里仅做示例。
                                    */
      if (this.username.trim().length < 2) {
        uni.showToast({
          icon: 'none',
          title: '账号最短为 2 个字符' });

        return;
      }
      if (this.password.trim().length < 6) {
        uni.showToast({
          icon: 'none',
          title: '密码最短为 6 个字符' });

        return;
      }
      //                 if (this.email.length < 3 || !~this.email.indexOf('@')) {
      //                     uni.showToast({
      //                         icon: 'none',
      //                         title: '邮箱地址不合法'
      //                     });
      //                     return;
      //                 }

      var data = {
        username: this.username.trim(),
        password: this.password.trim()
        // email: this.email
      };

      uni.request({
        url: 'http://zhangzibao.xyz:8080/myqqServer/api/register',
        data: data,
        header: {
          'content-type': 'application/json' },

        method: 'POST' }).
      then(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),err = _ref2[0],res = _ref2[1];
        if (res.statusCode == 200) {
          // console.log(res.data);
          uni.showToast({
            title: '注册成功' });


          uni.navigateBack({
            delta: 1 });

        } else {
          uni.showToast({
            icon: 'none',
            title: res.data });

        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!G:/vue/my_unip_app/qq/pages/reg/reg.vue?vue&type=template&id=f8644e60&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("view", { staticClass: "input-row border" }, [
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
            on: { tap: _vm.register }
          },
          [_vm._v("注册")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../vue/my_unip_app/qq/main.js?{\"page\":\"pages%2Freg%2Freg\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/reg/reg.js.map