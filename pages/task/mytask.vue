<template>
	<view class="uni-swiper-box">
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#2FB6A7">
		</uni-segmented-control>
		<view class="content">
			<!-- 全部 -->
			<view v-show="current === 0">
				<!-- 任务领取 -->
				<view class="uni-rw-list" v-for="(item,index) in lqArray" :key="index">
					<view class="uni-rw-cont" @tap="openlq" :data-lqid="item.ID">
						<image :src="item.thumbnail" mode=""></image>
						<view class="uni-rw-text">
							<text class="Text_Nowrap">{{item.TaskName}}</text>
							<view class="uni-rw-sl">
								<view>{{item.PeopleMin}}-{{item.PeopleMax-1}}人</view>
								<view>{{item.Days}}天内</view>
								<view>还剩<text class="uni-sy">{{item.Surplus}}</text>份</view>
							</view>
						</view>
						<view class="uni-rw-time">
							<view>日期</view>
							<text>{{item.Createdate}}</text>
						</view>
					</view>
				</view>
				<!-- 任务领取结束-->
			</view>
			<!-- 分类1 -->
			<view v-show="current === 1">
				<view class="uni-rw-list" v-for="(item,index) in shArray" :key="index">
					<view class="uni-rw-cont" @tap="opensh" :data-shid="item.ID">
						<image :src="item.thumbnail" mode=""></image>
						<view class="uni-rw-text">
							<text class="Text_Nowrap">{{item.TaskName}}</text>
							<view class="uni-rw-sl">
								<view>{{item.PeopleMin}}-{{item.PeopleMax}}人</view>
								<view>{{item.Days}}天内</view>
								<view>还剩<text class="uni-sy">{{item.Surplus}}</text>份</view>
							</view>
						</view>
						<view class="uni-rw-time uni-rw-time2">
							<text>审核中...</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 分类2 -->
			<view v-show="current === 2">
				<view class="uni-rw-list" v-for="(item,index) in wcArray" :key="index">
					<view class="uni-rw-cont">
						<image :src="item.thumbnail" mode=""></image>
						<view class="uni-rw-text">
							<text class="Text_Nowrap">{{item.TaskName}}</text>
							<view class="uni-rw-sl">
								<view>{{item.PeopleMin}}-{{item.PeopleMax}}人</view>
								<view>{{item.Days}}天内</view>
								<view>还剩<text class="uni-sy">{{item.Surplus}}</text>份</view>
							</view>
						</view>
						<view class="uni-rw-time uni-rw-time3">
							<view>已完成</view>
						</view>
					</view>

				</view>
			</view>
			<!-- 分类3-->
			<view v-show="current === 3">
				<view class="uni-rw-list" v-for="(item,index) in sbArray" :key="index">
					<view class="uni-rw-cont">
						<image :src="item.thumbnail" mode=""></image>
						<view class="uni-rw-text">
							<text class="Text_Nowrap">{{item.TaskName}}</text>
							<view class="uni-rw-sl">
								<view>{{item.PeopleMin}}-{{item.PeopleMax}}人</view>
								<view>{{item.Days}}天内</view>
								<view>还剩<text class="uni-sy">{{item.Surplus}}</text>份</view>
							</view>
						</view>
						<view class="uni-rw-time">
							<text>{{item.Reply}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<text :class="{tisi:Tishi == '暂无任务'}">{{Tishi}}</text>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control.vue";
	import helper from '../../common/helper.js';
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: ['已领取', '待审核', '已完成', '已失败'], //分类列表菜单
				current: 0, //分类列表菜单索引从0开始
				State: '1', //初始任务状态值
				lqArray: '', //领取数组
				shArray: '', //审核数组
				wcArray: '', //完成数组
				sbArray: '', //失败数组
				num: '6', //默认显示9条任务数据
				Tishi: ''
			}
		},
		onLoad() {
			this.fllist();
		},
		onShow() {
			this.fllist()
		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.fllist(true);
			uni.showLoading({
				title: "刷新中....",
				mask: true
			})
		},
		//触底事件
		onReachBottom() {
			var tas1 = new String('5'); //触底加载5条数据
			this.num = Number(this.num) + Number(tas1);
			this.fllist();
		},
		methods: {
			// 获取已领取任务的id
			openlq(e) {
				uni.navigateTo({
					url: '../task/YilinquTask?lqid=' + e.currentTarget.dataset.lqid
				});
			},
			// 获取待审核任务的id
			opensh(e) {
				uni.navigateTo({
					url: '../task/shenheTask?shid=' + e.currentTarget.dataset.shid
				});
			},
			// 列表点击事件
			onClickItem(index) {
				if (this.current !== index) { //分类列表点击事件
					this.current = index;
				}
				if (this.current === 0) { //点击列表改变初始任务状态值
					this.State = "1"
					// this.fllist();
				} else if (this.current === 1) {
					this.State = "3"
					// this.fllist();

				} else if (this.current === 2) {
					this.State = "4"
					// this.fllist();

				} else if (this.current === 3) {
					this.State = "5"
					// this.fllist();

				}
			},
			// 请求任务列表
			fllist(isdown) {
				helper.islogin(true);
				uni.request({
					url: helper.websiteUrl + 'task/getmytasklist',
					method: 'GET',
					data: helper.postdata({
						"page": "1",
						"num": this.num,
						"State": this.State,
						"userid": helper.getstate().userid,
					}),
					success: res => {
						console.log(res)
						if (res.data.code == 200) {
							if (this.State == '1') { // 判断State的值
								//日期循环格式化  直接绑定不能显示
								res.data.data.baseinfo.forEach((e) => {
									e.Createdate = e.Createdate.substr(5, 5);
								});
								this.lqArray = res.data.data.baseinfo;
							} else if (this.State == '3') { // 判断State的值
								this.shArray = res.data.data.baseinfo;
							} else if (this.State == '4') { // 判断State的值
								this.wcArray = res.data.data.baseinfo;
							} else if (this.State == '5') { // 判断State的值
								this.sbArray = res.data.data.baseinfo;
							}
						} else {
							helper.goout(res.data.info);
							uni.showToast({
								icon: 'none',
								title: res.data.info
							});
						}
						if (res.data.data.baseinfo.length >= this.num) { //判断触底加载是否到底最后一条 否则提示没有更多数据了
							this.bottomtisi = '正在加载...'
						} else {
							this.bottomtisi = '没有更多数据了'
						}
						if (res.data.data.baseinfo.length === 0) { //判断分类数据是否为空 否则提示暂无任务
							this.Tishi = "暂无任务";
							this.bottomtisi = ''
						} else {
							this.Tishi = "";
						}
						uni.hideLoading();

					},
					fail: () => {
						uni.hideLoading();
						uni.showToast({
							icon: 'none',
							title: '网络异常,请下拉刷新重试！'
						});
					},
					complete: () => {
						if (isdown) {
							uni.stopPullDownRefresh(); //刷新停止
						}
					}
				});
			}
		}
	}
