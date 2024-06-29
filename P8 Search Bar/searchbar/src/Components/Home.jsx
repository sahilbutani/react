import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [res, setRes] = useState([]);
  const [originalVal,setoriginalVal]=useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setRes(response.data.products);
        setoriginalVal(response.data.products); //ni6 na func ma apde setRes ni value change kriye 6iye etle same another state banavyu
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(res);

  const handleSearch = (val) => {
    setSearch(val);//search ma value put kri.
    var result = [];

    if (val) {
      result = res.filter((user) => {
        return user.title?.toLowerCase().includes(val) || user.description?.toLowerCase().includes(val);
      });//result ma title and desciption jo match thse to filter krse.
    } else {
      result=originalVal //nhitr original home page ni value j rakhse filter nhi thay.
    }

    setRes(result);
  };

  return (
    <>
      <h1 className="flex justify-center font-bold text-3xl mt-4">
        Product Mart
      </h1>
      <div className="mx-80 mt-8">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Any Product..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {res?.map((a, index) => {
        return (
          <>
            <div key={index} className="flex justify-center item-center mt-12">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <span>
                  <figure className="max-w-lg">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={a.images}
                      alt=""
                    />
                  </figure>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {a.title}
                  </h5>
                </span>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {a.description}
                </p>
                <div className="flex space-x-28">
                  <h6>{a.warrantyInformation}</h6>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {a.price}$
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
