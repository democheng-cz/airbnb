import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))
const NotFound = React.lazy(() => import("@/views/not-found"))
const routes = [
	{
		path: "/",
		element: <Navigate to="/home" />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/detail/:id",
		element: <Detail />,
	},
	{
		path: "/entire",
		element: <Entire />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]

export default routes
