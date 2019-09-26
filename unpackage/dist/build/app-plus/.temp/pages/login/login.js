require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{36:function(t,e,n){"use strict";var i=o(n(3)),a=o(n(37));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(39),a=n.n(i),o=n(40);var r=function(t){n(38)},s=n(0)(a.a,o.a,r,"data-v-34e314ac",null);e.default=s.exports},38:function(t,e){},39:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n(2);e.default={data:function(){return{providerList:[],hasProvider:!1,username:"",password:""}},methods:{initProvider:function(){var e=this,n=["weixin"];t.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var i=0;i<t.provider.length;i++)~n.indexOf(t.provider[i])&&e.providerList.push({value:t.provider[i],image:"../../static/img/"+t.provider[i]+".png"});e.hasProvider=!0}},fail:function(t){}})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){var e=this;this.username.length<1?t.showToast({icon:"none",title:"用户名不允许为空"}):this.password.length<0?t.showToast({icon:"none",title:"密码不允许为空"}):t.request({url:"http://120.79.44.150:8080/myqqServer/api/login",data:{username:this.username,password:this.password},header:{"content-type":"application/json"},method:"POST"}).then(function(n){var a=i(n,2),o=(a[0],a[1]);t.showLoading({title:"登录中"}),200===o.statusCode?e.toMain(o.data):(t.hideLoading(),t.showToast({icon:"none",title:o.data}))}).catch(function(e){t.showToast({icon:"none",title:"网络连接错误"})})},oauth:function(e){var n=this;t.showLoading({title:"登录中"}),t.login({provider:e,success:function(a){t.getUserInfo({provider:e,success:function(e){t.request({url:"http://120.79.44.150:8080/myqqServer/api/oauth",data:e.userInfo,header:{"content-type":"application/json"},method:"POST"}).then(function(e){var a=i(e,2),o=(a[0],a[1]);200===o.statusCode?n.toMain(o.data):t.showToast({icon:"none",title:o.data})}).catch(function(e){t.hideLoading(),t.showToast({icon:"none",title:"网络连接错误"})})}})},fail:function(e){t.hideLoading(),t.showToast({icon:"none",title:"授权登录失败，请使用其他登录方式"})}})},toMain:function(e){this.$store.dispatch("Login",e).then(function(e){t.hideLoading(),t.reLaunch({url:"../user/user"})})}},onLoad:function(){}}}).call(e,n(1).default)},40:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row border"},[n("text",{staticClass:"title"},[t._v("账号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"6Jp-0"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("密码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"ZJu-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"b02-2"},on:{tap:t.bindLogin}},[t._v("登录")])],1),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"../reg/reg"}},[t._v("注册账号")])],1),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("span",{staticClass:"line"}),e("span",{staticClass:"text"},[this._v("其他登录方式")]),e("span",{staticClass:"line"})])}]};e.a=i}},[36]);