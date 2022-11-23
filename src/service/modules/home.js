import request from "../request"

// 高性价比房源
export const reqHomeGoodPriceData = () =>
	request.get({ url: "/home/goodprice" })

// 高评分房源
export const reqHomeHighScoreData = () =>
	request.get({ url: "/home/highscore" })

// 折扣房源
export const reqHomeDiscountData = () => request.get({ url: "/home/discount" })

// 推荐房源
export const reqHomeRecommendData = () =>
	request.get({ url: "/home/hotrecommenddest" })

// long-for
export const reqHomeLongFor = () => request.get({ url: "/home/longfor" })

// plus房源
export const reqHomePlusData = () => request.get({ url: "/home/plus" })
