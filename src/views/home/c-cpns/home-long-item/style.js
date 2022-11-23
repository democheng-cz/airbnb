import styled from "styled-components"

export const HomeLongItemWrapper = styled.div`
	padding: 8px;
	position: relative;
	.cover {
		width: 200px;
		img {
			width: 100%;
		}
	}
	.bg-cover {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 60%;
		width: 200px;
		margin-left: 8px;
		/* background-color: rgba(0, 0, 0, 0.2); */
		background-image: linear-gradient(
			-180deg,
			rgba(0, 0, 0, 0) 3%,
			rgb(0, 0, 0) 100%
		);
	}
	.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translate(-50%, 50%);
		color: #eee;
	}
`
