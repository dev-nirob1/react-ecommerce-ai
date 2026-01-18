import AuthLayout from './Layout/AuthLayout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';

const auth_routes = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />,
            },
        ],
    },
];

export default auth_routes;
