import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

function Navbar() {
  return (
    <nav className=" font-[poppins] flex justify-between px-8 py-4 items-center bg-[#EAF8F9]   dark:bg-gray-900 ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 xl:gap-2 hover:cursor-pointer">
        <img src={Logo} alt="logo" className=" h-7 sm:h-8 md:h-9 xl:h-10" />
        <h1 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-600 dark:text-white">
          Healing
        </h1>
      </Link>
      <div className="hidden sm:block">
        <div className="flex items-center sm:gap-6 md:gap-10 lg:gap-20  ">
          {/* Links */}

          <div className=" flex  items-center gap-5  lg:gap-10  sm:text-sm md:text-base font-semibold text-gray-500 dark:text-gray-300">
            <Link
              to="/home"
              className="hover:text-yellow-300 transition hover:cursor-pointer"
            >
              Home
            </Link>
            <Link to="/blogs"  className="hover:text-yellow-300 transition hover:cursor-pointer">Blogs</Link>
            <Link to="/about"  className="hover:text-yellow-300 transition hover:cursor-pointer">About</Link>
            <Link to="/contact"  className="hover:text-yellow-300 transition hover:cursor-pointer">Contact Us</Link>
          </div>

          {/* Login Button */}

          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-2.5 text-center mr-2 ">Login</button>
        </div>
      </div>

      <div className='sm:hidden'>
      <svg className="w-6 h-6 text-gray-500 hover:text-yellow-400 hover:cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
      </div>

    </nav>
  );
}

export default Navbar;
