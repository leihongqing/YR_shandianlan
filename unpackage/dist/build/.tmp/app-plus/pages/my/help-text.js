(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/help-text"],{"46fe":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("8085"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{PlanArray:""}},onLoad:function(){this.Domaininfo()},onShow:function(){this.Domaininfo()},methods:{Domaininfo:function(){var n=this;t.showLoading({title:"加载中....",mask:!0}),t.request({url:a.default.websiteUrl+"help/getheples",method:"GET",data:a.default.postdata({}),success:function(e){200==e.data.code?(t.hideLoading(),n.PlanArray=e.data.data.baseinfo):(a.default.goout(e.data.info),t.showToast({icon:"none",title:e.data.info}))},fail:function(){t.showToast({icon:"none",title:"网络异常,请稍后重试"})}})},opendomain:function(n){t.navigateTo({url:"helptext-content?bzid="+n.currentTarget.dataset.bzid})}}};n.default=i}).call(this,e("649d")["default"])},6988:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("view",{staticClass:"uni-item"},t._l(t.PlanArray,function(n,a){return e("view",{key:a,staticClass:"uni-domain-list",attrs:{"data-bzid":n.ID,eventid:"4abb2eec-0-"+a},on:{click:t.opendomain}},[e("text",{staticClass:"Text_Nowrap"},[t._v(t._s(n.Title))])])}))])},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"6f68":function(t,n,e){"use strict";e("047b");var a=i(e("b0ce")),o=i(e("746f"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"746f":function(t,n,e){"use strict";e.r(n);var a=e("6988"),o=e("b535");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("b632");var u=e("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="help-text.vue",n["default"]=r.exports},b535:function(t,n,e){"use strict";e.r(n);var a=e("46fe"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},b632:function(t,n,e){"use strict";var a=e("e5e5"),o=e.n(a);o.a},e5e5:function(t,n,e){}},[["6f68","common/runtime","common/vendor"]]]);