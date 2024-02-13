import { Link } from "@inertiajs/react";
import DarkMode from "./DarkMode";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NavBar(auth){
    const [openNav, setOpenNav] = useState(false);

    function toggleNav(){
        setOpenNav(!openNav);
    }

    return(
        <nav className="navbar bg-white shadow-md px-6 sm:px-10 z-10 fixed top-0 flex-col items-start lg:items-center lg:flex-row">
            <div className="flex justify-between w-full lg:navbar-start">
                <a href='#' className="cursor-pointer w-14">
                    <img src="/images/Logo-PKM-TI.png" alt="w-full" />
                </a>
                <button onClick={toggleNav} className="block lg:hidden">
                    {!openNav ? 
                    <Bars3Icon className="w-10"/>
                    : <XMarkIcon className="w-10"/>
                    }
                </button>
            </div>

            <div className={`${openNav ? "flex" : "hidden"} w-full flex-col items-start py-4 lg:py-0 lg:flex lg:flex-row lg:justify-between lg:items-center duration-300`}>
                <div className="lg:navbar-center flex-col lg:flex">
                    <ul className="menu menu-vertical lg:menu-horizontal px-1">
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#about-us'>About Us</a>
                        </li>
                        <li>
                            <a href='#FaQ'>FAQ</a>
                        </li>
                        <li>
                            <a href='#contact-us'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-4 lg:flex-row lg:navbar-end lg:space-y-0 lg:space-x-4 lg:items-center">
                
                    <DarkMode />
                
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-medium bg-primary px-6 py-2 rounded-md text-white hover:text-white hover:bg-blue-lagoon dark:text-gray-400 dark:hover:text-white transition-all duration-300 "
                            >
                                Log in
                            </Link>
                
                            <Link
                                href={route('register')}
                                className="font-medium px-6 py-2 rounded-md text-primary outline outline-primary outline-2 -outline-offset-2 hover:text-white hover:bg-primary dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}