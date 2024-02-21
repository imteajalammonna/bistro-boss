import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import OurMenu from "../Pages/Menu/OurMenu";


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
        ]
    },
]);