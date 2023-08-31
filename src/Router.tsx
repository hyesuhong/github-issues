import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import List from './pages/List';
import Content from './pages/Content';
import Error from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/', element: <List />},
            {
                path: '/issues/:issue_number',
                element: <Content />,
                loader: ({params}) => {
                    const {issue_number} = params;

                    if (typeof issue_number === 'undefined' || isNaN(Number(issue_number))) {
                        throw new Response('Not Found', {status: 404});
                    }
                    return null;
                },
            },
        ],
        errorElement: <Error />,
    },
]);

export default router;
