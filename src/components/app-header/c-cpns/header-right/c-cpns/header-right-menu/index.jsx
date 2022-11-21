import React, { memo } from "react"
import { MenuWrapper } from "./style"

const HeaderRightMenu = memo(() => {
	return (
		<MenuWrapper>
			<div className="top">
				<div className="item">注册</div>
				<div className="item">登录</div>
			</div>
			<div className="bottom">
				<div className="item">来爱彼迎发布房源</div>
				<div className="item">开展体验</div>
				<div className="item">帮助</div>
			</div>
		</MenuWrapper>
	)
})

export default HeaderRightMenu
