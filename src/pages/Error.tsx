import {useEffect} from 'react';
import {isRouteErrorResponse, useRouteError} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';
import GlobalStyle from '../styles/Global.styled';
import Header from '../components/Header';
import {TARGET_GITHUB} from '../constants/github';
import ErrorDisplay from '../components/ErrorDisplay';

const Error = () => {
    const error = useRouteError();
    const isRouteError = isRouteErrorResponse(error);
    const errorProps = isRouteError
        ? {
              status: error.status,
              statusText: error.statusText,
              message: error.error?.message,
          }
        : {
              status: 404,
              statusText: '알 수 없는 페이지',
          };
    useEffect(() => {
        console.info(error);
    }, [error]);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header owner={TARGET_GITHUB.OWNER} repo={TARGET_GITHUB.REPO} />
                <ErrorDisplay {...errorProps} />
            </ThemeProvider>
        </>
    );
};

export default Error;
