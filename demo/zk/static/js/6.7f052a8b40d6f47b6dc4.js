webpackJsonp([6],{"3Q4o":function(t,s,i){"use strict";function a(t,s){return new RegExp("(^|\\s)"+s+"(\\s|$)").test(t.className)}s.a=function(t,s){if(a(t,s))return;var i=t.className.split(/\s+/g);i.push(s),t.className=i.join(" ")},s.b=a,s.c=function(t,s){if(!a(t,s))return;var i=[];t.className.split(/\s+/g).forEach(function(t){t!=s&&i.push(t)}),t.className=i.join(" ")}},"9M2t":function(t,s){},dInM:function(t,s){},r0Lp:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("qwAB"),e=i("GQaK"),l=i("3Q4o"),r={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t.autoPlay&&t._play()},20),window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})},methods:{_setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var s=0,i=this.$refs.slider.clientWidth,a=0;a<this.children.length;a++){var e=this.children[a];Object(l.a)(e,"slider-item"),e.style.width=i+"px",s+=i}this.loop&&!t&&(s+=2*i),this.$refs.sliderGroup.style.width=s+"px"},_initSlider:function(){var t=this;this.slider=new e.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,click:!0,snap:{loop:!0,threshold:.3,speed:400}}),this.slider.on("scrollEnd",function(){var s=t.slider.getCurrentPage().pageX;t.currentPageIndex=s,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,s=this.currentPageIndex+1;s%=this.dots.length,this.timer=setTimeout(function(){t.slider.goToPage(s,0,400)},this.interval)}},destroy:function(){clearTimeout(this.timer)}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(s,a){return i("span",{staticClass:"dot",class:{active:t.currentPageIndex===a}})}))])},staticRenderFns:[]};var c=i("VU/8")(r,n,!1,function(t){i("9M2t")},"data-v-58b1c47f",null).exports,v={data:function(){return{imgList:[]}},created:function(){this._getImgList()},methods:{back:function(){this.$router.back()},_getImgList:function(){for(var t=0;t<5;t++)this.imgList.push("https://y.gtimg.cn/music/photo_new/T003R720x288M000000yTU5u2XJFWh.jpg?max_age=2592000")}},components:{Scroll:a.a,Slider:c}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"slide"}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"header"},[a("i",{staticClass:"back",on:{click:t.back}}),t._v(" "),a("span",{staticClass:"text"},[t._v("基本信息")])]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("scroll",{staticClass:"content"},[a("div",[a("div",{staticClass:"slider-wrapper"},[a("slider",t._l(t.imgList,function(t){return a("div",[a("img",{attrs:{src:t}})])})),t._v(" "),a("div",{staticClass:"store"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:i("OxUe"),alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[t._v("\n                美一天便利店\n              ")])])],1),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("div",{staticClass:"left alliance"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("是否联盟")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("是")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"left id"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("总店ID")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("556")])])]),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("div",{staticClass:"left total"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("应还账单总额")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("6000.00")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"left remain"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("剩余补贴额度")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("200.00")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"left period"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("订单结算周期")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("一周")])])]),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("div",{staticClass:"left person"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("联系人")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("张三")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"left mobile"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("联系电话")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("18512345678")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"left location start"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("联系地址")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("广东省深圳市罗湖区罗湖体育馆123号")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"lati left"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("经度")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("东经E114°10′3.28″")])]),t._v(" "),a("li",{staticClass:"item"},[a("div",{staticClass:"lati left"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("纬度")])]),t._v(" "),a("div",{staticClass:"right"},[t._v("北纬N22°33′45.51″")])])]),t._v(" "),a("ul",{staticClass:"list"},[a("li",{staticClass:"item"},[a("div",{staticClass:"left bank start"},[a("div",{staticClass:"icon-wrapper"},[a("i")]),t._v(" "),a("span",[t._v("银行信息")])]),t._v(" "),a("div",{staticClass:"right"},[a("label",[t._v("华夏银行")]),t._v(" "),a("span",[t._v("6228480402564890018")])])])]),t._v(" "),a("div",{staticClass:"article"},[a("h3",[t._v("简介")]),t._v(" "),a("div",[a("p",[t._v("欢迎光临本店，您的支持是我们最大的前进动力，本店所有产品均低价销售，并且保证质量，需要的亲请放心购买，我们一定会给您一个最舒心的购物体验！")]),t._v(" "),a("p",[t._v("本店所有的商品照片为专业摄影师拍摄，后期精心修制及色彩调整，尽量与实际商品保持一致，但由于拍摄时用光、角度、显示器色彩偏差、个人对颜色的认知等方面的差异，导致实物可能会与照片存在一些色差，最终颜色以实际商品为准。请在购买前与我们客服充分沟通后做出慎重选择。色差问题将不被我们认可当退换货的理由！")])])])])])],1)])])},staticRenderFns:[]};var o=i("VU/8")(v,d,!1,function(t){i("dInM")},"data-v-4674c124",null);s.default=o.exports}});
//# sourceMappingURL=6.7f052a8b40d6f47b6dc4.js.map