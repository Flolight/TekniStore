import React from 'react'
import { Link } from "react-router-dom"

const SideBar = () => {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed bg-white flex flew-wrap shadow-xl items-center justify-between relative z-10 py-4 px-6">
                <div className="px-0 flex flew-wrap items-center justify-between w-full mx-auto">
                    <button className="cursor-pointer text-black opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link>
                    TekniStore
                    </Link>
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            
                        </li>
                        <li className="inline-block relative">
                            
                        </li>
                    </ul>
                    <div
                    className={
                    "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                    collapseShow
                    }
                    ></div>
                </div>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    <li className="items-center">
                        <Link className="text-green-500 hover:text-green-600 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Dashboard
                        </Link>
                    </li>
                    <li className="items-center">
                        <Link className="text-green-500 hover:text-green-600 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-user-circle opacity-75 mr-2 text-sm"></i>Account
                        </Link>
                    </li>
                    <li className="items-center">
                        <Link className="text-green-500 hover:text-green-600 text-xs uppercase py-3 font-bold block">
                        <i className="fas fa-tools opacity-75 mr-2 text-sm"></i>Tools
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default SideBar;