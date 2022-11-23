import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {
	reqHomeGoodPriceData,
	reqHomeHighScoreData,
	reqHomeDiscountData,
	reqHomeLongFor,
	reqHomePlusData,
} from "@/service/modules/home"
import { reqHomeRecommendData } from "../../service/modules/home"

const initState = {
	goodPrice: {},
	highScore: {},
	discount: {},
	recommend: {},
	longFor: {},
	plusInfo: {},
}

export const fetchHomeData = createAsyncThunk(
	"fetchHomeData",
	async (payload, { dispatch }) => {
		// 高性价比房源
		reqHomeGoodPriceData().then(res => {
			dispatch(changeGoodPriceAction(res))
		})

		// 高评分房源
		reqHomeHighScoreData().then(res => {
			dispatch(changeHighScoreAction(res))
		})

		// 折扣房源
		reqHomeDiscountData().then(res => {
			dispatch(changeDiscountAction(res))
		})

		// 推荐房源
		reqHomeRecommendData().then(res => {
			dispatch(changeRecommendAction(res))
		})

		// Longfor
		reqHomeLongFor().then(res => {
			dispatch(changeLongForAction(res))
		})

		// plus房源
		reqHomePlusData().then(res => {
			dispatch(changePlusAction(res))
		})
	}
)

const homeStore = createSlice({
	name: "home",
	initialState: initState,
	reducers: {
		changeGoodPriceAction(state, { payload }) {
			state.goodPrice = payload
		},
		changeHighScoreAction(state, { payload }) {
			state.highScore = payload
		},
		changeDiscountAction(state, { payload }) {
			state.discount = payload
		},
		changeRecommendAction(state, { payload }) {
			state.recommend = payload
		},
		changeLongForAction(state, { payload }) {
			state.longFor = payload
		},
		changePlusAction(state, { payload }) {
			state.plusInfo = payload
		},
	},
	// extraReducers: builder => {
	// 	builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
	// 		state.goodPrice = payload[0]
	// 		state.highScore = payload[1]
	// 	})
	// },
})

export const {
	changeGoodPriceAction,
	changeHighScoreAction,
	changeDiscountAction,
	changeRecommendAction,
	changeLongForAction,
	changePlusAction,
} = homeStore.actions
export default homeStore.reducer
