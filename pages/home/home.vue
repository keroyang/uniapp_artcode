<template>
	<view class="account-box">
		<view class="account-box-pic">
			<image src="../../static/background.png" style="width: 100%;"></image>
		</view>
		<view class="tittle-box">
			<view class="pic-box">
				<view class="pic">
					<image src="../../static/logo.png" style="width: 100rpx;height: 100rpx;border-radius: 50%;"></image>
				</view>
				<view class="pic-text">
					UserID : {{userInfo.displayNo}}
				</view>
				<view style="width: 35%;margin: auto;">
					<view style="display: flex;justify-content: right;align-items: center;"
						@click="goUrl('/pages/index/index')">
						<u-icon name='arrow-right' size="16" color="#000"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="account-center">
			<view class="scan">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 58rpx;border: none;height: 300rpx;">
					<view style="width: 50%;">
						扫描艺术码
					</view>
					<view class="icon-pic">
						<u-icon name="scan" color="#FFF" size="58"></u-icon>
					</view>
				</u-button>
			</view>
			<view class="scan" @click="goUrl('/pages/questions/index')">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 58rpx;border: none;height: 300rpx;">
					<view style="width: 50%;">
						问题答疑
					</view>
					<view class="icon-pic">
						<u-icon name="grid" color="#FFF" size="58"></u-icon>
					</view>
				</u-button>
			</view>
			<view class="scan" @click="goUrl('/pages/exhibition/exhibition')">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 58rpx;height: 300rpx;;border: none;">
					<view style="width: 50%;">
						展会介绍
					</view>
					<view class="icon-pic">
						<u-icon name="photo" color="#FFF" size="58"></u-icon>
					</view>
				</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					
				}
			}
		},
		onLoad() {
			let _this=this;
			uni.getStorage({
				key:'token',
				success(res) {
					console.log(res)
					if(res.data){
						_this.userInfo=res.data
					}
				}
			})
		},
		methods: {
			goUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
		}
	}
</script>

<style>
	.exhibition-pic {
		width: 100%;
		margin: auto;
		display: flex;
	}


	.exhibition {
		color: #1296DB;
		font-size: 1.2rem;
	}

	.exhibition-box {
		display: flex;
		justify-content: center;
	}

	.account-center {
		width: 100%;
		border-radius: 20rpx;
		margin: 100rpx auto;

	}

	.scan {
		width: 90%;
		display: flex;
		margin: 50rpx auto;
		border-radius: 20rpx;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 10px 0px #d1d1d1;
	}

	.account-box-pic {
		width: 100%;

	}

	.pic-box {
		background-color: #FFF;
		box-shadow: 0px 0px 10px 0px #d1d1d1;
	}

	.pic-text {
		color: #1296DB;
		display: flex;
		justify-content: left;
		align-items: center;
		width: 30%;
		margin-left: 30rpx;
	}

	.pic-box {
		width: 80%;
		margin: 30rpx auto;
		border-radius: 20rpx;
		padding: 30rpx;
		display: flex;
		justify-content: left;
		align-items: center;
	}
</style>
