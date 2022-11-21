import styled from "styled-components"

export const HeaderCenterWrapper = styled.div`
	width: 300px;
	cursor: pointer;
	.input {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 15px;
		border-radius: 25px;
		border: 1px solid #eee;
		color: ${props => props.theme.text.primaryColor};
		font-weight: 600;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
		.icon {
			padding: 10px;
			border-radius: 50%;
			color: #fff;
			background-color: ${props => props.theme.color.primaryColor};
		}
		&:hover {
			box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
		}
	}
`
