import { FaCalendarAlt, FaCalendarCheck, FaCartPlus, FaHome, FaList, FaPhone, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    // const isAdmin = true;
    return (
        <div className="min-h-screen flex">
            <div className="w-64  bg-slate-400 flex flex-col items-center">
                <Link to={'/'}>
                    <div className="flex my-10 flex-col justify-center cormorant-garamond-regular">
                        <span className="text-black text-xl md:text-2xl cormorant-garamond-semibold mb-0">BISTRO BOSS</span>
                        <span className="text-black text-lg md:text-2xl cormorant-garamond-medium">Restaurant</span>
                    </div>
                </Link>
                <div className="flex flex-col space-y-3 text-lg font-medium">
                    {
                        isAdmin ? <>
                            <NavLink  to="/dashboard/admin" className="flex items-center" end><FaHome className="mx-2"></FaHome>Admin Home</NavLink>
                            <NavLink to="/dashboard/addItem" className="flex items-center"><MdLibraryAdd className="mx-2"></MdLibraryAdd>Add Items</NavLink>
                            <NavLink to="/dashboard/manageItem" className="flex items-center"><FaList className="mx-2"></FaList>Manage Items</NavLink>
                            <NavLink to="/dashboard/manageBookings" className="flex items-center"><FaCalendarCheck className="mx-2"></FaCalendarCheck>Manage Bookings</NavLink>
                            <NavLink to="/dashboard/users" className="flex items-center "><FaUsers className="mx-2"></FaUsers>All Users</NavLink>
                        </> : <>
                            <NavLink to="/dashboard/" className="flex items-center" end><FaHome className="mx-2"></FaHome>Dashboard Home</NavLink>
                            <NavLink to="/dashboard/reservation" className="flex items-center"><FaCalendarAlt className="mx-2"></FaCalendarAlt> Reservation</NavLink>
                            <NavLink to="/dashboard/cart" className="flex items-center"><FaCartPlus className="mx-2"></FaCartPlus>My Cart</NavLink>
                            <NavLink to="/dashboard/bookings" className="flex items-center"><FaCalendarCheck className="mx-2"></FaCalendarCheck>My Bookings</NavLink></>
                    }
                    <div className="divider"></div>
                    <div className="flex flex-col space-y-3 text-lg font-medium divide-gray-700">
                        <NavLink to="/" className="flex items-center"><FaHome className="mx-2"></FaHome>Home</NavLink>
                        <NavLink to="/menu" className=" flex items-center "><FaList className="mx-2"></FaList>Menu</NavLink>
                        <NavLink to="/shop" className=" flex items-center "><FaCartPlus className="mx-2"></FaCartPlus>Shop</NavLink>
                        <NavLink to="/contact" className=" flex items-center "><FaPhone className="mx-2"></FaPhone>Contact Us</NavLink>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;