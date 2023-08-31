import {useEffect} from 'react';
import {isRouteErrorResponse, useRouteError} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';
import GlobalStyle from '../styles/Global.styled';
import Header from '../components/Header';
import {TARGET_GITHUB} from '../constants/github';
import IcoSad from '../assets/images/emotion-sad-fill.png';
import * as S from '../styles/Error.styled';

const Error = () => {
    const error = useRouteError();
    useEffect(() => {
        console.info(error);
    }, [error]);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header owner={TARGET_GITHUB.OWNER} repo={TARGET_GITHUB.REPO} />
                <S.ErrorWrapper>
                    <img src={IcoSad} alt='sad face' />
                    {isRouteErrorResponse(error) ? (
                        <>
                            <h4>{error.status}</h4>
                            <h6>{error.statusText || error.data}</h6>
                            {error.error && <p>{error.error.message}</p>}
                        </>
                    ) : (
                        <></>
                    )}
                </S.ErrorWrapper>
            </ThemeProvider>
        </>
    );
};

export default Error;
