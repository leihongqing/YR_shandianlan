(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Merchant/MerTask"],{"3ad7":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},"848e":function(t,e,n){},"8c9c":function(t,e,n){"use strict";var a=n("848e"),i=n.n(a);i.a},"8f20":function(t,e,n){"use strict";(function(t){n("557f"),n("921b");a(n("66fd"));var e=a(n("bd90"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},9182:function(t,e,n){"use strict";n.r(e);var a=n("ae65"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},ae65:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("436c"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return n.e("components/uni-segmented-control").then(n.bind(null,"1e31"))},o={components:{uniSegmentedControl:r},data:function(){return{items:["待领取","已领取","待审核","已完成"],platformArray:["全部","大众点评","微信","QQ","抖音","知乎","微博","小红书"],typeArray:[],platform:0,type:0,current:0,rwlistArray:[],Tishi:"",num:"9",bottomtisi:""}},onLoad:function(){this.requestTask(this.current,this.type,5)},onShow:function(){},onPullDownRefresh:function(){this.requestTask(this.current,this.type,this.num),t.showLoading({title:"刷新中....",mask:!0})},onReachBottom:function(){var t=5;this.num=Number(this.num)+Number(t),this.requestTask(this.current,this.type,this.num)},methods:{optionPlatform:function(e){this.platform=e;var n=this;if(0===e)return n.typeArray=[],void n.requestTask(this.current,0,9);t.request({url:a.default.websiteUrl+"yiru/sdl/mertask/getbyplan",method:"POST",data:a.default.postdata({plan:e}),success:function(t){200===t.data.code&&(n.typeArray=t.data.data.baseinfo)}})},optionType:function(t){this.type=t,this.requestTask(this.current,t,this.num)},onClickItem:function(t){this.current!==t&&(this.current=t),this.requestTask(this.current,t,this.num)},requestTask:function(e,n,i){var r=this;t.request({url:a.default.websiteUrl+"yiru/sdl/mertask/tasklist",method:"POST",data:a.default.postdata({plan:r.platform,page:"1",num:i,MId:a.default.getstate().userid,cate:n,sate:e+1}),success:function(e){200==e.data.code?r.rwlistArray=e.data.data.tasklist:t.showToast({icon:"none",title:e.data.info}),e.data.data.tasklist.length>=r.num?r.bottomtisi="正在加载...":r.bottomtisi="没有更多数据了",0===e.data.data.tasklist.length?(r.Tishi="暂无活动",r.bottomtisi=""):r.Tishi="",t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常，请下拉刷新"})}})},openlq:function(e){t.navigateTo({url:"ToReceive?rwid="+e.currentTarget.dataset.rwid})},openqb:function(e){t.navigateTo({url:"Taskdetail?rwid="+e.currentTarget.dataset.rwid})},openDe:function(t){console.log(t)},openDone:function(e){t.navigateTo({url:"TaskDone?rwid="+e.currentTarget.dataset.rwid})},openindex:function(){t.redirectTo({url:"MerIndex"})},openInfo:function(){t.redirectTo({url:"MerInfo"})}}};e.default=o}).call(this,n("543d")["default"])},bd90:function(t,e,n){"use strict";n.r(e);var a=n("3ad7"),i=n("9182");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("8c9c");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports}},[["8f20","common/runtime","common/vendor"]]]);