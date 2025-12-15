import React from "react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo-desa.png";


const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 navbar flex items-center justify-between p-4 bg-blue-700 shadow-md">
        <img src={logo} alt="" width="50px" height="50px" />
        <ul className="flex gap-7 font-semibold mr-20 text-lg text-white">
          <li className="text-2xl">
            <a href="#" className="hover:underline decoration-2 underline-offset-4 transition">
              Home
            </a>
          </li>
          <li className="text-2xl">
            <a href="#" className="hover:underline decoration-2 underline-offset-4 transition">
              Profile Desa
            </a>
          </li>
          <li className="text-2xl">
            <a href="#" className="hover:underline decoration-2 underline-offset-4 transition">
              Infografis
            </a>
          </li>
          <li className="text-2xl">
            <a href="#" className="hover:underline decoration-2 underline-offset-4 transition">
              Berita
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
