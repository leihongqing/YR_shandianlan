(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/mytixian"],{"05e8":function(t,e,n){"use strict";n.r(e);var i=n("8c4c"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"2d92":function(t,e,n){},"42d4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),n("view",{staticClass:"uni-tx-content"},[t._l(t.userfoArray,function(e,i){return n("view",{key:i,staticClass:"uni-tx-item"},[n("text",{staticClass:"uni-tx-sum"},[t._v(t._s(e.Amount)+"元")]),n("text",{staticClass:"uni-tx-time"},[t._v(t._s(e.CreateDate))]),n("text",{staticClass:"uni-tx-lj"},[t._v(t._s(e.Remark))]),n("text",{staticClass:"uni-tx-zt"},[t._v("审核中")])])}),n("text",{class:{tisi:"暂无提现记录"==t.tishi}},[t._v(t._s(t.tishi))])],2)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-tx-title"},[n("text",[t._v("金额")]),n("text",[t._v("时间")]),n("text",[t._v("路径")]),n("text",[t._v("状态")])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"6fbb":function(t,e,n){"use strict";var i=n("2d92"),s=n.n(i);s.a},"8c4c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("e1ec"));function s(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{userfoArray:"",num:"13",tishi:""}},onLoad:function(){this.srlist()},onPullDownRefresh:function(){this.srlist(!0)},onReachBottom:function(){var t=new String("5");this.num=Number(this.num)+Number(t),this.srlist()},methods:{srlist:function(){var e=this;t.showLoading({title:"加载中.....",mask:!0}),t.request({url:i.default.websiteUrl+"/withdrawals/getlist",method:"GET",data:i.default.postdata({userid:i.default.getstate().userid,page:"1",num:this.num}),success:function(n){200==n.data.code?(t.hideLoading(),t.stopPullDownRefresh(),e.userfoArray=n.data.data.baseinfo,""==e.userfoArray?e.tishi="暂无提现记录":e.tishi=""):t.showToast({icon:"none",title:"网络异常,请下拉刷新重试！"}),t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请下拉刷新重试！"})}})}}};e.default=a}).call(this,n("649d")["default"])},b17b:function(t,e,n){"use strict";n("f15c");var i=a(n("b0ce")),s=a(n("f0b3"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},f0b3:function(t,e,n){"use strict";n.r(e);var i=n("42d4"),s=n("05e8");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("6fbb");var u=n("2877"),r=Object(u["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}},[["b17b","common/runtime","common/vendor"]]]);