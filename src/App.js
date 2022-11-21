import React, { memo } from "react"
import { useRoutes } from "react-router-dom"

import routes from "@/router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

const App = memo(() => {
	return (
		<div className="app">
			{/* 网页头部 */}
			<AppHeader />
			<div className="main">{useRoutes(routes)}</div>
			{/* 网页底部 */}
			<AppFooter />
		</div>
	)
})

export default App
