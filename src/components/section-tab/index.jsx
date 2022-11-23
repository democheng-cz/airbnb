import React, { memo, useState } from "react"
import PropTypes from "prop-types"
import { TabWrapper } from "./style"
import classnames from "classnames"

const Tab = memo(props => {
	const { tabList, tabClick } = props
	const [currentIndex, setCurrentIndex] = useState(0)
	const tabClickHandle = (index, name) => {
		setCurrentIndex(index)
		tabClick(name)
	}

	return (
		<TabWrapper>
			{tabList?.map((item, index) => {
				return (
					<div
						className={classnames("item", { active: currentIndex === index })}
						key={index}
						onClick={() => tabClickHandle(index, item)}
					>
						{item}
					</div>
				)
			})}
		</TabWrapper>
	)
})

Tab.propTypes = {
	tabList: PropTypes.array,
}
export default Tab
