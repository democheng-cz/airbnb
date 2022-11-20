import React, { memo, useEffect } from "react"

import { connect } from "react-redux"
import { changeBanners } from "@/store/module/Home.js"
const Home = memo(props => {
	const { changeBanner } = props
	useEffect(() => {
		changeBanner([{ name: "凤凰大酒店" }])
	})

	return <div>Home</div>
})

const mapStateToProps = (state, ownProps) => {
	return {
		homeBanners: state.home.homeBanners,
	}
}

const mapDispatchToProps = dispatch => ({
	changeBanner(payload) {
		dispatch(changeBanners(payload))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
