import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmScreen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 z-10 fixed top-0 left-0 right-0 ">
      <div className="flex flex-row items-center justify-between w-full mx-auto">
        <h1 className="text-2xl font-bold text-teal-600">MyBrand</h1>

        <div className='hidden sm:flex gap-8 items-center'>
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

        <div className="sm:hidden">
          <RxHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={handleSmScreen}
          />
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-3 w-full">
          <div className="flex flex-col items-center p-4 mx-auto w-11/12">
            <ul className="flex flex-col gap-4 text-gray-700 font-medium mb-4 ">
              <li className="hover:text-teal-600 cursor-pointer">Home</li>
              <li className="hover:text-teal-600 cursor-pointer">About</li>
              <li className="hover:text-teal-600 cursor-pointer">Services</li>
              <li className="hover:text-teal-600 cursor-pointer">Contact</li>
            </ul>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
