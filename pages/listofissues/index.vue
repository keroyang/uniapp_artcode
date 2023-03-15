<template>
	<view class="tittle-box">
		<view class="pic-box">
			<view class="pic">
				<image src="/static/logo.png" style="width: 100rpx;height: 100rpx;border-radius: 50%;">
				</image>
			</view>
			<view class="pic-text">
				UserID : 098012
			</view>
		</view>
		<view class="text-title">
			艺术品的构造方式
			<view class="tittle">
				<text>
					问题清单是解决问题的前提。没有一个清晰的问题清单，一个组织就不可能清晰地知道自己要解决什么问题，如果在解决问题，那也是盲目的、应付式的。
					列出问题清单的方法是让大家找问题，因此问题清单应来自组织全体成员和社会。通用电气和IBM的问题清单来自全体员工，甚至包括客户。一个组织的问题清单来源越广泛，对问题的认识才可能越全面。
					建立问题清单只是链式学习和点式管理的一个环节。列出问题清单是为了研讨问题。有效的做法是把问题清单交给员工，让他们围绕焦点、难点问题，自由自愿地成立各种研讨小组，按照平等、民主、自由的方式研究问题，找到解决问题的办法。
					“问题树”概念在问题清单中十分中高，找到症结点问题之后，重列的问题清单实际是一个“问题树”：一般的问题是枝叶，焦点问题是树干，而症结点是树根。一个组织有了这棵“问题树”，才是不但心中有数，而且胸有成竹，才可以深入解决问题。
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
