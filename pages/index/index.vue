<template>
	<view class="content">
		<view class="text-area">
			<image src="../../static/logo.png" style="width: 200rpx;height: 200rpx;border-radius: 50%;"></image>
		</view>
		<view class="account">
			<view style="width: 30%;color: #1296DB;font-weight: bold;color: #FFF;display: flex;
		justify-content: right;
		align-items: center;">
				account：
			</view>
			<u-input placeholder="please input account" v-model="info.account" style="width: 50%;background-color: #FFF;">
			</u-input>
		</view>
		<view class="account cssico " style="margin-top: 50rpx;">
			<view style="width:30%;color: #1296DB;font-weight: bold;color: #FFF;display: flex;justify-content: right;align-items: center;">
				password：
			</view>
			<u-input placeholder="please input password" v-model="info.password" password="password"
				style="width: 50%;background-color: #FFF; "></u-input>
		</view>
		<view>
			<view style="width: 80%;margin:50rpx auto" >
				<u-button type="primary" @click="goLogin()">Login</u-button>
			</view>
			<view style="width: 80%;margin:30rpx auto" @click="goUrl('/pages/enroll/enroll')">
				<u-button type="primary">Register</u-button>
			</view>
		</view>
		
		
		<!-- @click="goUrl('/pages/home/home')" -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					account: "",
					password: ""
				}
			}
		},
		onLoad() {

		},
		methods: {

			goLogin() {
				if(this.info.account==""||this.info.password==""){
					uni.showToast({
						icon:'none',
						title:'please input account or password'
					})
					
				}else{
					
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
		padding: 300rpx 0rpx;
	}

	.content {
		background-image: url('@/static/bj.png');
		width: 100%;
		position: fixed;
		height: 100%;
		background-size: 100% 100%;
		background-attachment: fixed;
	}
</style>
