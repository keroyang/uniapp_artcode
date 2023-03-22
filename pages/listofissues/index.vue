<template>
	<view>
		<view class="tittle-box" v-for="(item,index) in lists" :key="index">
			<view class="pic-box">
				<view class="pic-text"> {{item.displayNo}}
				</view>
			</view>
			<view class="text-title" style="text-align: center;">
				{{item.displayContent}}
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
				lists:[]
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
			this.getList()
		},
		methods: {
			...mapActions(['userFeedbackList']),
			getList(){
				this.userFeedbackList({}).then(res=>{
					console.log(res)
					if(res&&res.rows){
						this.lists=res.rows;
					}
				})
			},
			goUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			home() {
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style>
	.tittle {
		font-size: 32rpx;
		color: #000;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		text-align: justify;

	}

	.text-title {
		width: 90%;
		margin: auto;
		color: #1296DB;
		font-size: 36rpx;
		font-weight: bold;
	}

	.tittle-box {
		width: 80%;
		border-radius: 20rpx;
		margin: 30rpx auto;
		padding: 30rpx;
		box-shadow: 0px 0px 10px 0px #d1d1d1;
	}

	.pic-box {
		background-color: #FFF;
		width: 90%;
		margin: 30rpx auto;
		display: flex;

	}

	.pic-text {
		color: #1296DB;
		display: flex;
		font-weight: bold;
		justify-content: left;
		align-items: center;
		width: 30%;
		margin-left: 30rpx;
	}
</style>
