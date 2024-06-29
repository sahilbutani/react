import React from "react";
import Comic from "../Images/ComicLogo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="bg-gray-50 dark:bg-gray-700 max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <span
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Comic} className="h-10" alt="Comicfy" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Comicfy
              </span>
            </span>
            <div className="mx-12 p-2">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <span className="text-gray-900 dark:text-white hover:bg-cyan-600 p-[2px] hover:text-white hover:border-2 border-teal-900	 hover:rounded-lg">
                    <Link to="/">Home</Link>
                  </span>
                </li>
                <li>
                  <span className="text-gray-900 dark:text-white hover:bg-cyan-600 p-[2px] hover:text-white hover:border-2 border-teal-900	 hover:rounded-lg">
                    <Link to="/about">About</Link>
                  </span>
                </li>
                <li>
                  <span className="text-gray-900 dark:text-white hover:bg-cyan-600 p-[2px] hover:text-white hover:border-2 border-teal-900	 hover:rounded-lg">
                    <Link to="/Services">Services</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center align-center">
          <div>jsnksjn</div>
          <div>dwhjd</div>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
