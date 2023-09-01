import * as S from '../styles/LoadingScreen.styled';

const LoadingScreen = ({$isFull = true}: S.loadingProps) => {
    return (
        <>
            <S.Wrapper $isFull={$isFull}>
                <span />
            </S.Wrapper>
        </>
    );
};

export default LoadingScreen;
