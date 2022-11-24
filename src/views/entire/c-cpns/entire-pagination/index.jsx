import classNames from "classnames"
import React, { memo, useState } from "react"
import IconLeftArrow from "../../../../assets/svg/icon-left-arrow"
import IconRightArrow from "../../../../assets/svg/icon-right-arrow"
import { EntirePaginationWrapper } from "./style"
import {} from "@/store/modules/entire/actionCreators.js"

const EntirePagination = memo(props => {
	const { total = 0, changePage } = props
	const [currentPage, setCurrentPage] = useState(1)
	const clickHandle = page => {
		if (currentPage === page) return
		setCurrentPage(page)
		changePage(page)
	}
	const mapTotal = () => {
		let s = []
		for (let i = 1; i <= Math.ceil(total / 20); i++) {
			if (currentPage < 5) {
				if (i <= 5 || i === Math.ceil(total / 20)) {
					s.push(
						<span
							className={classNames("pagination-item", {
								active: i === currentPage,
							})}
							key={i}
							onClick={() => clickHandle(i)}
						>
							{i}
						</span>
					)
				}
				if (i === Math.ceil(total / 20) - 1 && 4 < Math.ceil(total / 20)) {
					s.push(<span key={i}>...</span>)
				}
			} else if (currentPage >= 5 && currentPage < Math.ceil(total / 20) - 3) {
				if (
					i === 1 ||
					i === Math.ceil(total / 20) ||
					i === currentPage - 1 ||
					i === currentPage + 1 ||
					i === currentPage
				) {
					s.push(
						<span
							className={classNames("pagination-item", {
								active: i === currentPage,
							})}
							key={i}
							onClick={() => clickHandle(i)}
						>
							{i}
						</span>
					)
				}
				if (
					(i === 1 && i < currentPage - 1) ||
					(i === Math.ceil(total / 20) - 1 && currentPage + 1 < i)
				) {
					s.push(<span key={i + Math.random()}>...</span>)
				}
			} else {
				if (i === 1 || i >= Math.ceil(total / 20) - 3) {
					s.push(
						<span
							className={classNames("pagination-item", {
								active: i === currentPage,
							})}
							key={i}
							onClick={() => clickHandle(i)}
						>
							{i}
						</span>
					)
				}
				if (
					i === Math.ceil(total / 20) - 4 &&
					Math.ceil(total / 20) - 3 - 1 > 1
				) {
					s.push(<span key={i + Math.random()}>...</span>)
					s.push(
						<span
							className={classNames("pagination-item", {
								active: i === currentPage,
							})}
							key={i}
							onClick={() => clickHandle(i)}
						>
							{i}
						</span>
					)
				}
			}
		}
		return s
	}

	const changeClickHandle = isPrev => {
		console.log("object")
		if (isPrev) {
			if (currentPage - 1 > 0) {
				setCurrentPage(currentPage - 1)
				changePage(currentPage)
			} else return
		} else {
			console.log("object")
			if (currentPage + 1 < Math.ceil(total / 20)) {
				setCurrentPage(currentPage + 1)
				changePage(currentPage)
			} else return
		}
	}
	return (
		<EntirePaginationWrapper>
			<div className="wrapper">
				<div className="prev" onClick={() => changeClickHandle(true)}>
					<IconLeftArrow />
				</div>
				{mapTotal()}
				<div className="right" onClick={() => changeClickHandle(false)}>
					<IconRightArrow />
				</div>
			</div>
		</EntirePaginationWrapper>
	)
})
export default EntirePagination
