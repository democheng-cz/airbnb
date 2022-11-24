import React, { memo } from "react"
import { SectionFooterWrapper } from "./style"

import IconRightArrow from "@/assets/svg/icon-right-arrow"
import { useNavigate } from "react-router-dom"

const SectionFooter = memo(props => {
	const { title = "查看更多", color = "#222" } = props

	const navigate = useNavigate()

	const clickHandle = () => {
		navigate("/entire")
	}

	return (
		<SectionFooterWrapper style={{ color: color }} onClick={clickHandle}>
			<span>{title}</span>
			<IconRightArrow />
		</SectionFooterWrapper>
	)
})
export default SectionFooter
