import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { reqHomeGoodPriceData } from "@/service/modules/home"

const initState = {
	goodPrice: {},
}

export const fetchHomeData = createAsyncThunk("fetchHomeData", async () => {
	const res = await reqHomeGoodPriceData()
	return res
})

const homeStore = createSlice({
	name: "home",
	initialState: initState,
	reducers: {
		changeGoodPriceAction(state, { payload }) {},
	},
	extraReducers: builder => {
		builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
			state.goodPrice = payload
		})
	},
})

export const { changeGoodPriceAction } = homeStore.actions
export default homeStore.reducer
