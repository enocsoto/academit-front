import { createBrowserRouter } from "react-router-dom";

import { Car } from "../pages/Car";
import { Categories } from "../pages/Categories";
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { LayoutPublic } from "../layout/LayoutPublic";
import { NotFound } from '../pages/NotFound'
import { Price } from '../pages/Price'
import { Register } from '../pages/auth/Register'
import { Search } from "../pages/Search";
import { Javascript } from "../pages/Javascript";
import { AuthLayout } from "../layout/AuthLayout";
import { Login } from "../pages/auth/Login";
import { ForgetPassword } from "../pages/auth/ForgetPassword";
import { ChangePassword } from "../pages/auth/ChangePassword";

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
        path: '/price',
        element: <Price />,
      },

      {
        path: '/car',
        element: <Car />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/javascript',
        element: <Javascript />
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/reset-password',
        element: <ForgetPassword />,
      },
      {
        path: '/change-password/:token',
        element: <ChangePassword />,
      },
    ]
  }
])