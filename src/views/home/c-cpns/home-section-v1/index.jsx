import React, { memo } from "react"
import PropTypes from "prop-types"

import { HomeSectionV1Wrapper } from "./style"
import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer"
import HomeList from "../home-list"
const HomeSectionV1 = memo(props => {
	const { data } = props

	return (
		<HomeSectionV1Wrapper>
			<SectionHeader title={data?.title} subTitle={data?.subtitle} />
			<HomeList data={data.list} />
			<SectionFooter />
		</HomeSectionV1Wrapper>
	)
})

HomeSectionV1.propTypes = {
	data: PropTypes.object,
}

export default HomeSectionV1
