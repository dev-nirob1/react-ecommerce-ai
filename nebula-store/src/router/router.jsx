import { createBrowserRouter } from 'react-router-dom';
import front_routes from '../zems/Front/front_routes';
import back_routes from '../zems/Back/back_routes';
import auth_routes from '../zems/Auth/auth_routes';

const router = createBrowserRouter([
    ...front_routes,
    ...back_routes,
    ...auth_routes,
]);

export default router;
