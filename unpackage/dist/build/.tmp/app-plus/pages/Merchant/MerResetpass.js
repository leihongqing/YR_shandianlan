(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Merchant/MerResetpass"],{"40f7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("e1ec"));function a(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{phone:"",tipsCode:"获取验证码",code:"",codes:"",codestr:"",timeNum:60,clikType:!1,timeOut:60}},methods:{openCodeDialog:function(){var t=this,n=this;""!=n.phone?o.default.checkmobile(n.phone)?n.clikType||(n.getTime(),n.codestr=o.default.MathRand(4),n.clikType=!0,e.request({url:o.default.websiteUrl+"send/sendcode",method:"GET",data:{loginMark:o.default.getloginMark(),token:"",data:'{"phone": "'+n.phone+'"}'},success:function(n){200==n.data.code?t.codes=n.data.info:e.showToast({icon:"none",title:"获取验证码失败,请重试"})},fail:function(){e.hideLoading(),e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"请输入正确的手机号码"}):e.showToast({icon:"none",title:"请输入你的手机号码"})},getTime:function(){var e=this,t=setInterval(function(){e.timeNum--,e.timeNum<=0?(e.tipsCode="重新获取验证码",e.timeNum=e.timeOut,e.clikType=!1,clearInterval(t)):e.tipsCode="重新发送"+e.timeNum+"秒"},1e3)},formSubmit:function(t){o.default.checkmobile(this.phone)?""!=this.code&&this.code==this.codes&&this.codes==this.code?(this.userdata=t.detail.value,e.request({url:o.default.websiteUrl+"merchantcenter/checkphone",method:"GET",data:o.default.postdata({type:"2",phone:this.userdata.phone,code:this.userdata.code}),success:function(t){if(200==t.data.code){var n=t.data.data;o.default.setstate(n.id),e.redirectTo({url:"MerResetpass2"})}else e.showToast({icon:"none",title:"该手机号尚未注册"})},fail:function(){e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"验证码错误"}):e.showToast({icon:"none",title:"请输入正确的手机号码"})}}};t.default=i}).call(this,n("649d")["default"])},"43ce":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"uni-password-but"},[n("form",{attrs:{eventid:"78c7b777-3"},on:{submit:e.formSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"uni-phone",attrs:{type:"number",name:"phone",placeholder:"请输入已绑定的手机号",eventid:"78c7b777-0"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("view",{staticClass:"uni-yzm-but"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",name:"code",placeholder:"请输入验证码",eventid:"78c7b777-1"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("view",{attrs:{eventid:"78c7b777-2"},on:{click:e.openCodeDialog}},[e._v(e._s(e.tipsCode))])]),n("button",{attrs:{type:"primary",formType:"submit"}},[e._v("下一步")])],1)],1)])},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"43de":function(e,t,n){"use strict";var o=n("8b6b"),a=n.n(o);a.a},"8b6b":function(e,t,n){},"912e":function(e,t,n){"use strict";n("f15c");var o=i(n("b0ce")),a=i(n("ca0b"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(a.default))},c902:function(e,t,n){"use strict";n.r(t);var o=n("40f7"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},ca0b:function(e,t,n){"use strict";n.r(t);var o=n("43ce"),a=n("c902");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("43de");var s=n("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports}},[["912e","common/runtime","common/vendor"]]]);