webpackJsonp([12],{d83B:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("qwAB"),i=a("Pl10"),c=a("2X+S"),r=a("3Q4o"),n=a("T452"),l=a("cJyC"),o={data:function(){return{alertMsg:"",query:"",list:[],status:""}},created:function(){this._getMerchantDeliveryOrder()},filters:{formatDate:function(t){return t?t.substring(0,10):""},formatTime:function(t){return t?t.substring(11):""}},computed:{currentRoute:function(){return this.$router.currentRoute.path}},methods:{back:function(){this.$router.push({path:"/purchase"})},showAlert:function(){this.$refs.alert.show()},_getMerchantDeliveryOrder:function(){var t=this;Object(l.f)({status:this.status}).then(function(e){e.errCode===n.b&&(t.list=e.data)})},confirm:function(t){var e=this;Object(l.n)({merchantDeliveryOrderId:t.id}).then(function(t){t.errCode===n.b&&e.$router.push({path:"/purchase"})})},selectItem:function(t){this.$router.push({path:this.currentRoute+"/"+t.id})},onQueryChange:function(t){this.query=t},selectTab:function(t){this.status=t;var e=this.$refs.tab.children,a=e[0],s=e[1],i=e[2];""==t?(Object(r.a)(a,"active"),Object(r.c)(s,"active"),Object(r.c)(i,"active")):"11"==t?(Object(r.c)(a,"active"),Object(r.a)(s,"active"),Object(r.c)(i,"active")):"51"==t&&(Object(r.c)(a,"active"),Object(r.c)(s,"active"),Object(r.a)(i,"active"))}},watch:{status:function(){this._getMerchantDeliveryOrder()},query:function(){this._getMerchantDeliveryOrder()}},components:{SearchBox:c.a,Scroll:s.a,Alert:i.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"header"},[a("div",{staticClass:"icon-wrapper"},[a("i",{staticClass:"back",on:{click:t.back}})]),t._v(" "),a("div",{staticClass:"search-box"},[a("search-box",{attrs:{placeholder:"请输入日期/关键词"},on:{query:t.onQueryChange}})],1)]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("ul",{ref:"tab",staticClass:"tab"},[a("li",{staticClass:"tab-item active",on:{click:function(e){t.selectTab("")}}},[a("span",[t._v("全部")])]),t._v(" "),a("li",{staticClass:"tab-item",on:{click:function(e){t.selectTab("11")}}},[a("span",[t._v("待签收")])]),t._v(" "),a("li",{staticClass:"tab-item",on:{click:function(e){t.selectTab("51")}}},[a("span",[t._v("已完成")])])]),t._v(" "),a("scroll",{staticClass:"content"},[a("ul",{staticClass:"list"},t._l(t.list,function(e,s){return a("li",{staticClass:"item",on:{click:function(a){t.selectItem(e)}}},[a("div",{staticClass:"left"},[a("p",[t._v(t._s(t._f("formatDate")(e.creationTime)))]),t._v(" "),a("p",[t._v(t._s(t._f("formatTime")(e.creationTime)))])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"order detail-item"},[a("p",{staticClass:"code"},[a("label",[t._v("配送单ID：")]),a("span",[t._v(t._s(e.code))])]),t._v(" "),a("p",[a("label"),a("span",{staticClass:"red"},[t._v(t._s(t._f("formatDeliverStatus")(e.status)))])])]),t._v(" "),a("div",{staticClass:"price detail-item"},[a("p",[a("label",[t._v("品种：")]),a("span",{staticClass:"red"},[t._v(t._s(e.kindCount))])]),t._v(" "),a("p",[a("label",[t._v("总价：")]),a("span",{staticClass:"red bold"},[t._v(t._s(e.totalMoney))]),a("label",[t._v("元")])])]),t._v(" "),a("p",{staticClass:"btn"},[51!=e.status?a("span",{on:{click:function(a){a.stopPropagation(),t.confirm(e)}}},[t._v("签收")]):t._e()])])])}))])],1),t._v(" "),a("alert",{ref:"alert",attrs:{message:t.alertMsg}}),t._v(" "),a("router-view")],1)])},staticRenderFns:[]};var v=a("VU/8")(o,u,!1,function(t){a("tKo1")},"data-v-bb1818c8",null);e.default=v.exports},tKo1:function(t,e){}});
//# sourceMappingURL=12.c997745d86aa68098093.js.map