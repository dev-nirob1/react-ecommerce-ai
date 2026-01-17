import FrontLayout from './Layout/FrontLayout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';

const front_routes = [
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'product/:id',
                element: <ProductDetails />,
            },
            // Other frontend routes will go here
        ],
    },
];

export default front_routes;
