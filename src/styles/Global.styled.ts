import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,body {
		min-height: 100vh;
		font-family: "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	}

	body {
		width: 414px;
		margin: 0 auto;

		background: ${props => props.theme.black};
		color: ${props => props.theme.lightGrey};
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul li, ol li {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
