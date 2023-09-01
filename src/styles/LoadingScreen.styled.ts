import {keyframes, styled} from 'styled-components';

export interface loadingProps {
    $isFull?: boolean;
}

const spinKeyframe = keyframes`
	from {
		transform: rotate(0deg),
	}
	 
	to {
		transform : rotate(360deg)
	}
`;

export const Wrapper = styled.div<loadingProps>`
    ${props =>
        props.$isFull
            ? `position: fixed;
    						top: 0;
    						left: 0;
    						width: 100%;
								background: rgba(23, 30, 41, 0.7);`
            : ''}

    height: ${props => (props.$isFull ? '100%' : '100px')};

    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        width: 50px;
        height: 50px;
        background: url('https://img.icons8.com/material-rounded/96/DBDCDE/spinner-frame-4.png')
            no-repeat center center;
        background-size: cover;
        animation: ${spinKeyframe} 1.6s ease-in-out infinite;
    }
`;
