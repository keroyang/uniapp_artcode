<template>
	<view class="content">
		<view class="text-area">
			<image src="../../static/bglogo.png" mode="aspectFit" style="width: 300rpx;height: 300rpx;"></image>
		</view>
		<view class="account">
			<view style="width: 30%;color: #1296DB;font-weight: bold;display: flex;
		justify-content: right;
		align-items: center;">
				account：
			</view>
			<u-input placeholder="please input account" v-model="info.displayAccount"
				style="width: 50%;background-color: #FFF;">
			</u-input>
		</view>
		<view class="account cssico " style="margin-top: 50rpx;">
			<view
				style="width:30%;color: #1296DB;font-weight: bold;display: flex;justify-content: right;align-items: center;">
				password：
			</view>
			<u-input placeholder="please input password" v-model="info.displayPassword" password="password"
				style="width: 50%;background-color: #FFF; "></u-input>
		</view>
		<view>
			<view style="width: 80%;margin:50rpx auto">
				<u-button type="primary" @click="goLogin()">sign in</u-button>
			</view>
			<view style="width: 80%;margin:30rpx auto" @click="goUrl('/pages/enroll/enroll')">
				<u-button type="primary">Register</u-button>
			</view>
		</view>


		<!-- @click="goUrl('/pages/home/home')" -->
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
					displayAccount: "a123456",
					displayPassword: "1234567"
				}
			}
		},
		onLoad() {

		},
		methods: {
			...mapActions(['userList']),
			goLogin() {
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
				} else if (!this.info.displayPassword.match(/^[a-zA-Z0-9_]{1,}$/)) {
					uni.showToast({
						icon: 'none',
						title: ' password  letters and numbers are allowed '
					})
				} else if (this.info.displayPassword.length < 6) {
					uni.showToast({
						icon: 'none',
						title: ' password length greater than 6 '
					})
				} else {
					this.userList(this.info).then(res=>{
						console.log(res)
						if(res&&res.length==0){
							uni.showToast({
								icon: 'none',
								title: 'account or password error '
							})
						}else{
							let userInfo=res[0];
							uni.setStorage({
								key:'token',
								data:userInfo,
								success() {
									uni.navigateTo({
										url:'/pages/home/home'
									})
								},
								fail() {
									uni.showToast({
										icon: 'none',
										title: 'login fail '
									})
								}
							})
						}
					}).catch(err=>{
						uni.showToast({
							icon: 'none',
							title: 'login fail '
						})
					})
				}
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
	.account {
		margin: 0 auto;
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
