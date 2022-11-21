const { default: styled } = require("styled-components")

export const MenuWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 60px;
	width: 240px;
	padding: 5px 0;
	background-color: #fff;
	border: 1px solid #eee;
	color: ${props => props.theme.text.primaryColor};
	font-size: 14px;
	border-radius: 13px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
	.item {
		padding-left: 15px;
		height: 40px;
		line-height: 40px;
		cursor: pointer;
		&:hover {
			background-color: #f7f7f7;
		}
	}
	.top {
		border-bottom: 1px solid #eee;
	}
	.bottom {
		margin-top: 10px;
	}
`
