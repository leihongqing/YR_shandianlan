(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Tixian/wxtixian"],{"019c":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a})},"6c59":function(t,n,e){"use strict";e.r(n);var a=e("019c"),o=e("bb46");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("9906");var u,r=e("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=s.exports},9437:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("436c"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{userfoArray:"",AmountArray:"",Id:"",paymentid:""}},onLoad:function(){this.userinfo()},onShow:function(){},methods:{open:function(t){this.Id=t.currentTarget.id},userinfo:function(){var n=this;t.request({url:a.default.websiteUrl+"withdrawals/getpaymentlist",method:"GET",data:a.default.postdata({userid:a.default.getstate().userid,type:"2"}),success:function(e){200==e.data.code?(n.userfoArray=e.data.data.Member,n.AmountArray=e.data.data.baseinfo,n.paymentid=e.data.data.baseinfo.ID):t.showToast({icon:"none",title:"网络异常,请稍后重试"})},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})},tixian:function(){var n=this;""==this.Id?t.showToast({icon:"none",title:"请选择提现金额！"}):t.request({url:a.default.websiteUrl+"/withdrawals/savewithdrawals",method:"GET",data:a.default.postdata({userid:a.default.getstate().userid,type:"2",paymentid:this.Id}),success:function(e){200==e.data.code?(a.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info}),n.userinfo()):(a.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info}))},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})}}};n.default=i}).call(this,e("543d")["default"])},9906:function(t,n,e){"use strict";var a=e("e5a5"),o=e.n(a);o.a},bb46:function(t,n,e){"use strict";e.r(n);var a=e("9437"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},be2b:function(t,n,e){"use strict";(function(t){e("557f"),e("921b");a(e("66fd"));var n=a(e("6c59"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},e5a5:function(t,n,e){}},[["be2b","common/runtime","common/vendor"]]]);