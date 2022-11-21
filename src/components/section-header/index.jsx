import React, { memo } from "react"
import { SectionHeaderWrapper } from "./style"

const SectionHeader = memo(props => {
	const { subTitle, title } = props
	return (
		<SectionHeaderWrapper>
			<h2 className="title">{title}</h2>
			{subTitle && <div className="sub-title">{subTitle}</div>}
		</SectionHeaderWrapper>
	)
})

export default SectionHeader
