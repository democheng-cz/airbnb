import React, { memo, useRef } from "react"
import { Rating } from "@mui/material"
import Slider from "react-slick"
import { SectionItemWrapper } from "./style"
import IconLeftArrow from "@/assets/svg/icon-left-arrow"
import IconRightArrow from "@/assets/svg/icon-right-arrow"

const SectionItem = memo(props => {
	const { item, width = "25%" } = props
	const sliderRef = useRef()
	const settings = {
		infinite: true,
		speed: 500,
		arrows: false,
	}

	const clickPrevHandle = () => {
		sliderRef.current.slickPrev()
	}
	const clickNextHandle = () => {
		sliderRef.current.slickNext()
	}

	return (
		<SectionItemWrapper
			color={{
				textColor: item?.verify_info?.text_color,
				rankingColor: item?.star_rating_color,
			}}
			width={width}
		>
			{/* <div className="cover">
				<img src={item?.picture_url} alt="" />
			</div> */}
			<div className="slider">
				<Slider {...settings} ref={sliderRef}>
					{item?.picture_urls?.map(i => {
						return (
							<div key={i} className="cover">
								<img src={i} alt="" />
							</div>
						)
					})}
				</Slider>
			</div>
			<span className="info item">
				{item?.verify_info?.messages.join(" . ")}
			</span>
			<span className="name item">{item?.name}</span>
			<span className="price item">¥{item?.price}/晚</span>
			<span className="ranking item">
				<Rating
					size="small"
					readOnly
					name="simple-controlled"
					value={item?.star_rating ?? 5}
					precision={0.1}
				/>
			</span>
			<div
				className="btn left"
				onClick={() => {
					clickPrevHandle()
				}}
			>
				<IconLeftArrow width={20} height={20} />
			</div>
			<div
				className="btn right"
				onClick={() => {
					clickNextHandle()
				}}
			>
				<IconRightArrow width={20} height={20} />
			</div>
		</SectionItemWrapper>
	)
})

export default SectionItem
