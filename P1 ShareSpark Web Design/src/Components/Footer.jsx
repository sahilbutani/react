import React from "react";
import ShareSpark from "../Images/ShareSparkFooter.png";
import { MdFacebook, MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="subfooter">
        <div className="footdiv1">
          <div>
            <img className="sharespark" src={ShareSpark} alt="" />
          </div>
          <div className="sharetext">
            <span className="sharesubtext">
              Simplify Generosity: Effortless Giving for organization Members
              Anytime, Anywhere.
            </span>
          </div>
          <div className="followb">
            <span className="follow">FOLLOW US</span>
            <div className="social">
              <div className="socialbtn">
                <AiOutlineTwitter size={35} />
              </div>
              <div className="socialbtn">
                <AiFillInstagram size={35} />
              </div>
              <div className="socialbtn">
                <MdFacebook size={35} />
              </div>
            </div>
          </div>
        </div>
        <div className="footdiv2">
          <div className="follow">CONTACT</div>
          <div className="information">
            <div className="info">
              <FiPhoneCall /> <span className="infotxt">+1 (720) 507-8618</span>
            </div>
            <div className="info">
              <MdOutlineMailOutline size={20} />
              <span className="infotxt">info@altiro.io</span>
            </div>
            <div className="info">
              <FaMapMarkerAlt size={22} />
              <span className="infotxt">
                2921 W 38th Ave #330, Denver, Colorado 80211 US
              </span>
            </div>
          </div>
        </div>
        <div className="footdiv3">
          <div className="follow">OUR NEWSLETTER</div>
          <div className="subtxt">
            Subscribe to our newsletter and get update in your inbox for future
            plan
          </div>
          <div className="email">
            <input
              className="emtxt"
              type="text"
              name="email"
              placeholder="Enter email Address"
            />
          </div>
          <button className="subs">Subscribe</button>
        </div>
      </div>
      <div className="end">
        <div>
          <span className="endtxtleft">
            Copyright ©2024 Soften Theme by{" "}
            <span className="subpart">ShareSpark</span>. All Rights Reserved
          </span>
        </div>
        <div className="privacy">
          <div className="policy">Privacy Policy</div>
          <div className="terms">Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
