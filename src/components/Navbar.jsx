import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-slate-700 px-32 py-2 text-slate-200 cursor-pointer">
      <div onClick={() => navigate("/")}>
        <img className="max-h-20" src="/images/logo-no-background.svg" alt="" />
      </div>
      <ul className="flex justify-center gap-16 text-xl items-center">
        <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
          <NavLink to="/contact">Contact us</NavLink>
        </li>
        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <NavLink to="/cart" role="button" className="relative flex">
            <FaOpencart size="32px" className="active:text-pink-400 text-slate-200" />
            <span class="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              5
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
