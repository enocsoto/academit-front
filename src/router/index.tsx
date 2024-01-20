import {  createBrowserRouter } from "react-router-dom";
import {Contact} from '../pages/Contact'
import {Home} from '../pages/Home'
import {Login} from '../pages/Login'
import {Price} from '../pages/Price'
import {Register} from '../pages/Register'
import {NotFound} from '../pages/NotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,

    },
    {
        path: '/contact',
        element: <Contact/>,
        
    },
    {
        path: '/login',
        element: <Login/>,
        
    },
    {
        path: '/price',
        element: <Price/>,
        
    },
     {
        path: '/register',
        element: <Register/>,
        
    },
     {
        path: '/*',
        element: <NotFound/>,
        
    },
])