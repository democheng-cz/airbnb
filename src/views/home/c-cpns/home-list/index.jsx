import React, { memo } from "react"
import { HomeListWrapper } from "./style"
import SectionItem from "@/components/section-item"
import { CircularProgress } from "@mui/material"
const HomeList = memo(props => {
	const { data, width = "25%" } = props
	return (
		<HomeListWrapper>
			<div className="section">
				{data?.length ? (
					data?.slice(0, 8).map(item => {
						return (
							<SectionItem
								key={item.id}
								item={item}
								width={width}
							></SectionItem>
						)
					})
				) : (
					<div className="loading">
						<CircularProgress />
					</div>
				)}
			</div>
		</HomeListWrapper>
	)
})

export default HomeList
