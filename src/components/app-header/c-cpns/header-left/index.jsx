import React, { memo } from "react"
import IconLogo from "../../../../assets/svg/icon-logo"
import { HeaderLeftWrapper } from "./style"

const HeaderLeft = memo(() => {
	return (
		<HeaderLeftWrapper>
			<div className="logo">
				<IconLogo />
			</div>
		</HeaderLeftWrapper>
	)
})

export default HeaderLeft
