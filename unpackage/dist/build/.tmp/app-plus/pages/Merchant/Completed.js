(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Merchant/Completed"],{"020a":function(t,e,n){"use strict";var i=n("6b0c"),a=n.n(i);a.a},"0622":function(t,e,n){"use strict";n.r(e);var i=n("58a3"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"177d":function(t,e,n){"use strict";n("f15c");var i=s(n("b0ce")),a=s(n("e0dc"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"58a3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("cd0e")),a=s(n("e1ec"));function s(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniSegmentedControl:i.default},data:function(){return{sbArray:"",num:"10",Tishi:"",bottomtisi:""}},onLoad:function(){this.fllist()},onShow:function(){this.fllist()},onPullDownRefresh:function(){this.fllist(!0),t.showLoading({title:"刷新中....",mask:!0})},onReachBottom:function(){var t=new String("5");this.num=Number(this.num)+Number(t),this.fllist()},methods:{fllist:function(e){var n=this;a.default.islogin_Mer(!0),t.request({url:a.default.websiteUrl+"mtask/gettasklist",method:"GET",data:a.default.postdata({page:"1",num:this.num,State:5,merchantid:a.default.getstate().userid}),success:function(e){200==e.data.code?n.sbArray=e.data.data.baseinfo:(a.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info})),e.data.data.baseinfo.length>=n.num?n.bottomtisi="正在加载...":n.bottomtisi="没有更多数据了",0===e.data.data.baseinfo.length?(n.Tishi="暂无任务",n.bottomtisi=""):n.Tishi="",t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请下拉刷新重试！"})},complete:function(){e&&t.stopPullDownRefresh()}})},openDone:function(e){t.navigateTo({url:"TaskDone?rwid="+e.currentTarget.dataset.rwid})}}};e.default=o}).call(this,n("649d")["default"])},"5dc4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-swiper-box"},[n("view",{staticClass:"content"},t._l(t.sbArray,function(e,i){return n("view",{key:i,staticClass:"uni-rw-list"},[n("view",{staticClass:"uni-rw-cont",attrs:{"data-rwid":e.ID,eventid:"62ebf99a-1-"+i},on:{tap:t.openDone}},[n("image",{attrs:{src:e.thumbnail}}),n("view",{staticClass:"uni-rw-text "},[n("text",{staticClass:"Text_Nowrap uni-rw-text1"},[t._v(t._s(e.TaskName))]),n("view",{staticClass:"uni-rw-sl Text_Nowrap"},[n("view",{staticClass:"uni-rw-bx Text_Nowrap"},[t._v(t._s(e.Requirement))]),n("view",[t._v("已完成"),n("text",{staticClass:"uni-sy"},[t._v(t._s(e.Done))]),t._v("份")])])]),n("button",{attrs:{type:"primary",id:e.IsGet,eventid:"62ebf99a-0-"+i},on:{click:t.openid}},[t._v("查看")])],1)])})),n("text",{class:{tisi:"暂无任务"==t.Tishi}},[t._v(t._s(t.Tishi))]),n("text",{staticClass:"uni-ti-shi"},[t._v(t._s(t.bottomtisi))])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"6b0c":function(t,e,n){},e0dc:function(t,e,n){"use strict";n.r(e);var i=n("5dc4"),a=n("0622");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("020a");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports}},[["177d","common/runtime","common/vendor"]]]);