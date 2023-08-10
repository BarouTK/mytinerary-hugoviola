import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href=''>Profile</Link></li>
                        <li><Link>Travels</Link></li>
                        <li><Link>Settings</Link></li>
                    </ul>
                </div>
                <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost normal-case text-3xl max-w-md ">My Tinerary</a>
            </div>

            <div className="navbar-end px-1 mx-1">
                <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost" to='/'>Home</Link>
                <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost" to='./CityFiltre.jsx'>Cities</Link>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info text-white"> <FaUserAlt /> Login </button>
                <div className="avatar online">
                    <div className="w-20 mx-1 rounded-xl">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar