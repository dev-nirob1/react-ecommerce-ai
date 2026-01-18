import BackLayout from './Layout/BackLayout';
import Dashboard from './Pages/Dashboard';

const back_routes = [
    // Admin Dashboard Section
    {
        path: '/admin',
        element: <BackLayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            /* Planned: products, categories, orders, customers, campaigns, settings */
        ],
    },
    // User / Customer Dashboard Section
    {
        path: '/account',
        element: <BackLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />, // Placeholder for user overview
            },
            {
                path: 'orders',
                element: <Dashboard />, // Placeholder
            },
            {
                path: 'profile',
                element: <Dashboard />, // Placeholder
            },
            {
                path: 'addresses',
                element: <Dashboard />, // Placeholder
            },
        ],
    },
];

export default back_routes;
