import React, { useState } from "react";
import employee from "../Employee.json";
import Modal from "./Modal";
const Home = () => {

    const [open,setOpen]=useState(false);
    const [emp,setEmp]=useState(false);
    const [original,setOriginal]=useState(employee);
    const handleClick=((e,p)=>{
        e.preventDefault()//Page Reload nahi thay.
        setOpen(true)//Modal ni6na div ne click krta open thse.
        setEmp(p);//p change thai ne setEmp thi store thse.
    })
  return (
    <>
    <Modal open={open} setOriginal={setOriginal} setOpen={setOpen} emp={emp}/>
      {original.map((p, index) => {
        return (
          <>
            <div onClick={e=>{handleClick(e,p)}} className=" flex justify-center my-12">
              <div
                key={index}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-col items-center pt-10 pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={p.image}
                    alt=""
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {p.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {p.profession}
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
