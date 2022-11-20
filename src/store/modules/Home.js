import { createSlice } from "@reduxjs/toolkit"

const initState = {
	homeBanners: [],
}

const homeStore = createSlice({
	name: "home",
	initialState: initState,
	reducers: {
		changeBanners(state, { payload }) {
			console.log(payload)
		},
	},
})

export const { changeBanners } = homeStore.actions
export default homeStore.reducer
