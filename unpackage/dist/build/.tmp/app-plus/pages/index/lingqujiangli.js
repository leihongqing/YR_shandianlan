(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/lingqujiangli"],{"02d8":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content"},[e("view",{staticClass:"uni-jl-list"},[e("view",{staticClass:"uni-jl-item"},[e("text",{staticClass:"uni-jl"},[t._v(t._s(t.Dailylogin.TaskName))]),e("button",{attrs:{type:"primary","data-Taskid":t.Dailylogin.ID,"data-States":t.Dailylogin.States,eventid:"2e5cbe8b-0"},on:{click:t.Lqbut}},[t._v(t._s(2==t.Dailylogin.States?"已领取":"领取"))])],1)]),e("view",{staticClass:"uni-jl-list uni-jl-list1"},t._l(t.AwardArraylist,function(a,i){return e("view",{key:i,staticClass:"uni-jl-item",attrs:{"data-Taskid":a.ID,"data-TaskName":a.TaskName,"data-States":a.States,eventid:"2e5cbe8b-1-"+i},on:{click:t.Lqbut}},[e("text",{staticClass:"uni-jl"},[t._v(t._s(a.TaskName))]),e("text",{staticClass:"uni-jl-sum"},[t._v("+ "+t._s(a.Reward)+"闪电币")]),e("uni-icon",{staticClass:"iconfont-2 icon-you",attrs:{mpcomid:"2e5cbe8b-0-"+i}})],1)}))])},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},"1c1d":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("e1ec"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{AwardArraylist:"",Dailylogin:"",chooseday:"",tishi:"领取"}},onLoad:function(){this.award()},methods:{award:function(){var a=this;this.Dailylogin.States;t.showLoading({title:"加载中....",mask:!0}),t.request({url:i.default.websiteUrl+"reward/getrewardlist",method:"GET",data:i.default.postdata({userid:i.default.getstate().userid}),success:function(e){200==e.data.code?(t.hideLoading(),a.Dailylogin=e.data.data.userinfo,a.AwardArraylist=e.data.data.baseinfo):(i.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info}))},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})},awards:function(a){var e=this;t.request({url:i.default.websiteUrl+"reward/savereward",method:"GET",data:i.default.postdata({userid:i.default.getstate().userid,taskid:a.currentTarget.dataset.taskid}),success:function(a){200==a.data.code?(t.showToast({icon:"none",title:"领取成功"}),e.Dailylogin.States="2"):(i.default.goout(a.data.info),t.showToast({icon:"none",title:a.data.info}))},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})},Lqbut:function(a){"0"==a.currentTarget.dataset.states?t.showToast({icon:"none",title:"请"+a.currentTarget.dataset.taskname}):"2"==a.currentTarget.dataset.states?(t.showToast({icon:"none",title:"已领取奖励"}),this.tishi="已领取"):"1"==a.currentTarget.dataset.states&&(this.awards(a),this.tishi="已领取")}}};a.default=s}).call(this,e("649d")["default"])},4446:function(t,a,e){"use strict";e.r(a);var i=e("1c1d"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},7579:function(t,a,e){"use strict";var i=e("f07a"),n=e.n(i);n.a},e02a:function(t,a,e){"use strict";e("f15c");var i=s(e("b0ce")),n=s(e("ec46"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},ec46:function(t,a,e){"use strict";e.r(a);var i=e("02d8"),n=e("4446");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("7579");var o=e("2877"),u=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);a["default"]=u.exports},f07a:function(t,a,e){}},[["e02a","common/runtime","common/vendor"]]]);