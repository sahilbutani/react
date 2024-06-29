import React from "react";
import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { FaCamera } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="video-header">
        <IoIosArrowBack size={32} />
        <h3>Reel</h3>
        <FaCamera size={27}/>
      </div>
    </>
  );
};

export default Header;
