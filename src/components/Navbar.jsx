import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-nav box-shadow py-3">
      <div className="container mx-auto w-full max-w-screen-lg px-2 ">
        <nav className="flex justify-between items-center">
          <div className="h-25 w-20 mt-3 ">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <ul className="hidden md:flex space-x-6 font-medium text-lg  ">
            <li className=" hover:text-heading">
              <a href="/About">About us</a>
            </li>
            <li className=" hover:text-heading">
              {" "}
              <a href="/Services">Services</a>
            </li>
            <li className=" hover:text-heading">
              {" "}
              <a href="/Products">Products</a>
            </li>
            <li className=" hover:text-heading">
              <a href="/Contact">Our Global Pressence</a>
            </li>
            <li className=" hover:text-heading">
              <a href="/Content">Blog</a>
            </li>
          </ul>
          <a href="/Speak" className="hidden md:flex">
            <button className="btn">Speak to us</button>
          </a>
          <button className="md:hidden" onClick={toggle}>
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Menu_Alt_01">
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </nav>
        {/* mobile nav */}
        {open && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-6 font-medium items-center text-lg toggleMenu py-6">
              <li className=" hover:text-heading">
                <a href="/About">About us</a>
              </li>
              <li className=" hover:text-heading">
                {" "}
                <a href="/Services">Services</a>
              </li>
              <li className=" hover:text-heading">
                {" "}
                <a href="/Products">Products</a>
              </li>
              <li className=" hover:text-heading">
                <a href="/Contact">Our Global Pressence</a>
              </li>
              <li className=" hover:text-heading">
                <a href="/Content">Blog</a>
              </li>
              <a href="/Speak">
                <button className="btn">Speak to us</button>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
