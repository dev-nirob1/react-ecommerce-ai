import AuthLayout from './Layout/AuthLayout';
import Login from './Pages/Login';

const auth_routes = [
    {
        path: '/login',
        element: <AuthLayout />,
        children: [
            {
                path: '',
                element: <Login />,
            },
            // Other auth routes like register, forgot password
        ],
    },
];

export default auth_routes;
