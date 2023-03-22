<template>
	<view class="question-box">

		<view class="question">
			What’s your favourite Music Instrument and which piece do you like most?
		</view>

		<view class="question">
			Please enter a question:
			<view class="input" style="margin-top: 50rpx;color: #1296DB;">
				<u-input placeholder="please input answer" size="24rpx" v-model="value" type="text"
					style="height: 200rpx;">
				</u-input>
			</view>
			<view class="scan">
				<u-button type="primary"
					style="background-color:#1296DB;font-weight: bold;font-size: 32rpx;;border: none;"  @click="add()">
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
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				userId: 0,
				displayNo:""
			}
		},
		onLoad() {
			let _this = this;
			uni.getStorage({
				key: 'token',
				success(res) {
					console.log(res)
					if (res.data) {
						_this.userId = res.data.id;
						_this.displayNo=res.data.displayNo
					}
				}
			})
		},
		methods: {
			...mapActions(['userFeedbackAdd']),
			add() {
				if(this.value==""){
					uni.showToast({
						icon:'none',
						title:'please input answer'
					})
				}else{
					let data={
						displayNo:this.displayNo,
						userId:this.userId,
						displayContent:this.value
					}
					console.log(data)
					uni.showLoading({
						title:'submit...'
					})
					this.userFeedbackAdd(data).then(res=>{
						console.log(res)
						uni.hideLoading()
						if(res.code==200){
							uni.navigateTo({
								url:'/pages/listofissues/index'
							})
						}else{
							uni.showToast({
								icon:'none',
								title:'submit fail'
							})
						}
					}).catch(err=>{
						uni.showToast({
							icon:'none',
							title:'submit fail'
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
