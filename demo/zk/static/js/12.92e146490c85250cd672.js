webpackJsonp([12],{d83B:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("2X+S"),c=e("3Q4o"),i={data:function(){return{query:"",status:"0"}},created:function(){this._getOrderList()},methods:{back:function(){this.$router.push({path:"/purchase"})},_getOrderList:function(){},showCategory:function(){},onQueryChange:function(t){this.query=t},selectTab:function(t){this.status=t;for(var a=this.$refs.tab.children,e=0;e<a.length;e++){var s=a[e];t==e?Object(c.a)(s,"active"):Object(c.c)(s,"active")}}},watch:{status:function(){this._getOrderList()}},components:{SearchBox:s.a}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"icon-wrapper"},[e("i",{staticClass:"back",on:{click:t.back}})]),t._v(" "),e("div",{staticClass:"search-box"},[e("SearchBox",{attrs:{placeholder:"请输入日期/关键词"},on:{query:t.onQueryChange}})],1)]),t._v(" "),e("div",{staticClass:"goods-wrapper"},[e("ul",{ref:"tab",staticClass:"tab"},[e("li",{staticClass:"tab-item active",on:{click:function(a){t.selectTab("0")}}},[e("span",[t._v("全部")])]),t._v(" "),e("li",{staticClass:"tab-item",on:{click:function(a){t.selectTab("1")}}},[e("span",[t._v("待签收")])]),t._v(" "),e("li",{staticClass:"tab-item",on:{click:function(a){t.selectTab("2")}}},[e("span",[t._v("已完成")])])])])])])},staticRenderFns:[]};var r=e("VU/8")(i,n,!1,function(t){e("h0CJ")},"data-v-a21999ee",null);a.default=r.exports},h0CJ:function(t,a){}});
//# sourceMappingURL=12.92e146490c85250cd672.js.map