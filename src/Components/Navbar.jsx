import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-12 py-4 z-10 fixed top-0 left-0 right-0 opacity-90">
      <div className="flex flex-row items-center justify-between w-full mx-auto">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-teal-600">MyBrand</h1>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">Home</li>
          <li className="hover:text-teal-600 cursor-pointer">About</li>
          <li className="hover:text-teal-600 cursor-pointer">Services</li>
          <li className="hover:text-teal-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Button */}
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
