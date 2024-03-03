import { Outlet, useLocation } from "react-router-dom"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import { useState } from "react";

function Main() {
    let container = useState('');
    const location = useLocation();
    if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
        container = ""
    }
    else {
        container = "container"
    }
    return (<>
        <Header></Header>
        <div className={`${container} mx-auto`}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
    )
}

export default Main
