(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Merchant/TaskDone"],{3471:function(t,i,e){"use strict";var s=e("379f"),n=e.n(s);n.a},"379f":function(t,i,e){},7017:function(t,i,e){"use strict";e.r(i);var s=e("d8cb"),n=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);i["default"]=n.a},c721:function(t,i,e){"use strict";e("f15c");var s=a(e("b0ce")),n=a(e("f70f"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},d8cb:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("e1ec")),n=a(e("cd0e"));function a(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniSegmentedControl:n.default},data:function(){return{items:["最新领取","到店时间"],current:0,rwlistArray:"",Tishi:"",num:"9",bottomtisi:"",rwid:""}},onLoad:function(t){this.requestTask(),this.rwid=t.rwid},onShow:function(){this.requestTask()},onPullDownRefresh:function(){this.requestTask(!0),t.showLoading({title:"刷新中....",mask:!0})},onReachBottom:function(){var t=new String("5");this.num=Number(this.num)+Number(t),this.requestTask()},methods:{onClickItem:function(t){this.current!==t&&(this.current=t)},requestTask:function(i){var e=this;s.default.islogin_Mer(!0),t.showLoading({mask:!0,title:"加载中"}),t.request({url:s.default.websiteUrl+"mtask/gettasklistbytime",method:"GET",data:s.default.postdata({taskid:this.rwid,page:"1",num:this.num,type:"3"}),success:function(i){200==i.data.code?(e.rwlistArray=i.data.data.baseinfo,i.data.data.baseinfo.forEach(function(t){t.Receivedate=t.Receivedate.substr(0,10)})):t.showToast({icon:"none",title:i.data.info}),i.data.data.baseinfo.length>=e.num?e.bottomtisi="正在加载...":e.bottomtisi="没有更多数据了",0===i.data.data.baseinfo.length?(e.Tishi="暂无任务",e.bottomtisi=""):e.Tishi="",t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常，请下拉刷新"})},complete:function(){i&&t.stopPullDownRefresh()}})}}};i.default=o}).call(this,e("649d")["default"])},f70f:function(t,i,e){"use strict";e.r(i);var s=e("f98b"),n=e("7017");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("3471");var o=e("2877"),u=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,null,null);i["default"]=u.exports},f98b:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[t._l(t.rwlistArray,function(i,s){return e("view",{key:s,staticClass:"uni-ts-box"},[e("view",{staticClass:"uni-ts-item"},[e("image",{attrs:{src:i.Headimgurl}}),e("view",{staticClass:"uni-text-box"},[e("view",{staticClass:"uni-top-text"},[e("text",{staticClass:"uni-ts-title Text_Nowrap"},[t._v(t._s(i.NickName))]),e("text",{staticClass:"uni-ts-title Text_Nowrap"},[t._v("到店时间"+t._s(i.Receivedate))])]),e("view",{staticClass:"uni-item-box"},[e("view",{staticClass:"uni-time-item"},[e("uni-icon",{staticClass:"uni-time-icon",attrs:{mpcomid:"1ef65978-0-"+s}}),e("text",[t._v(t._s(i.Createdate))])],1),e("view",{staticClass:"uni-time-item"},[e("uni-icon",{staticClass:"uni-phones-icon",attrs:{mpcomid:"1ef65978-1-"+s}}),e("text",[t._v(t._s(i.phone))])],1)])])])])}),e("text",{class:{tisi:"暂无任务"==t.Tishi}},[t._v(t._s(t.Tishi))]),e("text",{staticClass:"uni-ti-shi"},[t._v(t._s(t.bottomtisi))])],2)},n=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return n})}},[["c721","common/runtime","common/vendor"]]]);