import { createBrowserRouter } from "react-router-dom";

import { Car } from "../pages/Car";
import { Categories } from "../pages/Categories";
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { LayoutPublic } from "../layout/LayoutPublic";
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Price } from '../pages/Price'
import { Register } from '../pages/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/price',
                element: <Price />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/car',
                element: <Car />
            },
            {
                path: '/categories',
                element: <Categories />
            }
        ]
    },
])