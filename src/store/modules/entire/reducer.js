import {
	CHANGE_CURRENT_PAGE,
	CHANGE_ENTIRE_DATA,
	CHANGE_TOTAL_COUNT,
} from "./CONSTANTS"

const initState = {
	entireData: [],
	currentPage: 1,
	totalCount: 0,
}

export default function reducer(prevState = initState, action) {
	const { type, payload } = action
	switch (type) {
		case CHANGE_ENTIRE_DATA:
			return {
				...prevState,
				entireData: payload,
			}
		case CHANGE_CURRENT_PAGE:
			return {
				...prevState,
				currentPage: payload,
			}
		case CHANGE_TOTAL_COUNT:
			return {
				...prevState,
				totalCount: payload,
			}
		default:
			return prevState
	}
}
