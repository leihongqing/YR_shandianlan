<template>
	<view class="content">
		<view class="uni-password-but">
	    <form @submit="formSubmit">
			<input type="number" name='phone' v-model="phone" placeholder="请输入手机号" class="uni-phone" />
			<view class="uni-yzm-but">
				<input type="number" name='code' v-model="code" placeholder="请输入验证码" />
				<view class="" @click="openCodeDialog">{{tipsCode}}</view>
			</view>	
			<button type="primary" formType="submit">保存</button>
		</form>
		</view>
	</view>
</template>

<script>
	import helper from '../../common/helper.js';
	export default {
		data() {
			return {
				phone: '',
				tipsCode: "获取验证码",
				code: '',
				codes:'',
				codestr: '',
				timeNum: 60,
				clikType: false,
				timeOut: 60,
			};
		},
		methods:{
			// 获取验证码
			openCodeDialog: function() {
				var that = this
				if (that.phone == '') {
					uni.showToast({
						icon: 'none',
						title: '请输入你的手机号码'
					});
					return;
				} else if (!helper.checkmobile(that.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					});
					return;
				} else if (!that.clikType) {
					that.getTime();
					that.codestr = helper.MathRand(4);
					that.clikType = true;
					uni.request({
						url:helper.websiteUrl+'send/sendcode',
						method: 'GET',
						data: {
							loginMark: helper.getloginMark(),
							token: '',
							data: '{"phone": "' + that.phone + '"}'
						},
						success: res => {
							if (res.data.code == 200) {
								
								this.codes = res.data.info;
							} else {
								uni.showToast({
									icon: 'none',
									title: '获取验证码失败,请重试'
								});
							}
						},
						fail: () => {
							uni.hideLoading();
							uni.showToast({
								icon: 'none',
								title: '网络异常,请稍后重试'
							});
						}
					});
				}
			},
			// 验证码倒计时
			getTime() {
				var that = this
				var timer = setInterval(function() {
					that.timeNum--;
					if (that.timeNum <= 0) {
						that.tipsCode = "重新获取验证码";
						that.timeNum = that.timeOut;
						that.clikType = false;
						clearInterval(timer);
					} else {
						that.tipsCode = "重新发送" + that.timeNum + "秒";
					}
				}, 1000)
			},
			formSubmit: function(e) {
				if (!helper.checkmobile(this.phone)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码'
					});
					return;
				}
				if (this.code == "" || this.code != this.codes || this.codes !=
					this.code) {
					uni.showToast({
						icon: 'none',
						title: '验证码错误'
					});
					return;
				}
				this.userdata = e.detail.value
				uni.request({
					url:helper.websiteUrl+'usercenter/BindPhone' ,
					method: 'GET',
					data:helper.postdata({
						"userid": helper.getstate().userid,
						"phone": this.userdata.phone,
						"code": this.userdata.code,
					}),
					success: res => {
						if (res.data.code == 200) {
							uni.showToast({
								icon: 'none',
								title: res.data.info
							});
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.info
							});
						}
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络异常,请稍后重试'
						});
					}
				});
			}
		}
	}
</script> 

<style>
	.content{height: 1200upx;}
	.uni-password-but{margin: 0upx auto;width: 700upx;padding: 53upx 0;}
	.uni-password-but .uni-phone{width: 655upx;height: 80upx;background-color: #ffffff;border-radius: 40px;border: solid 1px #dbdbdc;padding-left: 45upx;font-size: 32upx;margin-bottom: 25upx;}
	.uni-password-but button{margin-top: 75upx;border-radius: 40upx;background-color: #ffca30;font-size: 32upx;color: #3C3C3C;letter-spacing: 2upx;}
    .uni-yzm-but{display: flex;}
	.uni-yzm-but view{height: 80upx;font-size: 30upx;color: #3c3c3c;background-color: #ffca30;border-radius: 40upx;line-height: 80upx;text-align: center;margin-left: 15upx;padding: 0 20upx;width: 260upx;}
	.uni-yzm-but input{width:420upx;height: 80upx;background-color: #ffffff;border-radius: 40px;border: solid 1px #dbdbdc;padding-left: 45upx;font-size: 32upx;margin-bottom: 25upx;}
</style>
