import request from "../request"

export const reqHomeGoodPriceData = () =>
	request.get({ url: "/home/goodprice" })
