import {keyframes, styled} from 'styled-components';

const Spinner = () => {
    return <Wrapper />;
};

const spinKeyframe = keyframes`
	from {
		transform: rotate(0deg),
	}
	 
	to {
		transform : rotate(360deg)
	}
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    &::before {
        content: '';
        width: 50px;
        height: 50px;
        background: url('https://img.icons8.com/material-rounded/96/DBDCDE/spinner-frame-4.png')
            no-repeat center center;
        background-size: cover;
        animation: ${spinKeyframe} 1.6s ease-in-out infinite;
    }
`;

export default Spinner;
