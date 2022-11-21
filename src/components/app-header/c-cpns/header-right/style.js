import styled from "styled-components"

export const HeaderRightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 24px;
	color: #717171;
	position: relative;
	.btns {
		display: flex;
		margin-right: 20px;
		color: ${props => props.theme.text.secondColor};
		font-weight: 600;
		span {
			padding: 10px;
			border-radius: 50%;
			cursor: pointer;
			&:hover {
				background-color: #f7f7f7;
			}
		}
	}
	.profile {
		display: flex;
		align-items: center;
		padding: 5px 10px 5px;
		border-radius: 20px;
		background-color: #fff;
		border: 1px solid #eee;
		cursor: pointer;
		.menu {
			margin-right: 15px;
		}
		&:hover {
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		}
	}
`
