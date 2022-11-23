import styled from "styled-components"

export const ScrollViewWrapper = styled.div`
	position: relative;
	.scroll-content {
		overflow: hidden;
		position: relative;
		.wrapper {
			display: flex;
			transition: transform 250ms ease;
		}
	}

	.btn {
		width: 28px;
		height: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		transform: translateY(-50%);
		border-radius: 50%;
		background-color: #fff;
		box-shadow: ${props => props.theme.mixin.boxShadow};
		top: 50%;
	}
	.left-btn {
		left: -3%;
	}
	.right-btn {
		right: -3%;
	}
`
