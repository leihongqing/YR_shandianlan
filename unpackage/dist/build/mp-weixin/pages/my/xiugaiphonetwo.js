(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/xiugaiphonetwo"],{"18e1":function(t,e,n){"use strict";n.r(e);var o=n("2001"),i=n("8a6d");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("242b");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=s.exports},2001:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},"242b":function(t,e,n){"use strict";var o=n("361f"),i=n.n(o);i.a},"361f":function(t,e,n){},"8a6d":function(t,e,n){"use strict";n.r(e);var o=n("d14f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},d14f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("436c"));function i(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{phone:"",tipsCode:"获取验证码",code:"",codes:"",codestr:"",timeNum:60,clikType:!1,timeOut:60}},methods:{openCodeDialog:function(){var e=this,n=this;""!=n.phone?o.default.checkmobile(n.phone)?n.clikType||(n.getTime(),n.codestr=o.default.MathRand(4),n.clikType=!0,t.request({url:o.default.websiteUrl+"send/sendcode",method:"GET",data:{loginMark:o.default.getloginMark(),token:"",data:'{"phone": "'+n.phone+'"}'},success:function(n){200==n.data.code?e.codes=n.data.info:t.showToast({icon:"none",title:"获取验证码失败,请重试"})},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):t.showToast({icon:"none",title:"请输入正确的手机号码"}):t.showToast({icon:"none",title:"请输入你的手机号码"})},getTime:function(){var t=this,e=setInterval(function(){t.timeNum--,t.timeNum<=0?(t.tipsCode="重新获取验证码",t.timeNum=t.timeOut,t.clikType=!1,clearInterval(e)):t.tipsCode="重新发送"+t.timeNum+"秒"},1e3)},formSubmit:function(e){o.default.checkmobile(this.phone)?""!=this.code&&this.code==this.codes&&this.codes==this.code?(this.userdata=e.detail.value,t.request({url:o.default.websiteUrl+"usercenter/BindPhone",method:"GET",data:o.default.postdata({userid:o.default.getstate().userid,phone:this.userdata.phone,code:this.userdata.code}),success:function(e){200==e.data.code?(t.showToast({icon:"none",title:"修改成功,请重新登录。",duration:3e3}),o.default.logout()):t.showToast({icon:"none",title:e.data.info})},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})):t.showToast({icon:"none",title:"验证码错误"}):t.showToast({icon:"none",title:"请输入正确的手机号码"})}}};e.default=a}).call(this,n("543d")["default"])},daff:function(t,e,n){"use strict";(function(t){n("557f"),n("921b");o(n("66fd"));var e=o(n("18e1"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["daff","common/runtime","common/vendor"]]]);