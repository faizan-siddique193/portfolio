import React from "react";
import { socialLinks, navbarData } from "../constant/index";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <footer className="w-full py-5 font-sans border-t drop-shadow-lg border-accent ">
      <div className="flex justify-center flex-col items-center space-y-5 sm:space-y-7 py-10">
        <h1 className="text-2xl text-accent md:font-bold font-semibold md:text-4xl">
          Faizan siddique
        </h1>
        {/* navlink */}
        <ul className="text-white flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navbarData.map((value, index) => (
            <li key={index} className="md:text-lg text-sm">
              <NavLink smooth to={`/#${value.link}`}>
                {value.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* social links */}
        <ul className="text-white flex gap-x-5">
          {socialLinks.map((value) => (
            <li
              key={value.id}
              className="md:text-lg text-md border rounded-full p-2  hover:text-accent hover:bg-white transition-all duration-200 ease-in-out"
            >
              <a href={value.link}>{<value.icon />}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-white bg-black text-center md:text-start  mt-5 px-2">
        © 2024 Faizan Siddique. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;