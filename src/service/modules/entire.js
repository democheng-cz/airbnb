import request from "../request"

// 更多房源
export const reqEntireData = offset =>
	request.get({ url: "/entire/list", params: { offset, limit: 20 } })
