import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

class DcRequest {
	constructor(baseURL, timeout) {
		this.instance = axios.create({ baseURL, timeout })

		this.instance.interceptors.request.use(config => {
			// 配置请求头数据
			return config
		})

		this.instance.interceptors.response.use(
			res => {
				return res.data
			},
			err => {
				return Promise.reject(err)
			}
		)
	}

	request(config) {
		return this.instance.request(config)
	}

	get(config) {
		return this.request({ ...config, method: "get" })
	}

	post(config) {
		return this.request({ ...config, method: "post" })
	}

	delete(config) {
		return this.request({ ...config, method: "delete" })
	}
}

export default new DcRequest(BASE_URL, TIMEOUT)
