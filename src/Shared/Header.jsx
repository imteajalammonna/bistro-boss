import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import userImg from "../assets/icon/user2.png"
import { AuthContext } from "../Providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    // console.log(user);
    const navLinks = <>
        <NavLink to="/" className="text-white px-3 py-2 rounded-md text-lg font-medium">Home</NavLink>
        <NavLink to="/contact" className="text-white px-3 py-2 rounded-md text-lg font-medium">Contact Us</NavLink>
        <NavLink to="/dashboard/" className="text-white px-3 py-2 rounded-md text-lg font-medium">Dashboard</NavLink>
        <NavLink to="/menu" className="text-white px-3 py-2 rounded-md text-lg font-medium">Our menu</NavLink>
        <NavLink to="/shop" className="text-white px-3 py-2 rounded-md text-lg font-medium">Our Shop</NavLink>
        {user ? <button className="text-white px-3 py-2 rounded-md text-lg font-medium uppercase" onClick={() => logOut()}> Logout</button> : <NavLink to="/login" className="text-white px-3 py-2 rounded-md text-lg font-medium">Login</NavLink>}
        <NavLink to="/dashboard/cart" className="pl-3 pr-6 py-2 inline-flex"><FaCartPlus className="text-3xl"></FaCartPlus> <div className="p-1 badge badge-secondary absolute ml-[22px]">+{cart.length}</div></NavLink>
        <NavLink to="/profile" className="flex-col md:flex-row justify-center md:flex items-center text-white">{user?.photoURL ? <img className="rounded-full h-14 w-14 ml-3" src={user?.photoURL} alt="" /> : <img
            className="h-12 ml-3"
            src={userImg}
            alt="Profile"
        />}{user?.email === 'imteajalammonna@gmail.com' &&
            <svg viewBox="0 0 12 13" width="22" height="22" fill="currentColor" title="Verified account" className="text-[#0850ff] bg-white rounded-full p-[.9px] absolute ml-12 mt-[36px]" ><title>Verified account</title><g transform="translate(-98 -917)"><path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path></g></svg>}</NavLink>
    </>
    return (
        <nav className="bg-[#151515] fixed bg-opacity-45 w-full z-10 ">
            <div className="max-w-7xl md:mx-auto py-1 md:py-2 mx-4">
                <div className="flex justify-between">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-center cormorant-garamond-regular">
                            <span className="text-white text-xl md:text-2xl cormorant-garamond-semibold mb-0">BISTRO BOSS</span>
                            <span className="text-white text-lg md:text-2xl cormorant-garamond-medium">Restaurant</span>
                        </div>
                        <div className="hidden text-white md:flex items-center justify-center font-inters uppercase font-medium">
                            {
                                navLinks
                            }

                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-200">
                            <HiMenuAlt3 className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}></HiMenuAlt3>
                            <RxCross2 className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}></RxCross2>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center flex-col justify-center font-inters uppercase font-medium">
                    {navLinks}
                </div>
            </div>
        </nav >
    );
};

export default Header;