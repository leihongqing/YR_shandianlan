(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/resetpassword"],{"0d6b":function(e,t,o){"use strict";o.r(t);var n=o("9d14"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},2997:function(e,t,o){"use strict";o("f15c");var n=a(o("b0ce")),i=a(o("c83d"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))},"836f":function(e,t,o){"use strict";var n=o("f025"),i=o.n(n);i.a},"9d14":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("e1ec"));function i(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{phone:"",tipsCode:"获取验证码",code:"",codes:"",codestr:"",timeNum:60,clikType:!1,timeOut:60}},methods:{openCodeDialog:function(){var t=this,o=this;""!=o.phone?n.default.checkmobile(o.phone)?o.clikType||(o.getTime(),o.codestr=n.default.MathRand(4),o.clikType=!0,e.request({url:n.default.websiteUrl+"send/sendcode",method:"GET",data:{loginMark:n.default.getloginMark(),token:"",data:'{"phone": "'+o.phone+'"}'},success:function(o){200==o.data.code?t.codes=o.data.info:e.showToast({icon:"none",title:"获取验证码失败,请重试"})},fail:function(){e.hideLoading(),e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"请输入正确的手机号码"}):e.showToast({icon:"none",title:"请输入你的手机号码"})},getTime:function(){var e=this,t=setInterval(function(){e.timeNum--,e.timeNum<=0?(e.tipsCode="重新获取验证码",e.timeNum=e.timeOut,e.clikType=!1,clearInterval(t)):e.tipsCode="重新发送"+e.timeNum+"秒"},1e3)},formSubmit:function(t){n.default.checkmobile(this.phone)?""!=this.code&&this.code==this.codes&&this.codes==this.code?(this.userdata=t.detail.value,e.request({url:n.default.websiteUrl+"usercenter/checkphone",method:"GET",data:{loginMark:n.default.getloginMark(),token:"",data:{type:"2",phone:this.userdata.phone,code:this.userdata.code}},success:function(t){if(200==t.data.code){var o=t.data.data;n.default.setstate(o.id),e.redirectTo({url:"tianxiepassword1"})}else e.showToast({icon:"none",title:t.data.info})},fail:function(){e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"验证码错误"}):e.showToast({icon:"none",title:"请输入正确的手机号码"})}}};t.default=a}).call(this,o("649d")["default"])},b335:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"uni-password-but"},[o("form",{attrs:{eventid:"dbb083c6-3"},on:{submit:e.formSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"uni-phone",attrs:{type:"number",name:"phone",placeholder:"请输入已绑定的手机号",eventid:"dbb083c6-0"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),o("view",{staticClass:"uni-yzm-but"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",name:"code",placeholder:"请输入验证码",eventid:"dbb083c6-1"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),o("view",{attrs:{eventid:"dbb083c6-2"},on:{click:e.openCodeDialog}},[e._v(e._s(e.tipsCode))])]),o("button",{attrs:{type:"primary",formType:"submit"}},[e._v("下一步")])],1)],1)])},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},c83d:function(e,t,o){"use strict";o.r(t);var n=o("b335"),i=o("0d6b");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("836f");var s=o("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},f025:function(e,t,o){}},[["2997","common/runtime","common/vendor"]]]);