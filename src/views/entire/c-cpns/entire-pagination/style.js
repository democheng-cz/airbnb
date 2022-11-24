import styled from "styled-components"

export const EntirePaginationWrapper = styled.div`
	width: 1032px;
	margin: 0 auto;
	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.pagination-item {
			margin: 0 auto;
			display: inline-block;
			width: 32px;
			height: 32px;
			text-align: center;
			line-height: 32px;
			margin: 0 10px;
			cursor: pointer;
			border-radius: 50%;
			&:hover {
				background-color: #eee;
			}
		}
		.active {
			background-color: #222;
			color: #fff;
		}
	}
`
