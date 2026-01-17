import FrontLayout from './Layout/FrontLayout';
import Home from './Pages/Home';

const front_routes = [
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            // Other frontend routes will go here
        ],
    },
];

export default front_routes;
