<template>
	<view class="account-box">
		<view class="account-box-pic">
			<u-swiper :list="banners" height="200"></u-swiper>
		</view>
		<view class="tittle-box">
			<view class="pic-box">
				<view class="pic">
					<image src="../../static/bglogo.png" mode="aspectFit" style="width: 150rpx;height: 150rpx;"></image>
				</view>
				<view class="pic-text">
					UserID : {{userInfo.displayNo}}
				</view>
				<!-- <view style="width: 35%;margin: auto;">
					<view style="display: flex;justify-content: right;align-items: center;"
						@click="goUrl('/pages/index/index')">
						<u-icon name='arrow-right' size="16" color="#000"></u-icon>
					</view>
				</view> -->
			</view>
		</view>
		<view class="account-center">
			<view class="scan">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 35rpx;border: none;height: 150rpx;">
					<view style="width: 50%;">
						Scan the ArtCode
					</view>
					<view class="icon-pic">
						<u-icon name="scan" color="#FFF" size="44"></u-icon>
					</view>
				</u-button>
			</view>
			<view class="scan" @click="goUrl('/pages/company/company')">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 35rpx;height: 150rpx;;border: none;">
					<view style="width: 50%;">
						Exhibition Introduction
					</view>
					<view class="icon-pic">
						<u-icon name="photo" color="#FFF" size="44"></u-icon>
					</view>
				</u-button>
			</view>
			<view class="scan" @click="goUrl('/pages/questions/index')">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 35rpx;border: none;height: 150rpx;">
					<view style="width: 50%;">
						Quiz
					</view>
					<view class="icon-pic">
						<u-icon name="grid" color="#FFF" size="44"></u-icon>
					</view>
				</u-button>
			</view>
			<view class="scan" @click="goLogOut()">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 35rpx;border: none;height: 150rpx;">
					<view style="width: 50%;">
						Log out
					</view>
					<!-- <view class="icon-pic">
						<u-icon name="grid" color="#FFF" size="58"></u-icon>
					</view> -->
				</u-button>
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
				userInfo: {

				},
				banners: []
			}
		},
		onLoad() {
			let _this = this;
			uni.getStorage({
				key: 'token',
				success(res) {
					console.log(res)
					if (res.data) {
						_this.userInfo = res.data
					}
				}
			})
			this.getBanner()
		},
		methods: {
			...mapActions(['bannerList']),
			getBanner() {
				this.bannerList({}).then(res => {
					console.log(res)
					this.banners = []
					if (res) {
						let tmpList = res;
						for (let item of tmpList) {
							this.banners.push(this.$url + item.displayPicture)
						}
					}
				})
			},
			goUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			goLogOut(){
				uni.removeStorage({
					key:'token'
				})
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
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
