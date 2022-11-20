import { configureStore } from "@reduxjs/toolkit"

import homeReducer from "./modules/Home"

const store = configureStore({
	reducer: {
		home: homeReducer,
	},
})

export default store
