import styled from "styled-components"

export const SectionItemWrapper = styled.div`
	box-sizing: border-box;
	width: ${props => props.width};
	padding: 0 8px;
	margin: 5px 0;
	display: flex;
	flex-direction: column;
	.cover {
		/* width: 100%; */
		padding: 66.66% 8px 0;
		position: relative;
		top: 0;
		left: 0;
		cursor: pointer;
		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	span {
		display: inline-block;
		margin: 5px 0;
		cursor: pointer;
	}
	.info {
		color: ${props => props.color.textColor};
		font-size: 12px;
		font-weight: 600;
	}
	.name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: ${props => props.theme.text.secondColor};
		font-weight: 600;
	}
	.price {
		font-size: 14px;
		color: ${props => props.theme.text.secondColor};
	}
	.ranking {
		span {
			color: ${props => props.color.rankingColor};
			font-size: 12px;
			margin: 0 !important;
		}
	}
`
