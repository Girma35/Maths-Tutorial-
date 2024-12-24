import React from "react";
import { NavbarLinks } from "../menu.js";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      
   {/* Logo Design */}
<a href="/" className="flex items-center text-black hover:text-gray-800 transition duration-300">
  <h1 className="text-3xl font-semibold tracking-wide">Maths</h1>
</a>



      {/* NavLink menu */}
      <div className="hidden md:flex space-x-10 left-2">
        {NavbarLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:underline transition duration-200"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Sign in and Sign Up */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button className="px-6 py-3 text-black font-bold rounded-md shadow-md hover:underline transition duration-300">
          Sign In
        </button>
        <button className="px-6 py-3 hover:bg-orange-600 bg-orange-500 text-white font-bold rounded-md shadow-md transition duration-300">
          Sign Up
        </button>
      </div>

    </div>
  );
};

export default Navbar;
