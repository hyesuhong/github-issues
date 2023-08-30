import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import List from './pages/List';
import Content from './pages/Content';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <List />},
            {path: '/issues/:issue_number', element: <Content />},
        ],
    },
]);

export default router;
