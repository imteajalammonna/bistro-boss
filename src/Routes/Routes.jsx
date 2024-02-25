import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/Shop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
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
                path: "order/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
]);