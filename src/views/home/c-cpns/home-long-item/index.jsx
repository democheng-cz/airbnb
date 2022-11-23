import React, { memo } from "react"
import { HomeLongItemWrapper } from "./style"

const HomeLongItem = memo(props => {
	const { data } = props
	return (
		<HomeLongItemWrapper>
			<div className="cover">
				<img src={data.picture_url} alt="" />
			</div>
			<div className="bg-cover"></div>
			<div className="info">
				<div className="name">{data.city}</div>
				<div className="name">{data.price}</div>
			</div>
		</HomeLongItemWrapper>
	)
})
export default HomeLongItem
