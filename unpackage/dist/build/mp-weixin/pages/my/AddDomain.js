(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/AddDomain"],{"50f9":function(t,e,a){"use strict";a.r(e);var n=a("53de"),i=a("e518");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("ba8c");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=u.exports},"53de":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"5a63":function(t,e,a){},"8b9a":function(t,e,a){"use strict";(function(t){a("557f"),a("921b");n(a("66fd"));var e=n(a("50f9"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},ba8c:function(t,e,a){"use strict";var n=a("5a63"),i=a.n(n);i.a},e474:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("436c"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{PlanArray:"",UserNames:"",ptid:"",choosedaylist:[],index:0,Plans:"",userdata:"",img:"",imgs:[],grades:"",usernames_box:"",imgalist:["http://lx97.cn/static/mt.png","http://lx97.cn/static/dz.png"],imgalists:[],state:""}},onLoad:function(e){var a=this;this.ptid=e.ptid,t.request({url:n.default.websiteUrl+"/user/getplantype",method:"GET",data:{},success:function(t){200==t.data.code&&(a.choosedaylist=t.data.data.plans)}})},methods:{previewImage:function(t){this.imgalists.splice(0,this.imgalists.length),this.imgalists.push(t.target.dataset.src),wx.previewImage({urls:this.imgalists})},openimg:function(){wx.previewImage({urls:this.imgs})},setData:function(t){var e=this;Object.keys(t).forEach(function(a){e.$set(e.$data,a,t[a])})},getImage:function(){var e=this.choosedaylist,a=this.index,i=this;t.chooseImage({success:function(s){i.setData({img:s.tempFilePaths[0]}),t.showLoading({title:"识别中"}),t.uploadFile({url:n.default.websiteUrl+"/annexes/uploadimgbyplan",filePath:s.tempFilePaths[0],fileType:"uploadFile",name:"upload",formData:n.default.postdata({plantype:e[a]}),success:function(e){var a=JSON.parse(e.data);if(200==a.code){var n="https://cszx.yiruit.net",s=n+a.data.path;i.img=s,i.imgs.push(s),i.grades=a.data.baseinfo.grade;var o=a.data.baseinfo.username;i.UserNames=o.replace(/\s*/g,""),t.showToast({icon:"none",title:"识别成功！"}),""==i.UserNames||"0"==i.grades?i.state="1":i.state="2"}else t.showToast({icon:"none",title:a.info});t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"识别失败"})}})}})},bindPickerChange:function(t){this.index=t.target.value},formSubmit:function(e){var a=this,i=e.detail.value.Plans;""==this.img?t.showToast({icon:"none",title:"请上传截图！",duration:2500}):""==this.UserNames?t.showToast({icon:"none",title:"请填写用户名！",duration:2500}):(t.showLoading({title:"保存中....",mask:!0}),t.request({url:n.default.websiteUrl+"plan/planinfo",method:"GET",data:n.default.postdata({type:1,userid:n.default.getstate().userid,Plans:i,username:this.UserNames,pics:this.img,grade:this.grades,state:this.state}),success:function(e){200==e.data.code?"1"==a.state?t.showModal({title:"提示",content:"请等待客服人员审核",showCancel:!1,confirmText:"确定",success:function(e){e.confirm&&t.navigateBack({delta:1})}}):t.showModal({title:"提示",content:"保存成功",showCancel:!1,confirmText:"确定",success:function(e){e.confirm&&t.navigateBack({delta:1})}}):t.showModal({title:"提示",content:e.data.info,showCancel:!1,confirmText:"关闭"}),t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请稍后重试"})}}))}}};e.default=s}).call(this,a("543d")["default"])},e518:function(t,e,a){"use strict";a.r(e);var n=a("e474"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a}},[["8b9a","common/runtime","common/vendor"]]]);