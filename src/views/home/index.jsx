import React, { memo, useEffect } from "react"
import { connect } from "react-redux"
import Button from "@mui/material/Button"

import HomeBanner from "./c-cpns/home-banner"
import { HomeWrapper } from "./style"
import { fetchHomeData } from "@/store/modules/home.js"
import HomeList from "./c-cpns/home-list"
const Home = memo(props => {
	const { changeGoodPriceData, goodPrice } = props

	useEffect(() => {
		changeGoodPriceData()
	}, [changeGoodPriceData])

	return (
		<HomeWrapper>
			{/* 首页轮播 */}
			<HomeBanner />
			{/* 首页数据 */}
			<div className="main">
				{/* 高性价比房源 */}
				<HomeList data={goodPrice} />
			</div>
			<Button variant="contained">Link</Button>
		</HomeWrapper>
	)
})

const mapStateToProps = (state, ownProps) => {
	return {
		goodPrice: state.home.goodPrice,
	}
}

const mapDispatchToProps = dispatch => ({
	changeGoodPriceData(payload) {
		dispatch(fetchHomeData())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
