(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/yishibai"],{"0dad":function(t,e,i){"use strict";i("f15c");var n=s(i("b0ce")),a=s(i("8b90"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},"0f6b":function(t,e,i){"use strict";var n=i("55da"),a=i.n(n);a.a},"2e40":function(t,e,i){"use strict";i.r(e);var n=i("9037"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"55da":function(t,e,i){},"8b90":function(t,e,i){"use strict";i.r(e);var n=i("dda8"),a=i("2e40");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0f6b");var o=i("2877"),u=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},9037:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("cd0e")),a=s(i("e1ec"));function s(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniSegmentedControl:n.default},data:function(){return{sbArray:"",num:"6",Tishi:""}},onLoad:function(){this.fllist()},onShow:function(){this.fllist()},onPullDownRefresh:function(){this.fllist(!0),t.showLoading({title:"刷新中....",mask:!0})},onReachBottom:function(){var t=new String("5");this.num=Number(this.num)+Number(t),this.fllist()},methods:{openlq:function(e){t.navigateTo({url:"../task/YilinquTask?lqid="+e.currentTarget.dataset.lqid})},fllist:function(e){var i=this;a.default.islogin(!0),t.request({url:a.default.websiteUrl+"task/getmytasklist",method:"GET",data:a.default.postdata({page:"1",num:this.num,State:5,userid:a.default.getstate().userid}),success:function(e){200==e.data.code?i.sbArray=e.data.data.baseinfo:(a.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info})),e.data.data.baseinfo.length>=i.num?i.bottomtisi="正在加载...":i.bottomtisi="没有更多数据了",0===e.data.data.baseinfo.length?(i.Tishi="暂无任务",i.bottomtisi=""):i.Tishi="",t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请下拉刷新重试！"})},complete:function(){e&&t.stopPullDownRefresh()}})}}};e.default=o}).call(this,i("649d")["default"])},dda8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-swiper-box"},[i("view",{staticClass:"content"},t._l(t.sbArray,function(e,n){return i("view",{key:n,staticClass:"uni-rw-list"},[i("view",{staticClass:"uni-rw-cont"},[i("image",{attrs:{src:e.thumbnail,mode:""}}),i("view",{staticClass:"uni-rw-text"},[i("text",{staticClass:"Text_Nowrap"},[t._v(t._s(e.TaskName))]),i("view",{staticClass:"uni-rw-sl"},[i("view",[t._v(t._s(e.PeopleMin)+"-"+t._s(e.PeopleMax)+"人")]),i("view",[t._v(t._s(e.Days)+"天内")]),i("view",[t._v("还剩"),i("text",{staticClass:"uni-sy"},[t._v(t._s(e.Surplus))]),t._v("份")])])]),i("view",{staticClass:"uni-rw-time"},[i("text",[t._v(t._s(e.Reply))])])])])})),i("text",{staticClass:"tisi"},[t._v(t._s(t.Tishi))])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}},[["0dad","common/runtime","common/vendor"]]]);