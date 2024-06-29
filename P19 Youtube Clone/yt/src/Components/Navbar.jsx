import React from "react";
import { AiFillAudio } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-16">
        <div className="flex justify-center items-center">
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center mr-1 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <img
            className="h-18 w-32"
            src="https://imgs.search.brave.com/frZyxnnD-b90PGveJLCRC5RlTvuMnqhUl77-7NK3FOI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzAzLzk4LzY0/LzM2MF9GXzQwMzk4/NjQ5OV9oQjd6ZmdP/WGV6UmVBMHNLa3hs/MzRSb1Q5VGJOa2Jw/SC5qcGc"
            alt="YouTube"
          />
        </div>

        <div className="flex items-center w-[40%] gap-2">
          <div className="relative w-full">
            <input
              type="search"
              id="location-search"
              className="block p-2 pl-5 w-full z-20 text-sm text-gray-900 bg-white rounded-full border border-gray-300 focus:ring-blue-100 focus:border-blue-400 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-black"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2 text-sm font-medium text-black bg-gray-100 rounded-e-full border border-gray-200 hover:bg-grey-200 focus:outline-none focus:bg-gray-200 dark:bg-gray-600 dark:hover:bg-black dark:focus:ring-blank"
            >
              <svg
                className="w-9 h-4"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
           
          </div> 
          <button className="p-1 bg-gray-200 rounded-full border border-gray-300 dark:bg-gray-700 focus:outline-none focus:bg-gray-300">
          <AiFillAudio  size={22}/></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
