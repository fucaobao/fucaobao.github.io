webpackJsonp([30],{"0ZA5":function(n,t){},"34KM":function(n,t){},"D+SE":function(n,t){},"Kf/3":function(n,t,e){"use strict";t.d=function(n){o.a.set(i,n)},t.a=function(){return o.a.get(i,!1)},t.g=function(n){o.a.set(u,n)},t.b=function(){return o.a.get(a,{})},t.e=function(n){return o.a.set(a,n),n},t.c=function(){return o.a.get(c,{})},t.f=function(n){return o.a.set(c,n),n};var r=e("MfZv"),o=e.n(r),i="__AUTOLOGIN__",u="__USERINFO__",a="__PRODUCT__",c="__SHOPPINGCART__"},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};e.d(r,"setLoginPage",function(){return T}),e.d(r,"setAutoLogin",function(){return C}),e.d(r,"setCurrentProduct",function(){return L}),e.d(r,"setShoppingCart",function(){return E});var o={};e.d(o,"isLoginPage",function(){return S}),e.d(o,"isAutoLogin",function(){return A}),e.d(o,"currentProduct",function(){return I}),e.d(o,"shoppingCartItems",function(){return N});e("j1ja");var i=e("/5sW"),u=e("Dd8w"),a=e.n(u),c=e("NYxO"),l={data:function(){return{}},computed:a()({},Object(c.c)(["isLoginPage"])),components:{}},s={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:!n.isLoginPage,expression:"!isLoginPage"}],staticClass:"tab"},[e("router-link",{staticClass:"tab-item index",attrs:{tag:"div",to:"/index"}},[e("span",[n._v("首页")])]),n._v(" "),e("router-link",{staticClass:"tab-item features",attrs:{tag:"div",to:"/features"}},[e("span",[n._v("店家功能")])]),n._v(" "),e("router-link",{staticClass:"tab-item purchase",attrs:{tag:"div",to:"/purchase"}},[e("span",[n._v("原料采购")])]),n._v(" "),e("router-link",{staticClass:"tab-item mine",attrs:{tag:"div",to:"/mine"}},[e("span",[n._v("我的")])])],1)},staticRenderFns:[]};var d={name:"App",data:function(){return{}},components:{Tab:e("VU/8")(l,s,!1,function(n){e("0ZA5")},"data-v-0ffd989a",null).exports}},p={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1),this._v(" "),t("tab")],1)},staticRenderFns:[]};var m=e("VU/8")(d,p,!1,function(n){e("D+SE")},"data-v-0105225a",null).exports,h=e("/ocq"),f=function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"k3dQ"))},P=function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"WPze"))},b=function(){return Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"B8yc"))},_=function(){return Promise.all([e.e(0),e.e(28)]).then(e.bind(null,"Rob3"))};i.a.use(h.a);var g,v=new h.a({routes:[{path:"/",redirect:"/login"},{path:"/login",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"EV1k"))}},{path:"/index",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"Pt1D"))},children:[{path:":id",component:function(){return Promise.all([e.e(0),e.e(23)]).then(e.bind(null,"cTIG"))}}]},{path:"/features",component:function(){return Promise.all([e.e(0),e.e(26)]).then(e.bind(null,"JCwA"))},children:[{path:"qrcode",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"c4hK"))}},{path:"undorecord",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"Ka8V"))}},{path:"traderecord",component:function(){return Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"I46d"))}},{path:"members",component:function(){return Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"fZl/"))}},{path:"payaccount",component:function(){return Promise.all([e.e(0),e.e(24)]).then(e.bind(null,"HXit"))},children:[{path:"orderdetail",component:f}]},{path:"statement",component:function(){return Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"yRA8"))},children:[{path:"detail",component:function(){return Promise.all([e.e(0),e.e(25)]).then(e.bind(null,"zs4K"))},children:[{path:"orderdetail",component:f}]}]}]},{path:"/purchase",component:function(){return Promise.all([e.e(0),e.e(27)]).then(e.bind(null,"ejLL"))},children:[{path:"materialindex",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"zH0q"))},children:[{path:"shoppingcart",component:P,children:[{path:"confirm",component:b,children:[{path:"address",component:_}]}]}]},{path:"myorder",component:function(){return Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"//qK"))},children:[{path:"detail",component:function(){return Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"Gc1B"))}}]},{path:"shoppingcart",component:P,children:[{path:"confirm",component:b,children:[{path:"address",component:_}]}]},{path:"distributeorder",component:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"d83B"))},children:[{path:"detail",component:function(){return Promise.all([e.e(0),e.e(22)]).then(e.bind(null,"Zkoh"))}}]},{path:"store",component:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"+5vs"))},children:[{path:":id",component:function(){return Promise.all([e.e(0),e.e(16)]).then(e.bind(null,"UT8g"))}}]}]},{path:"/mine",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"N6Mx"))},children:[{path:"baseinfo",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"r0Lp"))}},{path:"qrcode",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"CyvS"))}},{path:"irecommend",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"tQZs"))}},{path:"password",component:function(){return Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"QuP9"))}}]}]}),O=e("Kf/3"),T=function(n,t){(0,n.commit)("SET_LOGINPAGE",t)},C=function(n,t){(0,n.commit)("SET_AUTOLOGIN",Object(O.d)(t))},L=function(n,t){(0,n.commit)("SET_CURRENT_PRODUCT",Object(O.e)(t))},E=function(n,t){(0,n.commit)("SET_SHOPPINGCART_ITEMS",Object(O.f)(t))},S=function(n){return n.isLoginPage},A=function(n){return n.isAutoLogin},I=function(n){return n.currentProduct},N=function(n){return n.shoppingCartItems},R=e("bOdI"),j=e.n(R),G=(g={},j()(g,"SET_LOGINPAGE",function(n,t){n.isLoginPage=t}),j()(g,"SET_AUTOLOGIN",function(n,t){n.isAutoLogin=t}),j()(g,"SET_CURRENT_PRODUCT",function(n,t){n.currentProduct=t}),j()(g,"SET_SHOPPINGCART_ITEMS",function(n,t){n.shoppingCartItems=t}),g),U={isLoginPage:!0,isAutoLogin:Object(O.a)(),currentProduct:Object(O.b)(),shoppingCartItems:Object(O.c)()};e("sax8");i.a.use(c.a);var w=new c.a.Store({actions:r,getters:o,state:U,mutations:G,strict:!1,plugins:[]}),x=(e("cTzj"),e("v5o6")),k=e.n(x);e("34KM");k.a.attach(document.body),new i.a({el:"#app",render:function(n){return n(m)},store:w,router:v})}},["NHnr"]);
//# sourceMappingURL=app.ad08bab7663cb175ad9a.js.map