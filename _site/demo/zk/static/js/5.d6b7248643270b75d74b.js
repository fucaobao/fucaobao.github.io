webpackJsonp([5],{"9bOW":function(t,e){},Ka8V:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Pl10"),n=s("XEAW"),i=s("T452"),r=s("m1Rr"),o=s("5Qen"),c={data:function(){return{name:"",logoUrl:"",orderId:"",accountName:"",alertMsg:"",confirmMessage:""}},created:function(){this._getCurrentMerchant()},methods:{showAlert:function(){this.$refs.alert.show()},showConfirm:function(){this.$refs.confirm.show()},back:function(){this.$router.back()},_getCurrentMerchant:function(){var t=this;Object(o.b)().then(function(e){e.errCode===i.b&&(t.name=e.data.name,t.logoUrl=e.data.logoUrl)})},submit:function(){this._check()&&(this.confirmMessage='确认撤销流水号<span style="color:red;">'+this.orderId+"</span>么？",this.showConfirm())},confirm:function(){var t=this;Object(r.a)({orderId:this.orderId,accountName:this.accountName}).then(function(e){e.errCode===i.b&&(t.alertMsg="操作成功",t.showAlert(),setTimeout(function(){t.back()},1500))})},_check:function(){var t=this.orderId,e=this.accountName;return t?!!e||(this.alertMsg="请输入会员手机号/会员ID",this.showAlert(),!1):(this.alertMsg="请输入交易流水号",this.showAlert(),!1)}},components:{Alert:a.a,Confirm:n.a}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"header"},[s("div",{staticClass:"top"},[s("i",{staticClass:"back",on:{click:t.back}}),t._v(" "),s("span",{staticClass:"text"},[t._v("撤销交易")])]),t._v(" "),s("div",{ref:"imgWrapper",staticClass:"img-wrapper"},[s("img",{attrs:{src:t.logoUrl}})]),t._v(" "),s("div",{staticClass:"store-name"},[t._v("\n        "+t._s(t.name)+"\n      ")])]),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"list"},[s("li",{staticClass:"item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],attrs:{type:"text",placeholder:"请输入交易流水号"},domProps:{value:t.orderId},on:{input:function(e){e.target.composing||(t.orderId=e.target.value)}}})]),t._v(" "),s("li",{staticClass:"item"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.accountName,expression:"accountName"}],attrs:{type:"text",placeholder:"请输入会员手机号/会员ID"},domProps:{value:t.accountName},on:{input:function(e){e.target.composing||(t.accountName=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"operate-btn",on:{click:t.submit}},[t._v("\n        确认撤销\n      ")])]),t._v(" "),s("alert",{ref:"alert",attrs:{message:t.alertMsg}}),t._v(" "),s("confirm",{ref:"confirm",attrs:{message:t.confirmMessage},on:{confirm:t.confirm}})],1)])},staticRenderFns:[]};var m=s("VU/8")(c,l,!1,function(t){s("UmfC")},"data-v-1717671f",null);e.default=m.exports},UmfC:function(t,e){},XEAW:function(t,e,s){"use strict";var a={props:{cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"},message:{type:String,default:"错误"}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}},components:{}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"confirm-wrapper",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"alert"},[s("p",{staticClass:"close"},[s("i",{on:{click:t.hide}})]),t._v(" "),s("div",{staticClass:"message",domProps:{innerHTML:t._s(t.message)}}),t._v(" "),s("div",{staticClass:"operate-btn"},[s("span",{staticClass:"btn cancel",on:{click:t.cancel}},[t._v(t._s(t.cancelBtnText))]),t._v(" "),s("span",{staticClass:"btn confirm",on:{click:t.confirm}},[t._v(t._s(t.confirmBtnText))])])])])},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("9bOW")},"data-v-0b799d3a",null);e.a=i.exports}});
//# sourceMappingURL=5.d6b7248643270b75d74b.js.map