import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-green-600">REACT .</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contacts</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-60 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-green-600">REACT .</h1>
        <li className="p-4 border-b border-gray-600 ">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resource</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
