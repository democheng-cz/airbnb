import React, { memo } from "react"
import { SectionFooterWrapper } from "./style"

import IconRightArrow from "@/assets/svg/icon-right-arrow"

const SectionFooter = memo(props => {
	const { title = "查看更多", color = "#222" } = props

	return (
		<SectionFooterWrapper style={{ color: color }}>
			<span>{title}</span>
			<IconRightArrow />
		</SectionFooterWrapper>
	)
})
export default SectionFooter
