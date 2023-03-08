import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Device from "./pages/Device";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVISE_ROUTE, SHOP_ROUTE} from "./utils/constance";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: DEVISE_ROUTE + '/:id',
        Component: <Device/>
    }
]