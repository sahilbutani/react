import React from "react";
import RightImg from "../Images/HomeRightImg.png";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="leftside">
          <h1>
            Increase <span className="subpart">Donations.</span>
          </h1>
          <h1>
            Inspire <span className="subpart">Unity.</span>
          </h1>
          <h3>
            Simplify Generosity: Effortless Giving for Members Anytime,
            Anywhere.
          </h3>
          <button className="leftbtn">Sign Up for Early Access</button>
        </div>
        <div className="rightside">
          <img className="rightimg" src={RightImg} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
