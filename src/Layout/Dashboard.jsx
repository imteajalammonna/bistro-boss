import { FaCartPlus, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-64  bg-slate-400 flex flex-col items-center">
                <div className="flex my-10 flex-col justify-center cormorant-garamond-regular">
                    <span className="text-black text-xl md:text-2xl cormorant-garamond-semibold mb-0">BISTRO BOSS</span>
                    <span className="text-black text-lg md:text-2xl cormorant-garamond-medium">Restaurant</span>
                </div>
                <div className="flex flex-col">
                    <NavLink to="/dashboard" className="flex items-center"><FaHome className="mx-2"></FaHome>Home</NavLink>
                    <NavLink to="/dashboard" className="flex items-center"><FaHome className="mx-2"></FaHome>Home</NavLink>
                    <NavLink to="/dashboard/cart" className="flex items-center"><FaCartPlus className="mx-2"></FaCartPlus>My Cart</NavLink>
                    <NavLink to="/dashboard/" className="flex items-center"><FaHome className="mx-2"></FaHome>Home</NavLink>
                </div>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;