webpackJsonp([7],{aSvE:function(t,e){},c4hK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{}},created:function(){var t=this;window.resize=function(){t._calcWidth()}},mounted:function(){this._calcWidth()},methods:{back:function(){this.$router.back()},_calcWidth:function(){var t=window.innerWidth,e=this.$refs.header,s=this.$refs.contentWrapper,a=this.$refs.content;t<340?(e.style.height="235px",s.style.top="235px",a.style.width="280px",a.style.height="300px"):(e.style.height="270px",s.style.top="270px",a.style.width="300px",a.style.height="312px")}},components:{}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"wrapper"},[a("div",{ref:"header",staticClass:"header"},[a("div",{staticClass:"top"},[a("i",{staticClass:"back",on:{click:t.back}}),t._v(" "),a("span",{staticClass:"text"},[t._v("收款二维码")])]),t._v(" "),a("div",{ref:"imgWrapper",staticClass:"img-wrapper"},[a("img",{attrs:{src:s("OxUe")}})]),t._v(" "),a("div",{staticClass:"store-name"},[t._v("\n        美一天便利超市\n      ")]),t._v(" "),a("div",{staticClass:"record"},[a("div",{staticClass:"left"},[a("label",[t._v("应还账单")]),t._v(" "),a("span",[t._v("20000.00")])]),t._v(" "),a("div",{staticClass:"right"},[a("label",[t._v("剩余补贴")]),t._v(" "),a("span",[t._v("800.00")])])])]),t._v(" "),a("div",{ref:"contentWrapper",staticClass:"content-wrapper"},[a("div",{ref:"content",staticClass:"content"},[a("div",{staticClass:"qrcode-wrapper"},[a("img",{attrs:{src:s("n3q3")}})]),t._v(" "),a("p",{staticClass:"text"},[t._v("我的收款二维码")])])])])])},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("aSvE")},"data-v-79405e4e",null);e.default=n.exports},n3q3:function(t,e,s){t.exports=s.p+"static/img/qrcode.8891c28.png"}});
//# sourceMappingURL=7.569f964951698ce2c3b3.js.map