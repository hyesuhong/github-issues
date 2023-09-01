import {styled} from 'styled-components';
import Spinner from './Spinner';

const LoadingScreen = () => {
    return (
        <>
            <Wrapper>
                <Spinner />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(23, 30, 41, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default LoadingScreen;
