import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import cart from "../assets/icon/cart.png"
import user from "../assets/icon/user2.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = <>
        <NavLink to="/" className="text-white px-3 py-2 rounded-md text-lg font-medium">Home</NavLink>
        <NavLink to="/contact" className="text-white px-3 py-2 rounded-md text-lg font-medium">Contact Us</NavLink>
        <NavLink to="/dashboard" className="text-white px-3 py-2 rounded-md text-lg font-medium">Dashboard</NavLink>
        <NavLink to="/menu" className="text-white px-3 py-2 rounded-md text-lg font-medium">Our menu</NavLink>
        <NavLink to="/shop" className="text-white px-3 py-2 rounded-md text-lg font-medium">Our Shop</NavLink>
        <NavLink to="/cart" className=""><img className="w-14" src={cart} alt="" /></NavLink>
        <NavLink to="/profile" className="flex-col md:flex-row justify-center md:flex items-center text-white">Sign Out<img className="h-12 ml-3" src={user} alt="" /></NavLink>
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