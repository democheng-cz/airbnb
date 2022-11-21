import React, { memo } from "react"
import HeaderCenter from "./c-cpns/header-center"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"
import { AppHeaderWrapper } from "./style"

const AppHeader = memo(() => {
	return (
		<AppHeaderWrapper>
			<HeaderLeft className="left">left</HeaderLeft>
			<HeaderCenter className="center">center</HeaderCenter>
			<HeaderRight className="right">right</HeaderRight>
		</AppHeaderWrapper>
	)
})

export default AppHeader
