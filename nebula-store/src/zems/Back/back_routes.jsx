import BackLayout from './Layout/BackLayout';
import Dashboard from './Pages/Dashboard';

const back_routes = [
    {
        path: '/dashboard',
        element: <BackLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            // Other backend routes will go here
        ],
    },
];

export default back_routes;
