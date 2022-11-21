import React, { memo } from "react"
import { Rating } from "@mui/material"

import { SectionItemWrapper } from "./style"

const SectionItem = memo(props => {
	const { item, width } = props
	console.log(item)
	return (
		<SectionItemWrapper
			color={{
				textColor: item?.verify_info?.text_color,
				rankingColor: item?.star_rating_color,
			}}
			width={width}
		>
			<div className="cover">
				<img src={item?.picture_url} alt="" />
			</div>
			<span className="info">{item?.verify_info?.messages.join(" . ")}</span>
			<span className="name">{item?.name}</span>
			<span className="price">¥{item?.price}/晚</span>
			<span className="ranking">
				<Rating
					size="small"
					readOnly
					name="simple-controlled"
					value={item?.star_rating ?? 5}
					precision={0.1}
				/>
			</span>
		</SectionItemWrapper>
	)
})

export default SectionItem
