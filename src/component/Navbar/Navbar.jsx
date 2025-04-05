import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation();
  return (
  

<nav class=" border-gray-200 bg-[#2C3E50] md:p-4 py-4 px-2">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
        <span class="self-center text-3xl font-bold whitespace-nowrap text-white text-center ">START FRAMEWORK</span>
    
   
    <div class="mt-3 w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex text-white text-xl ">
      <li>
        <Link
          to="/"
          className={`p-2 mx-2 rounded-md ${
            location.pathname === "/" ? "bg-[#1ABC9C] p-2 rounded-md " : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={` p-2 mx-2 rounded-md ${
            location.pathname === "/about" ? "bg-[#1ABC9C] p-2 rounded-md " : ""
          }`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/portfolio"
          className={` p-2 mx-2 rounded-md ${
            location.pathname === "/portfolio" ? "bg-[#1ABC9C] p-2 rounded-md " : ""
          }`}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={` p-2 mx-2 rounded-md ${
            location.pathname === "/contact" ? "bg-[#1ABC9C] p-2 rounded-md " : ""
          }`}
        >
          Contact
        </Link>
      </li>
       
         
      </ul>
    </div>
  </div>
</nav>

  )
}
