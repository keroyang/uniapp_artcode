<template>
	<view class="content">
		<view class="text-area">
			<image src="../../static/logo.png" style="width: 200rpx;height: 200rpx;border-radius: 50%;"></image>
		</view>
		<view class="account">
			<view style="width: 30%;color: #1296DB;font-weight: bold;display: flex;
		justify-content: right;
		align-items: center;">
				account：
			</view>
			<u-input placeholder="please input account" v-model="info.displayAccount"
				style="width: 50%;background-color: #FFF;"></u-input>
		</view>
		<view class="account cssico " style="margin-top: 50rpx;">
			<view style="width:30%;color: #1296DB;font-weight: bold;display: flex;
		justify-content: right;
		align-items: center;">
				password：
			</view>
			<u-input placeholder="please input password" v-model="info.displayPassword" password="password"
				style="width: 50%;background-color: #FFF; "></u-input>
		</view>
		<view class="account cssico " style="margin-top: 50rpx;">
			<view style="width:30%;color: #1296DB;font-weight: bold;display: flex;
		justify-content: right;
		align-items: center;">
				comfirm：
			</view>
			<u-input placeholder="please again input password" v-model="info.comfirmValue" password="password"
				style="width: 50%;background-color: #FFF; "></u-input>
		</view>
		<view
			style="align-items: center;   display: flex;flex-direction: row-reverse;color: #FFF;width: 88vw;margin-top: 30rpx;font-size: 34rpx;">
			<view style="background-color: #FFF;padding: 10rpx 15rpx;color: #1296DB;border-radius: 15rpx;"
				@click="goUrl('/pages/index/index')">go login</view>
		</view>
		<view style="width: 80%;margin:30rpx auto">
			<u-button type="primary" @click="goRegister">register</u-button>
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
				info: {
					displayAccount: "",
					displayPassword: "",
					comfirmValue: ""
				}
			};
		},

		onLoad() {

		},
		methods: {
			...mapActions(['userRegister']),
			goRegister() {
				if (this.info.displayAccount == "" || this.info.displayPassword == "") {
					uni.showToast({
						icon: 'none',
						title: 'please input account or password'
					})

				} else if (!this.info.displayAccount.match(/^[a-zA-Z0-9_]{1,}$/)) {
					uni.showToast({
						icon: 'none',
						title: ' account  letters and numbers are allowed '
					})
				} else if (this.info.displayPassword.length < 6) {
					uni.showToast({
						icon: 'none',
						title: ' password length greater than 6 '
					})
				} else if (!this.info.displayPassword.match(/^[a-zA-Z0-9_]{1,}$/)) {
					uni.showToast({
						icon: 'none',
						title: ' password  letters and numbers are allowed '
					})
				} else if (this.info.displayPassword != this.info.comfirmValue) {
					uni.showToast({
						icon: 'none',
						title: ' password inconsistency '
					})
				} else {
					uni.showLoading({
						title: 'submit...',
						mask: true
					})

					this.userRegister(this.info).then(res => {
						console.log(res)
						uni.hideLoading();
						if (res.code == 200) {
							uni.showToast({
								icon: 'none',
								title: 'register suucess'
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: ' register fail '
							})
						}
					}).catch(err => {
						uni.hideLoading();
						uni.showToast({
							icon: 'none',
							title: ' register fail '
						})
					})
				}
			},
			goUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
		},

	}
</script>

<style>
	.account {
		margin: auto;
		width: 80%;
		display: flex;
		justify-content: right;
		align-items: center;
	}

	.text-area {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 200rpx 0rpx;
	}

	.content {
		/* background-image: url('@/static/bj.png'); */
		width: 100%;
		position: fixed;
		height: 100%;
		background-size: 100% 100%;
		background-attachment: fixed;
	}
</style>
