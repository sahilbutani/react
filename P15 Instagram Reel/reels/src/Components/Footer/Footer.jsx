import React from "react";
import "./Footer.css";
import { IoIosHeart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Footer = ({ channel, song, likes, comment, shares }) => {
  return (
    <div className="video-footer">
      <div className="video-txt">
        <h6>
        <div className="channel">
          <div>{channel}</div><div className="song">{song}</div>
          </div>
          <button className="followbtn">
            <h6>Follow</h6>
          </button>
        </h6>
      </div>

      <div className="footerbtn">
        <div className="flexbox">
          <IoIosHeart size={30} />{likes}
        </div>
        <div className="flexbox">
          <MdMessage size={30}/>{comment}
        </div>
        <div className="flexbox">
          <IoSend size={30}/>{shares}
        </div>
      </div>
    </div>
  );
};

export default Footer;
