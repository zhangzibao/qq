require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{77:function(t,e,r){"use strict";var n=i(r(3)),a=i(r(78));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},78:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(80),a=r.n(n),i=r(81);var o=function(t){r(79)},s=r(0)(a.a,i.a,o,"data-v-9de56950",null);e.default=s.exports},79:function(t,e){},80:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(2);e.default={data:function(){return{outcome:"",showClearIcon:!1,inputClearValue:"",items:["找人","找群","找公众号"],styles:[{value:"text",text:"文字",checked:!0},{value:"button",text:"按钮"}],colors:["#007aff","#4cd964","#dd524d"],current:0,activeColor:"#007aff",styleType:"text"}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: "+this.activeColor}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:"+this.activeColor+";border-color:"+this.activeColor+";"}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:"+this.activeColor+";border-left:0;border-bottom-style:solid;";break;default:t="color:#fff;border-color:"+this.activeColor+";background-color:"+this.activeColor}return t}},methods:a({},(0,i.mapMutations)(["getActiveId","setStranger"]),{toman:function(e){this.getActiveId(e.id),this.setStranger(e),t.navigateTo({url:"../person/person"})},searchfriend:function(){var e=this;if(this.inputClearValue.length){t.showLoading({title:"加载中"});var r="http://120.79.44.150:8080/myqqServer/api/Alluser/"+this.inputClearValue;t.request({url:r,method:"GET"}).then(function(r){var a=n(r,2),i=(a[0],a[1]);i.data.length?e.toman(i.data[0]):e.outcome="没有找到结果",t.hideLoading()})}},onClickItem:function(t){this.current!==t&&(this.current=t)},bindClearInput:function(t){this.inputClearValue=t.target.value,this.showClearIcon=t.target.value.length>0},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1,this.outcome=""}})}}).call(e,r(1).default)},81:function(t,e,r){"use strict";var n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:"page"},[r("view",{staticClass:"head"},[r("view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.items,function(e,n){return r("view",{key:n,staticClass:"segmented-control-item",class:t.styleType,style:n===t.current?t.activeStyle:t.itemStyle,attrs:{eventid:"bAq-0-"+n},on:{tap:function(e){t.onClickItem(n)}}},[t._v("\n                "+t._s(e)+"\n            ")])}))]),r("view",{staticClass:"page-section"},[r("view",{staticClass:"uni-list"},[r("view",{staticClass:"uni-list-cell"},[r("view",{staticClass:"uni-icon uni-icon-search"}),r("input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"输入用户名搜索",value:t.inputClearValue,eventid:"UAg-1"},on:{confirm:t.searchfriend,input:t.bindClearInput}}),t.showClearIcon?r("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"gss-2"},on:{tap:t.clearIcon}}):t._e(),r("button",{staticStyle:{"margin-left":"10upx"},attrs:{id:"msg-type",type:"search",eventid:"8Ew-3"},on:{tap:t.searchfriend}},[t._v("搜索")])],1)])]),r("view",{staticClass:"title"},[t._v(t._s(t.outcome))])])},staticRenderFns:[]};e.a=n}},[77]);