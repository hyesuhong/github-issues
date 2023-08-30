import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import {TARGET_GITHUB} from './constants/github';

function App() {
    return (
        <>
            <Header owner={TARGET_GITHUB.OWNER} repo={TARGET_GITHUB.REPO} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
