import React, { memo, useEffect } from "react"
import { EntireWrapper } from "./style"

import EntireFilter from "./c-cpns/entire-filter"
import { useDispatch, useSelector } from "react-redux"

import {
	fetchEntireDataAction,
	changeCurrentPageAction,
} from "@/store/modules/entire/actionCreators.js"
import EntireSection from "./c-cpns/entire-section"
import EntirePagination from "./c-cpns/entire-pagination"
import { CircularProgress } from "@mui/material"
import { changeEntireDataAction } from "../../store/modules/entire/actionCreators"
const Entire = memo(() => {
	const dispatch = useDispatch()

	const { entireData, totalCount } = useSelector(state => ({
		entireData: state.entire.entireData,
		totalCount: state.entire.totalCount,
	}))

	useEffect(() => {
		dispatch(fetchEntireDataAction())
	}, [dispatch])

	const changePageHandle = index => {
		dispatch(changeEntireDataAction([]))
		dispatch(changeCurrentPageAction(index))
		dispatch(fetchEntireDataAction())
	}
	return (
		<EntireWrapper>
			<EntireFilter />
			{entireData.length ? (
				<EntireSection data={entireData} />
			) : (
				<div className="box">
					<CircularProgress />
				</div>
			)}
			<EntirePagination total={totalCount} changePage={changePageHandle} />
		</EntireWrapper>
	)
})

export default Entire
