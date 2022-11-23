import { CircularProgress } from "@mui/material"
import React, { memo } from "react"
import ScrollView from "../../../../components/scroll-view"
import SectionHeader from "../../../../components/section-header"
import LongForItem from "../home-long-item"
import { HomeLongWrapper } from "./style"

const HomeLong = memo(props => {
	const { data } = props
	return (
		<HomeLongWrapper>
			<SectionHeader title={data.title} subTitle={data.subtitle} />
			{/* <div className="list"> */}
			{data?.list?.length ? (
				<ScrollView
					children={
						<div className="list">
							{data?.list?.map(item => {
								return <LongForItem key={item.city} data={item} />
							})}
						</div>
					}
				/>
			) : (
				<CircularProgress />
			)}
			{/* </div> */}
		</HomeLongWrapper>
	)
})
export default HomeLong
