import React from "react";
import SubImg1 from "../Images/SubImg1.png";
import SubImg2 from "../Images/SubImg2.png";
import SubImg3 from "../Images/SubImg3.png";
import { FaRegCheckCircle } from "react-icons/fa";
// import Slider1 from '../Images/Slider/Slider1.png';
// import Slider2 from '../Images/Slider/Slider2.png';
// import Slider3 from '../Images/Slider/Slider3.png';
// import Slider4 from '../Images/Slider/Slider4.png';
// import Slider5 from '../Images/Slider/Slider5.png';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

const Subscription = () => {
  return (
    <div>
      <div className="homemid bgblack">
        <div className="features">
          <span className="featuresname white">PRICING PLAN</span>
          <h1 className="white">
            <center>Choose<span className="subpart"> Affordable Prices</span></center>
          </h1>
        </div>
        <div className="fdiv">
          <div className="mainbox">
            <div className="boxs">
              <div className="boxstxt">
                <span className="stitle">Basic Giving Platform</span>
                <div>
                  <span className="sspanstart">$0</span>
                  <span className="sspan">/Month</span>
                </div>
              </div>
              <div className="simghidden">
                <img className="simg" src={SubImg1} alt="" />
              </div>
            </div>
            <div className="boxsmid">
              <div className="boxmidspan">
                <span className="boxmidspan1">Basic analytics</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">2.5% + $0.25</span>
                  <span className="boxmidspan22">
                    {" "}
                    per transaction for credit/ debit cards
                  </span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">ACH/Bank</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">0.8% + $0.25</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">American Express</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">3.3% + $0.25</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />{" "}
              </span>{" "}
              <span className="tickspan">Basic analytics.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Customizable donation pages.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Automatic email receipts.</span>
            </div>
            <button className="leftbtn sbtn">Sign Up for Early Access</button>
          </div>

          <div className="mainbox">
            <div className="boxs">
              <div className="boxstxt">
                <span className="stitle">Enhanced Giving Platform</span>
                <div>
                  <span className="sspanstart">$29</span>
                  <span className="sspan">/Month</span>
                </div>
              </div>
              <div>
                <img className="simg" src={SubImg2} alt="" />
              </div>
            </div>
            <div className="boxsmid">
              <div className="boxmidspan">
                <span className="boxmidspan1">Basic analytics</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">2.3% + $0.20</span>
                  <span className="boxmidspan22">
                    {" "}
                    per transaction for credit/ debit cards
                  </span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">ACH/Bank</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">0.7% + $0.20</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">American Express</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">3.1% + $0.20</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">All Basic features.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Recurring donation management.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Text-to-give options.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Basic 24/7 email support.</span>
            </div>
            <button className="leftbtn sbtn">Sign Up for Early Access</button>
          </div>

          <div className="mainbox">
            <div className="boxs">
              <div className="boxstxt">
                <span className="stitle">Premium Giving Platform</span>
                <div>
                  <span className="sspanstart">$49</span>
                  <span className="sspan">/Month</span>
                </div>
              </div>
              <div>
                <img className="simg" src={SubImg3} alt="" />
              </div>
            </div>
            <div className="boxsmid">
              <div className="boxmidspan">
                <span className="boxmidspan1">Basic analytics</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">2.1% + $0.15</span>
                  <span className="boxmidspan22">
                    {" "}
                    per transaction for credit/ debit cards
                  </span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">ACH/Bank</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">0.5% + $0.15</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
              <div className="boxmidspan">
                <span className="boxmidspan1">American Express</span>
                <span className="boxmidspan2">
                  <span className="boxmidspan21">3.0% + $0.15</span>
                  <span className="boxmidspan22"> per transaction</span>
                </span>
              </div>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">All Enhanced features.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Premium analytics dashboard.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Advanced donor engagement tools.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan">Integration capabilities.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick hidden">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan hidden">
                Priority 24/7 support with phone and chat.
              </span>
            </div>
            <div className="tickmarkspan">
              <span className="tick hidden">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan hidden">Event and ticketing support.</span>
            </div>
            <div className="tickmarkspan">
              <span className="tick hidden">
                <FaRegCheckCircle size={25} />
              </span>
              <span className="tickspan hidden">Enhanced security features.</span>
            </div>
            <button className="leftbtn sbtn">Sign Up for Early Access</button>
          </div>
        </div>
      </div>
      <div>
        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Slider1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Slider2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Slider3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Slider4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={Slider5} alt=""/></SwiperSlide>
      </Swiper> */}
      </div>
    </div>
  );
};

export default Subscription;
