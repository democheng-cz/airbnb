import React, { memo } from "react"
import { AppFooterWrapper } from "./style"
import IconLogo2 from "@/assets/svg/icon-logo2"
import IconQq from "../../assets/svg/icon-qq"
import IconWeChat from "../../assets/svg/icon-wechat"

const AppHeader = memo(() => {
	let data = [
		{
			title: "爱彼迎",
			items: ["工作机会", "爱彼迎新闻", "政策", "无障碍设施"],
		},
		{
			title: "发现",
			items: ["信任与安全", "旅行基金", "商务差旅", "爱彼迎杂志", "Airbnb.org"],
		},
		{
			title: "出租",
			items: ["为什么要出租?", "房东义务", "开展体验", "资源中心"],
		},
		{
			title: "客服支持",
			items: ["帮助", "邻里支持"],
		},
	]

	return (
		<AppFooterWrapper>
			<div className="navs">
				{data.map((item, index) => {
					return (
						<ul className="nav" key={index}>
							<div className="title">{item.title}</div>
							{item.items.map(i => {
								return (
									<li className="item" key={i}>
										{i}
									</li>
								)
							})}
						</ul>
					)
				})}
			</div>
			<div className="info">
				<div className="left">
					<IconLogo2></IconLogo2>
					<div className="beian">
						<span>京ICP备16017121号</span> <span>京ICP证 160773号</span>
						<img
							src="https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png"
							alt="中国公安局标志"
						/>
						<span href="#">京公网安备 11010502032345号</span>
						<span>安彼迎网络（北京）有限公司</span>
						<img
							style={{ width: "20px", height: "20px" }}
							src="https://z1.muscache.cn/pictures/carson/carson-1630570578816-f7812cf5/original/90b7269d-4bd5-44dc-89c1-b50d33fdccd0.png"
							alt=""
						/>{" "}
						<span href="#">营业执照</span>
						<span>© 2022 Airbnb, Inc. All rights reserved.</span>
						<span href="#">条款</span>·<span href="#">隐私政策</span>
						<span>·</span>
						<span href="#">网站地图</span>
						<span>· 全国旅游投诉渠道 12301</span>
					</div>
				</div>
				<div className="right">
					<IconQq />
					<div>
						<IconWeChat />
					</div>
				</div>
			</div>
		</AppFooterWrapper>
	)
})

export default AppHeader
