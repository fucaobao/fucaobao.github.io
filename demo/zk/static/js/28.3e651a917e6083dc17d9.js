webpackJsonp([28],{Rob3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{name:"",phone:"",address:"",alertMsg:""}},created:function(){},methods:{back:function(){this.$router.back()},confirm:function(){var t=this.name,e=this.phone,s=this.address;return t?e?s?void 0:(this.alertMsg="请输入收货地址",void this.showAlert()):(this.alertMsg="请输入联系电话",void this.showAlert()):(this.alertMsg="请输入收货人",void this.showAlert())},showAlert:function(){this.$refs.alert.show()}},components:{Alert:s("Pl10").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("i",{staticClass:"back",on:{click:t.back}}),t._v(" "),s("span",{staticClass:"text"},[t._v("修改地址")])]),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("ul",{staticClass:"content"},[s("li",{staticClass:"item"},[s("label",[t._v("收货人")]),t._v(" "),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),s("li",{staticClass:"item"},[s("label",[t._v("联系电话")]),t._v(" "),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),s("li",{staticClass:"item"},[s("label",[t._v("收货地址")]),t._v(" "),s("div",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"btn-wrapper"},[s("span",{staticClass:"btn",on:{click:t.confirm}},[t._v("保存")])])]),t._v(" "),s("alert",{ref:"alert",attrs:{message:t.alertMsg}})],1)])},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("gs/m")},"data-v-0c164b3a",null);e.default=n.exports},"gs/m":function(t,e){}});
//# sourceMappingURL=28.3e651a917e6083dc17d9.js.map