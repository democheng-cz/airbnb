import React, { memo, useState } from "react"

import classnames from "classnames"

import { EntireFilterWrapper } from "./style"

const EntireFilter = memo(() => {
	const [selectItems, setSelectItems] = useState([])

	const filterData = [
		"人数",
		"可免费取消",
		"房源类型",
		"价格",
		"位置区域",
		"闪订",
		"卧室/床数",
		"促销/优惠",
		"更多筛选条件",
	]

	const clickHandle = index => {
		const newSelectItems = [...selectItems]
		if (selectItems.includes(index)) {
			const newIndex = newSelectItems.findIndex(item => item === index)
			newSelectItems.splice(newIndex, 1)
		} else {
			newSelectItems.push(index)
		}

		setSelectItems(newSelectItems)
	}
	return (
		<EntireFilterWrapper>
			{filterData.map((item, index) => {
				return (
					<span
						className={classnames({ active: selectItems.includes(index) })}
						key={item}
						onClick={() => clickHandle(index)}
					>
						{item}
					</span>
				)
			})}
		</EntireFilterWrapper>
	)
})
export default EntireFilter
