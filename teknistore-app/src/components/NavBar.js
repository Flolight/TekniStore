import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-900">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-3 lg:static lg:block lg:justify-start">
                            <Link to="/">
                                <span className="text-2xl font-bold leading-relaxed inline-block py-2 whitespace-no-wrap uppercase text-white" href="#">
                                    TekniStore
                                </span>
                                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                            <li className="nav-item">
                                <Link to="/dashboard">
                                    <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stock">
                                    <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Stock
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gigs">
                                    <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Gigs
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">
                                    <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Profile
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>

        </>
    );
}
export default NavBar;