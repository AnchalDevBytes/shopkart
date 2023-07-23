import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-700 py-10 text-slate-200 flex flex-col">
      <div className="flex justify-around items-center">
        <div onClick={() => navigate('/')}>
          <img className="max-h-64" src="/images/logo-no-background.svg" alt="" />
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-2xl">
            <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:underline hover:underline-offset-8 active:text-pink-400">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 text-xl items-center">
          <span>Social Media</span>
          <ul className="flex justify-center items-center gap-5 text-4xl">
            <li className="active:text-pink-400">
              <NavLink to="#">
                <AiFillTwitterCircle />
              </NavLink>
            </li>
            <li className="active:text-pink-400">
              <NavLink to="#">
                <AiFillGithub />
              </NavLink>
            </li>
            <li className="active:text-pink-400">
              <NavLink to="#">
                <AiFillLinkedin />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
            <NavLink to="/cart" role="button" className="relative flex">
              <FaOpencart size="68px" className="active:text-pink-400 text-slate-200" />
              <span class="absolute right-0 top-0 rounded-full bg-red-500 w-6 h-6 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                5
              </span>
            </NavLink>
          </div>
          <p>Shop More btn</p>
        </div>
      </div>
      <div className="flex items-center justify-center text-xl font-extralight">
        <span>Copyright @Anchalraj - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
