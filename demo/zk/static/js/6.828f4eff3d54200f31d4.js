webpackJsonp([6],{"5y1c":function(t,s){},r0Lp:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("qwAB"),a=i("GQaK"),n=i("3Q4o"),r={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var s=0,i=this.$refs.slider.clientWidth,e=0;e<this.children.length;e++){var a=this.children[e];Object(n.a)(a,"slider-item"),a.style.width=i+"px",s+=i}this.loop&&!t&&(s+=2*i),this.$refs.sliderGroup.style.width=s+"px"},_initSlider:function(){var t=this;this.slider=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,click:!0,snap:{loop:!0,threshold:.3,speed:400}}),this.slider.on("scrollEnd",function(){var s=t.slider.getCurrentPage().pageX;t.currentPageIndex=s,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,s=this.currentPageIndex+1;s%=this.dots.length,this.timer=setTimeout(function(){t.slider.goToPage(s,0,400)},this.interval)}},destroy:function(){clearTimeout(this.timer)}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(s,e){return i("span",{staticClass:"dot",class:{active:t.currentPageIndex===e}})}))])},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("5y1c")},"data-v-73acd0d8",null).exports,o=i("5Qen"),d=i("T452"),v={data:function(){return{imgList:[],merchantInfo:{}}},created:function(){this._getImgList(),this._getCurrentMerchant()},computed:{chainName:function(){return this.merchantInfo.chainName||"否"}},methods:{back:function(){this.$router.back()},_getCurrentMerchant:function(){var t=this;Object(o.b)().then(function(s){s.errCode===d.b&&(t.merchantInfo=s.data)})},_getImgList:function(){for(var t=0;t<1;t++)this.imgList.push("https://y.gtimg.cn/music/photo_new/T003R720x288M000000yTU5u2XJFWh.jpg?max_age=2592000")}},components:{Scroll:e.a,Slider:c}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("i",{staticClass:"back",on:{click:t.back}}),t._v(" "),i("span",{staticClass:"text"},[t._v("基本信息")])]),t._v(" "),i("div",{staticClass:"content-wrapper"},[i("scroll",{staticClass:"content"},[i("div",[i("div",{staticClass:"slider-wrapper"},[i("slider",t._l(t.imgList,function(t){return i("div",[i("img",{attrs:{src:t}})])})),t._v(" "),i("div",{staticClass:"store"},[i("div",{staticClass:"img-wrapper"},[i("img",{attrs:{src:t.merchantInfo.logoUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n                "+t._s(t.merchantInfo.name)+"\n              ")])])],1),t._v(" "),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("div",{staticClass:"left alliance"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("是否联盟")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.chainName))])]),t._v(" "),t._e()]),t._v(" "),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("div",{staticClass:"left total"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("应还账单总额")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t._f("formatMoney")(t.merchantInfo.billMoney)))])]),t._v(" "),i("li",{staticClass:"item"},[i("div",{staticClass:"left remain"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("剩余补贴额度")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t._f("formatMoney")(t.merchantInfo.subsidyMoney)))])]),t._v(" "),i("li",{staticClass:"item"},[i("div",{staticClass:"left period"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("订单结算周期")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.merchantInfo.checkCycleDay))])])]),t._v(" "),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("div",{staticClass:"left person"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("联系人")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.merchantInfo.contacts))])]),t._v(" "),i("li",{staticClass:"item"},[i("div",{staticClass:"left mobile"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("联系电话")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.merchantInfo.contactsNumber))])]),t._v(" "),i("li",{staticClass:"item"},[i("div",{staticClass:"left location start"},[i("div",{staticClass:"icon-wrapper"},[i("i")]),t._v(" "),i("span",[t._v("联系地址")])]),t._v(" "),i("div",{staticClass:"right"},[t._v(t._s(t.merchantInfo.fullAddress))])]),t._v(" "),t._e(),t._v(" "),t._e()]),t._v(" "),t._e(),t._v(" "),i("div",{staticClass:"article"},[i("h3",[t._v("简介")]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.merchantInfo.description)}})])])])],1)])])},staticRenderFns:[]};var h=i("VU/8")(v,_,!1,function(t){i("ziKj")},"data-v-20d263d2",null);s.default=h.exports},ziKj:function(t,s){}});
//# sourceMappingURL=6.828f4eff3d54200f31d4.js.map