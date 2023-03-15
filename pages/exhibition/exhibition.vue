<template>
	<view class="exhibition-box">
		<view class="exhibition-pic">
			<image src="../../static/background.png" style="width: 100%;height: 300rpx;"></image>
			<view class="box">
				<view class="box-accouent" style="margin-top: 30rpx;">
					<view class="exhibitioni-title"
						style="width: 100%;color: #1296DB;;font-weight: bold;font-size: 48rpx;display: flex;">
						上海宝马展 Bauma China
					</view>
					<view class="tittle-name account-css ">
						中国国际工程机械展览会
					</view>
					<view class="time account-css ">
						举办时间：2024/11/23--11/29
					</view>
					<view class="time-min account-css ">
						开闭馆时间：09：00---18：00
					</view>
					<view class="organizer account-css">
						主办单位：
						<text class="organizer-name ">
							Bauma China组委会
						</text>
					</view>
					<view class="address account-css">
						地址：
						<text class="address-name">
							中国-上海-上海新国际博览会
						</text>
					</view>
					<view class="exhibition-details account-css" style="color: #1296DB;font-size: 42rpx;">
						展会详情
					</view>
					<view class="text-accaount">
						上海宝马展-中国国际工程机械展览会( Bauma
						China)是全球工程机械企业竞技的舞台。展会全方位展示了施工机械、矿用原材料提取与加工设备、建材机械、配套件及服务等领域的创新产品与技术硕果，见证了工程机械行业发展中的智慧传承。自2002年植根中国，bauma
						CHINA与中国工程机械行业一同历经沉浮，展会超乎意料的成功预示着中国工程机械行业发展经过几年筑底后终于迈入新的发展元年。(本文内容版权归属聚展所有，未经同意，禁止转发)
						上海宝马展-中国国际工程机械展Bauma
						China以“智造愿景，纵横大观"为主题，紧扣行业发展脉搏，从产品智能化、制造智能化、服务智能化和管理智能化等不同视角，诠释了中国工程机械行业的新起点。从现场展出的产品可以看出，智慧与环保成为主旋律，新能源与无人设备成为未来工程机械行业发展的新趋势。多款大吨位无人驾驶压路机、无人挖掘机、智能吊装机器人、智能摊铺机惊艳亮相。观众通过VR眼镜远程操控，即可指挥远在几千里外的设备作业。不计其数的节能、节油、高效率产品涌现展会现场，让观众大饱眼福，充分满足了不同细分市场客户的需求。
						上海宝马展-中国国际工程机械展Bauma
						China现场熙攘的人群，高耸入天的重型设备，玲琅满目的高端配件，呈现了中国工程机械行业发展的新契机。为中国工程机械发展添上一笔浓墨重彩，用信心与坚守、科技与智慧为中国制造注入新的生命力与创造力。知名参展企业包括徐工集团、三一集团、中联重科、山东临工、浙江鼎力、南方路机、铁建重工、国机重工、山河智能、新宏昌、雷沃重工、山推等携众多首发新品、拳头产品争相亮剑，在国际舞台展示了工程机械行业的中国力量。同时德国、意大利、西班牙、土耳其、美国、韩国、欧洲联合团等在内的8大国际展团悉数亮相。卡特彼勒、利勃海尔、沃尔沃、维特根、小松、宝峨、斗山、神钢建机、现代、法亚集团、安百拓等国际巨譬也齐聚亮相，这印证了上海宝马展-中国国际工程机械展Bauma
						China的国际化水准，也表明中国市场备受全球瞩目。
					</view>
				</view>
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
		}
	}
</script>

<style>
	.account-css {
		margin: 20rpx auto;
		font-size: 38rpx;
		font-weight: bold;
		display: flex;
	}

	.box {
		width: 90%;
		margin: auto;
		text-align: justify;
	}
</style>
