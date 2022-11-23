import React, { memo } from "react"
import { HomeSectionV3Wrapper } from "./style"

import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer"
import ScrollView from "../../../../components/scroll-view"
import SectionItem from "@/components/section-item"
import { CircularProgress } from "@mui/material"
const HomeSectionV3 = memo(props => {
	const { data } = props
	return (
		<HomeSectionV3Wrapper>
			<SectionHeader title={data?.title} subTitle={data?.subtitle} />
			{data?.list?.length ? (
				<ScrollView
					children={
						<div className="list">
							{data?.list?.map(item => {
								return (
									<SectionItem
										key={item.id}
										item={item}
										width="200px"
									></SectionItem>
								)
							})}
						</div>
					}
				/>
			) : (
				<div className="loading">
					<CircularProgress />
				</div>
			)}
			<SectionFooter />
		</HomeSectionV3Wrapper>
	)
})
export default HomeSectionV3
