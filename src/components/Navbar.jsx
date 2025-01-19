import React, { useState } from "react";
import hat from "../assets/hat.png";
import logo from "../assets/logo.png";
import party from "../assets/party gif.gif";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex justify-between items-center w-11/12 mx-auto pt-2 h-[72px] ">
      <div className="flex items-center relative">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[200px] relative" />

        {/* Hat */}
        <img
          src={hat}
          alt="Hat"
          className="w-[35px] absolute top-[-10px] -left-[17px] scale-x-[-1] -rotate-12 "
        />

        {/* Party effect */}
        <img
          src={party}
          alt="Party"
          className="w-[200px] absolute -top-[80px] -left-[10px] -z-10 "
        />
      </div>
      <nav className="flex items-center">
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-[72px] left-0 w-full gap-6 bg-white shadow-lg flex-col lg:flex lg:flex-row lg:static lg:w-auto lg:shadow-none lg:bg-transparent lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-8 font-semibold p-4 lg:p-0">
            <a href="">
              <li>Home</li>
            </a>
            <a href="" className="flex items-center gap-1">
              <li>Our Services</li>
              <FaAngleDown size={12} />
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="">
              <li>Contact Us</li>
            </a>
            <a href="">
              <li>About us</li>
            </a>
          </ul>
          <div className="flex justify-center items-center mt-4 lg:mt-0 gap-6  mb-4 lg:mb-0">
            <CiSearch size={30} />
            <button className="w-36 h-11 bg-[#FFA229] text-white rounded font-bold">
              Talk An Expert
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
