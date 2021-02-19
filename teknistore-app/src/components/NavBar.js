import React from 'react'
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown'

const NavBar = () => {
    return (
        <>
        
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-900">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <Link to="/">
                                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#">
                                    TekniStore
                                </a>
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
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/stock">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Stock
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gigs">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Gigs
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">
                                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        Profile
                                    </a>
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