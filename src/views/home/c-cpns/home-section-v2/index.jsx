import React, { memo, useCallback, useEffect, useState } from "react"
import { HomeSectionV2Wrapper } from "./style"

import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer"
import HomeList from "../home-list"
import SectionTab from "@/components/section-tab"
import ScrollView from "../../../../components/scroll-view"

const HomeSectionV2 = memo(props => {
	const { data } = props

	const initName = Object.keys(data.dest_list)[0]
	const [cityName, setCityName] = useState(initName)
	const [list, setList] = useState([])
	const tabList = data.dest_address?.map(item => item.name)

	useEffect(() => {
		setList(data.dest_list?.[cityName])
	}, [data, cityName])

	const tabClickHandle = useCallback(name => {
		setCityName(name)
	}, [])
	return (
		<HomeSectionV2Wrapper>
			<SectionHeader title={data?.title} subTitle={data.subtitle} />
			{/* tab */}
			<ScrollView
				children={
					tabList && <SectionTab tabList={tabList} tabClick={tabClickHandle} />
				}
			/>
			{/* list */}
			<HomeList data={list} width="33.33%" />
			<SectionFooter title="查看更多佛山房源" color="#008489" />
		</HomeSectionV2Wrapper>
	)
})
export default HomeSectionV2
