import styled from "styled-components"

export const AppFooterWrapper = styled.div`
	width: 1032px;
	margin: 0 auto;
	padding: 20px 0 40px 0;
	.navs {
		width: 100%;
		display: flex;
		margin-top: 40px;
		justify-content: space-between;
		box-sizing: border-box;
		padding-bottom: 30px;
		border-bottom: 1px solid #eee;
		ul {
			font-weight: 600;
			font-size: 14px;
			.title {
				margin-bottom: 15px;
				color: ${props => props.theme.text.secondColor};
			}
			.item {
				margin: 5px 0;
				color: ${props => props.theme.text.otherColor};
			}
		}
	}
	.info {
		margin: 20px 0;
		display: flex;
		color: ${props => props.theme.text.otherColor};
		font-weight: 600;
		font-size: 14px;
		.left {
			flex: 1;
			display: flex;
			.beian {
				a {
					color: ${props => props.theme.text.otherColor};
					font-weight: 600;
					font-size: 14px;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
		.right {
			width: 300px;
			display: flex;
			justify-content: flex-end;
			div {
				margin: 0 10px;
			}
		}
	}
`
