import React, { memo, useEffect, useRef, useState } from "react"
import IconRightArrow from "../../assets/svg/icon-right-arrow"
import IconLeftArrow from "../../assets/svg/icon-left-arrow"
import { ScrollViewWrapper } from "./style"

const ScrollView = memo(props => {
	const { children } = props

	const [showRight, setShowRight] = useState(false)
	const [showLeft, setShowLeft] = useState(false)
	const [positionIndex, setPositionIndex] = useState(0)

	const scrollContentRef = useRef()
	const subDistanceRef = useRef()
	let totalDistance = 0
	useEffect(() => {
		// 获取当前父元素容器实际可滚动的宽度
		const scrollWidth = scrollContentRef.current.scrollWidth
		// 获取当前父容器的宽度
		const currentWidth = scrollContentRef.current.clientWidth

		subDistanceRef.current = scrollWidth - currentWidth
		setShowRight(subDistanceRef.current > 0 ? true : false)
	}, [children])

	const clickHandle = isRight => {
		const newIndex = isRight ? positionIndex + 1 : positionIndex - 1
		// 设置滚动距离
		const scrollDistance =
			scrollContentRef.current.children[0].children[newIndex]?.offsetLeft
		isRight
			? (totalDistance += scrollDistance)
			: (totalDistance -= scrollDistance)
		console.log("totalDistance", totalDistance)
		console.log("scrollWidth", scrollContentRef.current.scrollWidth)
		console.log(scrollContentRef.current.clientWidth)
		scrollContentRef.current.style.transform = isRight
			? `translateX(-${totalDistance}px)`
			: `translateX(${totalDistance}px)`
		setPositionIndex(newIndex)

		// 总的可滚动的宽度 - 一共移动的距离 > 容器本身的宽度
		setShowRight(
			scrollContentRef.current.scrollWidth - totalDistance >
				scrollContentRef.current.clientWidth
		)
		setShowLeft(newIndex > 0)
	}
	return (
		<ScrollViewWrapper>
			{showLeft && (
				<div className="left-btn btn" onClick={() => clickHandle(false)}>
					<IconLeftArrow />
				</div>
			)}
			{showRight && (
				<div className="right-btn btn" onClick={() => clickHandle(true)}>
					<IconRightArrow />
				</div>
			)}
			<div className="scroll-content">
				<div className="wrapper" ref={scrollContentRef}>
					{children && children}
				</div>
			</div>
		</ScrollViewWrapper>
	)
})
export default ScrollView
