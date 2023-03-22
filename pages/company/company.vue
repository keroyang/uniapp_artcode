<template>
	<view class="exhibition-box">
		<view class="exhibition-pic">
			<image :src="baseInfo.showUrl" style="width: 100%;height: 400rpx;"></image>
			<view class="box">
				<view class="box-accouent" style="margin-top: 30rpx;">
					<!-- <view class="exhibitioni-title"
						style="width: 100%;color: #1296DB;;font-weight: bold;font-size: 48rpx;display: flex;" v-text="baseInfo.displayName">
					</view>
					<view class="tittle-name account-css " v-text="baseInfo.displayTip">
						中国国际工程机械展览会
					</view>
					<view class="time account-css " >
						举办时间：{{baseInfo.startTime}}
					</view>
					<view class="time-min account-css " >
						开闭馆时间：{{baseInfo.closeTime}}
					</view>
					<view class="organizer account-css">
						主办单位：
						<text class="organizer-name " v-text="baseInfo.companyName">
							
						</text>
					</view>
					<view class="address account-css">
						地址：
						<text class="address-name" v-text="baseInfo.displayAddress">
							
						</text>
					</view>
					<view class="exhibition-details account-css" style="color: #1296DB;font-size: 42rpx;">
						展会详情
					</view> -->
					<view class="text-accaount" style="font-size: 34rpx;line-height: 1.5;" v-html="baseInfo.displayContent">
						
					</view>
				</view>
			</view>


		</view>

	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				baseInfo:{
					
				}
			}
		},
		onLoad() {
			this.getCompany()
		},
		methods: {
			...mapActions(['companyList']),
			getCompany(){
				this.companyList({
					pageNum: 1,
					pageSize: 1,
				}).then(res=>{
					if(res&&res.rows){
						if(res.rows.length>0){
							this.baseInfo=res.rows[0];
							this.baseInfo.showUrl=this.$url+this.baseInfo.displayPicture;
						}
						console.log(this.baseInfo)
					}
				})
			},
			goUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.account-css {
		margin: 20rpx auto;
		font-size: 38rpx;
		font-weight: bold;
		display: flex;
	}

	.box {
		width: 90%;
		margin: auto;
		text-align: justify;
	}
</style>