</script>

<style>
	/* 内容背景色 */
	.content {
		background: #f5f5f5;
	}

	/* 选项卡样式 */
	.uni-swiper-box {
		border-top: 2upx solid #F5F5F5;
	}

	.segmented-control {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		font-size: 26upx;
		border-radius: 10upx;
		box-sizing: border-box;
		margin: 0 auto;
		overflow: hidden;
		height: 135upx;

	}

	.segmented-control.button {
		border: 2upx soli
	}

	.segmented-control.text {
		border: 0;
		border-radius: 0upx;
	}

	.segmented-control-item {
		flex: 1;
		text-align: center;
		line-height: 190upx;
		box-sizing: border-box;
		position: relative;
	}


	.segmented-control-item.text {
		border-left: 0;
	}

	.segmented-control-item:first-child {
		border-left-width: 0;
	}

	/* 分类列表样式 */
	/* 任务列表 */
	.uni-rw-cont:first-child {
		margin-top: 15upx;
	}

	.segmented-control-item:nth-child(1) {
		background: url(http://lx97.cn/static/linquicon.png) no-repeat center;
		background-size: 45upx 45upx;
		background-position-y: 25upx;
	}

	.segmented-control-item:nth-child(2) {
		background: url(http://lx97.cn/static/shenheicon.png) no-repeat center;
		background-size: 45upx 45upx;
		background-position-y: 25upx;
	}

	.segmented-control-item:nth-child(3) {
		background: url(http://lx97.cn/static/wcicon.png) no-repeat center;
		background-size: 45upx 45upx;
		background-position-y: 25upx;
	}

	.segmented-control-item:nth-child(4) {
		background: url(http://lx97.cn/static/sbicon.png) no-repeat center;
		background-size: 45upx 45upx;
		background-position-y: 25upx;
	}

	.uni-rw-cont {
		position: relative;
	}

	.uni-rw-cont:first-child {
		margin-top: 15upx;
	}

	.uni-rw-text .Text_Nowrap {
		padding-bottom: 5upx;
	}

	.uni-rw-time {
		text-align: center;
		padding-left: 5upx;
	}

	.uni-rw-time2 {
		padding-left: 0upx !important;
	}

	.uni-rw-time3 {
		color: #b6b6b6;
	}

	.uni-rw-time view {
		font-size: 26upx;
	}

	.uni-rw-time text {
		font-size: 26upx;
		color: #2FB6A7;
	}

	.uni-rw-text .Text_Nowrap {
		width: 380upx;
		display: inline-block;
		align-items: flex-end;
	}

	.uni-rw-text:after {
		content: "";
		width: 1upx;
		height: 70upx;
		position: absolute;
		top: 44upx;
		right: 168upx;
		background: #e6e6e6;
	}
</style>
