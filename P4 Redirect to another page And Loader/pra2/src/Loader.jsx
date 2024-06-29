import React from 'react'
import Loader from "react-js-loader";
import loader from "./Images/loader.webp";

Loader = () => {

    
  return (
    <div className='h-screen flex align-center justify-center'>
        <img src={loader} alt=""/>
    </div>
    
  )
}

export default Loader