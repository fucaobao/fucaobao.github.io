webpackJsonp([10],{OyYB:function(t,i){},ejLL:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={mixins:[s("F4+m").a],data:function(){return{news:[]}},created:function(){var t=this;window.onresize=function(){t._calcWidth()}},mounted:function(){this._calcWidth()},methods:{goToMaterialIndex:function(){this.$router.push({path:"/purchase/materialindex"})},goToMyOrder:function(){this.$router.push({path:"/purchase/myorder"})},goToShoppingCart:function(){this.$router.push({path:"/purchase/shoppingcart"})},goToDistributeOrder:function(){this.$router.push({path:"/purchase/distributeorder"})},goToStore:function(){this.$router.push({path:"/purchase/store"})},_calcWidth:function(){for(var t=window.innerWidth,i=this.$refs.list,s=i.children,e=void 0,a=void 0,r=void 0,o=void 0,n=0,c=0;c<s.length;c++){var l=s[c];n+=1,t<340?(e=135,a=135,r=15,o=15):t<400?(e=150,a=150,r=20,o=20):(e=165,a=165,r=25,o=25),i.style["margin-top"]=r+"px",l.style["margin-bottom"]=o+"px",l.style.width=e+"px",l.style.height=a+"px",n%2?l.style.left=(t-2*e)/3+"px":l.style.right=(t-2*e)/3+"px"}}},components:{}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("ul",{ref:"list",staticClass:"list"},[s("li",{staticClass:"item index",on:{click:t.goToMaterialIndex}},[s("i",{staticClass:"icon"}),t._v(" "),s("span",[t._v("原料首页")])]),t._v(" "),s("li",{staticClass:"item order",on:{click:t.goToMyOrder}},[s("i",{staticClass:"icon"}),t._v(" "),s("span",[t._v("我的订单")])]),t._v(" "),s("li",{staticClass:"item cart",on:{click:t.goToShoppingCart}},[s("i",{staticClass:"icon"}),t._v(" "),s("span",[t._v("购物车")])]),t._v(" "),s("li",{staticClass:"item distribute",on:{click:t.goToDistributeOrder}},[s("i",{staticClass:"icon"}),t._v(" "),s("span",[t._v("配送订单")])]),t._v(" "),s("li",{staticClass:"item store",on:{click:t.goToStore}},[s("i",{staticClass:"icon"}),t._v(" "),s("span",[t._v("我的库存")])])])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[i("span",{staticClass:"text"},[this._v("原料采购")])])}]};var r=s("VU/8")(e,a,!1,function(t){s("OyYB")},"data-v-d83421f6",null);i.default=r.exports}});
//# sourceMappingURL=10.6d82897d73b3e277b9fd.js.map