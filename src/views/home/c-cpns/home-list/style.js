import styled from "styled-components"

export const HomeListWrapper = styled.div`
	.section {
		margin: 0 -8px;
		display: flex;
		flex-wrap: wrap;
	}
	.more {
		color: ${props => props.theme.text.primaryColor};
		font-weight: 600;
	}
`
