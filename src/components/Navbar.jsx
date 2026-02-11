import React from "react"
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
    <nav className="sticky top-0 z-0 bg-white text-gray-900 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
       
        <NavLink to="/" className="text-xl font-semibold hover:text-indigo-600 cursor-pointer transition">UserBay</NavLink>

        <ul className="hidden md:flex gap-8 text-sm">
          
          <li>
            <NavLink to="/" className="hover:text-indigo-600 cursor-pointer transition">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className="hover:text-indigo-600 cursor-pointer transition">About</NavLink>
          </li>

          <li>
            <NavLink to="/users" className="hover:text-indigo-600 cursor-pointer transition">Users</NavLink>
          </li>

          
          
          
        </ul>

        <div className="flex items-center gap-3 text-black">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
           
            className="px-4 py-2 text-sm font-medium bg-indigo-500  rounded-md text-white  hover:bg-indigo-600 transition"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  
    )
}
export default Navbar