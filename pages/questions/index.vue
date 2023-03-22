<template>
	<view class="question-box">
		
		<view class="question">
			What’s your favourite Music Instrument and which piece do you like most?
		</view>
		
		<view class="question">
			Please enter a question:
			<view class="input" style="margin-top: 50rpx;color: #1296DB;">
				<u-input placeholder="Question" size="24rpx" v-model="value" type="text" style="height: 80rpx;">
				</u-input>
			</view>
			<view class="scan">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 32rpx;;border: none;">
					<view style="width: 30%;">
						SUBMIT
					</view>
					<u-icon name="checkbox-mark" color="#FFF" size="32"></u-icon>
				</u-button>
			</view>
			<view class="scan" @click="goUrl('/pages/listofissues/index')">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 32rpx;;border: none;">
					<view style="width: 30%;">
						SEE MORE
					</view>
					<u-icon name="search" color="#FFF" size="32"></u-icon>
				</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
			}
		},
		onLoad() {

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
	.scan {
		margin-top: 50rpx;
	}

	.question {
		font-weight: bold;
		color: #1296DB;
		font-size: 42rpx;
		width: 80%;
		margin: auto;
		padding: 50rpx;
	}
</style>
