import React, { memo } from "react"
import { HomeListWrapper } from "./style"
import SectionItem from "@/components/section-item"
import SectionHeader from "@/components/section-header"
import IconRightArrow from "@/assets/svg/icon-right-arrow"
const HomeList = memo(props => {
	const { data, subTitle } = props
	return (
		<HomeListWrapper>
			<SectionHeader subTitle={subTitle} title={data?.title} />
			<div className="section">
				{data?.list?.slice(0, 8).map(item => {
					return (
						<SectionItem key={item.id} item={item} width="25%"></SectionItem>
					)
				})}
			</div>
			{/* more */}
			<div className="more">
				<span>查看更多</span>
				<IconRightArrow />
			</div>
		</HomeListWrapper>
	)
})

export default HomeList
