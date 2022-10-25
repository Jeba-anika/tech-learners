import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='lg:mx-20'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                     <img className='logo-style' src='https://i.ibb.co/HVk8f7Y/TL-1.png'></img>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Tech Learners</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='mr-8'><Link to='/'>Home</Link></li>
                        <li className='mr-8'><Link to='/courses'>Courses</Link></li>
                        <li className='mr-8'><Link>FAQ</Link></li>
                        <li className='mr-8'><Link>Blog</Link></li>                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn btn-outline btn-warning">Login</Link>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;