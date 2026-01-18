import BackLayout from './Layout/BackLayout';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import Reviews from './Pages/Reviews';
import Support from './Pages/Support';
import Inventory from './Pages/Inventory';
import Reports from './Pages/Reports';
import Campaigns from './Pages/Campaigns';
import Categories from './Pages/Categories';
import ProductCreate from './Pages/ProductCreate';
import UserDashboard from './Pages/UserDashboard';
import UserOrders from './Pages/UserOrders';
import UserProfile from './Pages/UserProfile';
import UserAddress from './Pages/UserAddress';

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
            {
                path: 'products',
                element: <Products />,
            },
            {
                path: 'products/create',
                element: <ProductCreate />,
            },
            {
                path: 'categories',
                element: <Categories />,
            },
            {
                path: 'inventory',
                element: <Inventory />,
            },
            {
                path: 'orders',
                element: <Orders />,
            },
            {
                path: 'customers',
                element: <Customers />,
            },
            {
                path: 'reviews',
                element: <Reviews />,
            },
            {
                path: 'support',
                element: <Support />,
            },
            {
                path: 'reports',
                element: <Reports />,
            },
            {
                path: 'campaigns',
                element: <Campaigns />,
            },
            {
                path: 'settings',
                element: <Settings />,
            },
        ],
    },
    // User / Customer Dashboard Section
    {
        path: '/account',
        element: <BackLayout />,
        children: [
            {
                path: 'dashboard',
                element: <UserDashboard />,
            },
            {
                path: 'orders',
                element: <UserOrders />,
            },
            {
                path: 'profile',
                element: <UserProfile />,
            },
            {
                path: 'addresses',
                element: <UserAddress />,
            },
        ],
    },
];

export default back_routes;
