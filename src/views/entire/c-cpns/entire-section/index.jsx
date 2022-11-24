import React, { memo } from "react"
import SectionHeader from "@/components/section-header"
import EntireRoomItem from "../entire-room-item"
import { EntireSectionWrapper } from "./style"

const EntireSection = memo(props => {
	const { data } = props

	return (
		<EntireSectionWrapper>
			<SectionHeader title="300多处住宿" />
			<div className="room-list">
				{data &&
					data.map(item => {
						return <EntireRoomItem key={item.id} item={item} width="25%" />
					})}
			</div>
		</EntireSectionWrapper>
	)
})
export default EntireSection
