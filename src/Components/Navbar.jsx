import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const handleSmScreen = () => {
    console.log("Hamburger menu clicked");
  }
  return (
    <div className="bg-white shadow-md px-12 py-4 z-10 fixed top-0 left-0 right-0 opacity-90">
      <div className="flex flex-row items-center justify-between w-full mx-auto">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-teal-600">MyBrand</h1>

        <div className='hidden sm:flex gap-8 items-center '>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-teal-600 cursor-pointer">Home</li>
            <li className="hover:text-teal-600 cursor-pointer">About</li>
            <li className="hover:text-teal-600 cursor-pointer">Services</li>
            <li className="hover:text-teal-600 cursor-pointer">Contact</li>
          </ul>

          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Login
          </button>
        </div>

        {/* Hamburger for small screens only */}
        <div className="sm:hidden">
          <RxHamburgerMenu className="text-2xl cursor-pointer" onClick={handleSmScreen}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
