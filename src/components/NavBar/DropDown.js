import React from 'react'
import { Link } from 'react-router-dom' ; 

const DropDown = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 py-5 bg-[#EAF8F9] sm:text-sm  font-semibold text-white-500 dark:text-gray-300">
            <Link
              to="/home"
              className="hover:text-yellow-300 transition hover:cursor-pointer"
            >
              Home
            </Link>
            <Link to="/blogs"  className="hover:text-yellow-300 transition hover:cursor-pointer">Blogs</Link>
            <Link to="/about"  className="hover:text-yellow-300 transition hover:cursor-pointer">About</Link>
            <Link to="/contact"  className="hover:text-yellow-300 transition hover:cursor-pointer">Contact Us</Link>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  font-medium rounded-lg text-sm px-6 py-2.5 text-center  ">Login</button>
          </div>
  )
}

export default DropDown