import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/images/logo.png'
import GitLogo from '../../assets/images/git.png'
const Navbar = () => {

    const activeClass = "text-[#632EE3] font-semibold border-b-2 border-[#632EE3] transition-all duration-200";
    const normalClass = "hover:text-[#632EE3] transition-all duration-200";



    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start ml-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-8' src={Logo} alt="" />
                <Link to='/' className="font-bold text-xl bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">HERO.IO</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? activeClass : normalClass)}>Home</NavLink></li>
                    <li><NavLink to='/apps' className={({ isActive }) => (isActive ? activeClass : normalClass)}>Apps</NavLink></li>
                    <li><NavLink to='/installation' className={({ isActive }) => (isActive ? activeClass : normalClass)}>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end mr-8">
                <NavLink to='https://github.com/rousin2127' className="btn bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"><img src={GitLogo} alt="" /> Contribute</NavLink >
            </div>
        </div>
    );
};

export default Navbar;