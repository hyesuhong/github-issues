import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import {TARGET_GITHUB} from './constants/github';
import GlobalStyle from './styles/Global.styled';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header owner={TARGET_GITHUB.OWNER} repo={TARGET_GITHUB.REPO} />
                <main>
                    <Outlet />
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
