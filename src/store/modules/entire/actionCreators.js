import {
	CHANGE_ENTIRE_DATA,
	CHANGE_CURRENT_PAGE,
	CHANGE_TOTAL_COUNT,
} from "./CONSTANTS.js"
import { reqEntireData } from "@/service/modules/entire"

export const fetchEntireDataAction = offset => {
	return async (dispatch, state) => {
		const res = await reqEntireData((state().entire.currentPage - 1) * 20)
		dispatch(changeEntireDataAction(res.list))
		dispatch(changeTotalCountAction(res.totalCount))
	}
}

export const changeEntireDataAction = payload => {
	return {
		type: CHANGE_ENTIRE_DATA,
		payload,
	}
}

export const changeCurrentPageAction = payload => {
	return {
		type: CHANGE_CURRENT_PAGE,
		payload,
	}
}

export const changeTotalCountAction = payload => {
	return {
		type: CHANGE_TOTAL_COUNT,
		payload,
	}
}
