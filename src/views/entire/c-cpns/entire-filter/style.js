import styled from "styled-components"

export const EntireFilterWrapper = styled.div`
	width: 100%;
	height: 48px;
	line-height: 48px;
	border-bottom: 1px solid #eee;
	span {
		padding: 5px 10px;
		border: 1px solid #eee;
		background-color: #fff;
		margin-right: 10px;
		cursor: pointer;
		border-radius: 6px;
		&:nth-child(1) {
			margin-left: 24px;
		}
	}
	.active {
		background-color: ${props => props.theme.color.secondColor};
		color: #fff;
	}
`
