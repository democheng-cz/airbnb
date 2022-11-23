import styled from "styled-components"

export const TabWrapper = styled.div`
	display: flex;

	.item {
		flex-basis: 120px;
		flex-shrink: 0;
		text-align: center;
		padding: 15px;
		border: 1px solid #eee;
		border-radius: 7px;
		cursor: pointer;
		/* overflow: hidden;
		text-overflow: ellipsis; */
		white-space: nowrap;
		margin-right: 10px;
		box-shadow: ${props => props.theme.mixin.boxShadow};
		transition: box-shadow 300ms ease;
		&:hover {
			box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
		}
		&.active {
			background-color: ${props => props.theme.color.secondColor};
			color: #fff;
		}
	}
`
