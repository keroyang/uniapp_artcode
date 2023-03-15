<template>
	<view class="content">
		<view class="text-area">
			<image src="../../static/logo.png"
				style="width: 200rpx;height: 200rpx;border-radius: 50%;border: #FFF 2px solid;"></image>
		</view>
		<view class="account">
			<view style="width: 30%;color: #1296DB;font-weight: bold;color: #FFF;display: flex;
		justify-content: right;
		align-items: center;">
				User：
			</view>
			<u-input placeholder="请填写账户" style="width: 50%;background-color: #FFF;"></u-input>
		</view>
		<view class="account cssico " style="margin-top: 50rpx;">
			<view style="width:30%;color: #1296DB;font-weight: bold;color: #FFF;display: flex;
		justify-content: right;
		align-items: center;">
				password：
			</view>
			<u-input placeholder="请填写密码" password="password" style="width: 50%;background-color: #FFF; "></u-input>
		</view>
		<view>
			<view style="width: 100%;margin-top: 50rpx;">
				<u-radio-group v-model="value" @change="radioGroupChange">
					<u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.name"
						active-color="#1296DB" :disabled="item.disabled" style="color: #FFF;margin: auto;">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view style="width: 80%;margin:30rpx auto" @click="goUrl('/pages/index/index')">
				<u-button type="primary">ENROLL</u-button>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: 'condition',
						disabled: false
					},

				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				value: 'orange',
			};
		},

		onLoad() {

		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			}
		},
		goUrl(url) {
			uni.navigateTo({
				url: url
			})
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
