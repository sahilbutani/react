import React from "react";
import Home from "./Home";
import OurProduct from "./OurProduct";
import Subscription from "./Subscription";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <span id=""><Home /></span>
      <span id="ourproduct"><OurProduct /></span>
      <span id="subscription"><Subscription /></span>
      <span id="testimonial"><Testimonial /></span>
      <span id="footer"><Footer /></span>
    </>
  );
};

export default Main;
