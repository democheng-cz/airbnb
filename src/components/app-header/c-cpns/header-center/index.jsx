import React, { memo } from "react"
import IconSearch from "../../../../assets/svg/icon-search"
import { HeaderCenterWrapper } from "./style"

const HeaderCenter = memo(() => {
	return (
		<HeaderCenterWrapper>
			<div className="input">
				<span>搜索房源和体验</span>
				<span className="icon">
					<IconSearch />
				</span>
			</div>
		</HeaderCenterWrapper>
	)
})

export default HeaderCenter
