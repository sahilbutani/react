import React from "react";
import Slider1 from "../Images/Slider/Slider1.png";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="homemid features">
        <span className="featuresname">OUR BLOG</span>
        <h1>
          <center>Check Our<span className="subpart"> Latest Blog</span></center>
        </h1>
      </div>
      <div className="testperson">
        <div className="person">
          <img className="testimg" src={Slider1} alt="" />
          <div className="date">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="calender-img"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <p>27/02/2024</p>
          </div>
          <div>
            <h2>The State of Church Giving: Trends and Statistics</h2>
          </div>
          <div>
            <h5>
              Here are the most important (and often surprising) trends in
              church giving to know as you lead and manage your ministry in
              2024.
            </h5>
          </div>
          <div className="read-more">
              Read More <span className="animate-read">{">>"}</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonial;
