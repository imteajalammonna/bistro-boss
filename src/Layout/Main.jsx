import { Outlet } from "react-router-dom"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"

function Main() {

    return (<>
        <Header></Header>
        <div className='container mx-auto'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
    )
}

export default Main
