(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/Tiephone"],{"20de":function(e,t,n){"use strict";(function(e){n("557f"),n("921b");o(n("66fd"));var t=o(n("7522"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"460e":function(e,t,n){"use strict";var o=n("761b"),i=n.n(o);i.a},"4c5f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("436c"));function i(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{phone:"",tipsCode:"获取验证码",code:"",codes:"",codestr:"",timeNum:60,clikType:!1,timeOut:60}},methods:{openCodeDialog:function(){var t=this,n=this;""!=n.phone?o.default.checkmobile(n.phone)?n.clikType||(n.getTime(),n.codestr=o.default.MathRand(4),n.clikType=!0,e.request({url:o.default.websiteUrl+"send/sendcode",method:"GET",data:{loginMark:o.default.getloginMark(),token:"",data:'{"phone": "'+n.phone+'"}'},success:function(n){200==n.data.code?t.codes=n.data.info:e.showToast({icon:"none",title:"获取验证码失败,请重试"})},fail:function(){e.hideLoading(),e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"请输入正确的手机号码"}):e.showToast({icon:"none",title:"请输入你的手机号码"})},getTime:function(){var e=this,t=setInterval(function(){e.timeNum--,e.timeNum<=0?(e.tipsCode="重新获取验证码",e.timeNum=e.timeOut,e.clikType=!1,clearInterval(t)):e.tipsCode="重新发送"+e.timeNum+"秒"},1e3)},formSubmit:function(t){o.default.checkmobile(this.phone)?""!=this.code&&this.code==this.codes&&this.codes==this.code?(this.userdata=t.detail.value,e.request({url:o.default.websiteUrl+"usercenter/BindPhone",method:"GET",data:o.default.postdata({userid:o.default.getstate().userid,phone:this.userdata.phone,code:this.userdata.code}),success:function(t){t.data.code,e.showToast({icon:"none",title:t.data.info})},fail:function(){e.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):e.showToast({icon:"none",title:"验证码错误"}):e.showToast({icon:"none",title:"请输入正确的手机号码"})}}};t.default=a}).call(this,n("543d")["default"])},7522:function(e,t,n){"use strict";n.r(t);var o=n("a2aa"),i=n("917a");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("460e");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=s.exports},"761b":function(e,t,n){},"917a":function(e,t,n){"use strict";n.r(t);var o=n("4c5f"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},a2aa:function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})}},[["20de","common/runtime","common/vendor"]]]);