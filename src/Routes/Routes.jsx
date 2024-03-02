import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/Shop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "/shop",
                element: <OurShop></OurShop>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/order/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            }
        ]
    }
]);