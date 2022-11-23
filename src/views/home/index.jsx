import React, { memo, useEffect } from "react"
import { connect } from "react-redux"

import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLong from "./c-cpns/home-long"
import { HomeWrapper } from "./style"
import { fetchHomeData } from "@/store/modules/home.js"
import HomeSectionV3 from "./c-cpns/home-section-v3"
const Home = memo(props => {
	const {
		fetchData,
		goodPriceInfo,
		highScoreInfo,
		discountInfo,
		recommendInfo,
		longForInfo,
		plusInfo,
	} = props
	useEffect(() => {
		fetchData()
	}, [fetchData])

	return (
		<HomeWrapper>
			{/* 首页轮播 */}
			<HomeBanner />
			{/* 首页数据 */}
			<div className="main">
				{/* 推荐房源 */}
				<div className="recommend">
					{recommendInfo.dest_address?.length && (
						<HomeSectionV2 data={recommendInfo} />
					)}
				</div>

				{/* plus房源 */}
				<div className="plus">
					<HomeSectionV3 data={plusInfo} />
				</div>

				{/* 更想租 */}
				<div className="long-for">
					<HomeLong data={longForInfo} />
				</div>
				{/* 折扣 */}
				<div className="discount">
					{discountInfo?.dest_address?.length && (
						<HomeSectionV2 data={discountInfo} />
					)}
				</div>

				{/* 高性价比房源 */}
				<div className="good-price">
					<HomeSectionV1 data={goodPriceInfo}></HomeSectionV1>
				</div>

				{/* 高评分房源 */}
				<div className="high-score">
					<HomeSectionV1 data={highScoreInfo}></HomeSectionV1>
				</div>
			</div>
		</HomeWrapper>
	)
})

const mapStateToProps = (state, ownProps) => {
	return {
		goodPriceInfo: state.home.goodPrice,
		highScoreInfo: state.home.highScore,
		discountInfo: state.home.discount,
		recommendInfo: state.home.recommend,
		longForInfo: state.home.longFor,
		plusInfo: state.home.plusInfo,
	}
}

const mapDispatchToProps = dispatch => ({
	fetchData(payload) {
		dispatch(fetchHomeData())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
