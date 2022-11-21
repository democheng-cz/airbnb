import React, { memo, useEffect, useState } from "react"
import IconAvatar from "@/assets/svg/icon-avatar"
import IconGlobal from "@/assets/svg/icon-global"
import IconMenu from "@/assets/svg/icon-menu"
import HeaderRightMenu from "./c-cpns/header-right-menu"
import { HeaderRightWrapper } from "./style"
const HeaderRight = memo(() => {
	const [isShow, setIsShow] = useState(false)

	const showHandle = () => {
		setIsShow(true)
	}

	const clickHandle = () => {
		setIsShow(false)
	}
	useEffect(() => {
		// 第三个参数设为true, 将事件流改为了捕获模式
		window.addEventListener("click", clickHandle, true)
		return () => {
			// 清除监听的操作
			window.removeEventListener("click", clickHandle)
		}
	}, [])

	return (
		<HeaderRightWrapper>
			<div className="btns">
				<span>登录</span>
				<span>注册</span>
				<span>
					<IconGlobal />
				</span>
			</div>
			<div className="profile" onClick={showHandle}>
				<span className="menu">
					<IconMenu />
				</span>
				<IconAvatar />
			</div>
			{isShow && <HeaderRightMenu />}
		</HeaderRightWrapper>
	)
})

export default HeaderRight
