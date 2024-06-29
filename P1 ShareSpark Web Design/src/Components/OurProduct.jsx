import React from "react";
import Feature1 from "../Images/Feature1.png";
import Feature2 from "../Images/Feature2.png";
import Feature3 from "../Images/Feature3.png";
import Product1 from "../Images/Product1.png";
import Product2 from "../Images/Product2.png";
import Product3 from "../Images/Product3.png";

import extraimg1 from "../Images/dotImg.png";
import extraimg2 from "../Images/ArrowImgOrange.png";
import extraimg3 from "../Images/ArrowImgBlue.png";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const OurProduct = () => {
  return (
    <div className="homemid">
      <div className="features">
        <span className="featuresname">FEATURES</span>
        <h1>
          <center>
            Get Amazing <span className="subpart"> Features</span>
          </center>
        </h1>
      </div>
      <div className="fdiv">
        <div className="box">
          <div className="boxfimg">
            <img src={Feature1} alt="" />
          </div>
          <div className="boxftitle">
            <span>Recurring Payments</span>
          </div>
          <div className="boxfspan">
            <span>
              Streamline Tithes and Offerings with Scheduled Contributions
            </span>
          </div>
        </div>
        <div className="box">
          <div className="boxfimg">
            <img src={Feature2} alt="" />
          </div>
          <div className="boxftitle">
            <span>Easy to Use</span>
          </div>
          <div className="boxfspan">
            <span>
              We take the guesswork out of managing members and donations so you
              can focus on what truly matters—nurturing your community and
              fulfilling your mission.
            </span>
          </div>
        </div>
        <div className="box">
          <div className="boxfimg">
            <img src={Feature3} alt="" />
          </div>
          <div className="boxftitle">
            <span>Everything in Sync</span>
          </div>
          <div className="boxfspan">
            <span>
              Quickly link QuickBooks and organize donors with ease for
              streamlined organization management.
            </span>
          </div>
        </div>
      </div>
      <div className="Product1">
        <div className="subpro1">
          <div>
            <PhotoProvider>
              <PhotoView src={Product1}>
                <img
                  className="proimg1"
                  src={Product1}
                  style={{ objectFit: "cover" }}
                  alt="Product"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="proright1">
            <h3 className="protitle1">
              <span>
                Effortlessly Manage{" "}
                <span className="subpart">Recurring Gifts</span>
              </span>
            </h3>
            <span className="prospan1">
              Keep track of continuous support through our Recurring Donations
              feature. View, adjust, and monitor ongoing contributions in one
              convenient place, ensuring a steady flow of support for your
              organization missions. Simplify your financial planning with
              predictable income.
            </span>
          </div>
        </div>
      </div>
      <div className="Product2">
        <img className="extraimg1" src={extraimg1} alt="" />
        <img className="extraimg2" src={extraimg2} alt="" />
        <img className="extraimg3" src={extraimg3} alt="" />
        <img className="extraimg4" src={extraimg1} alt="" />
        <div className="rightpro2">
          <div>
            <h3 className="protitle2">
              <span>
                Insights Unlocked with{" "}
                <span className="subpart">Data Driven Dashboard</span>
              </span>
            </h3>
          </div>
          <span className="prospan2">
            Discover key insights and boost your donations with our Dashboard.
            It's designed to help you understand giving patterns, member
            engagement, and financial trends, enabling strategic decisions to
            enhance your organization funding and impact.
          </span>
        </div>
        <div className="leftpro2">
        <PhotoProvider>
              <PhotoView src={Product2}>
                <img
                  className="proimg2"
                  src={Product2}
                  style={{ objectFit: "cover" }}
                  alt="Product"
                />
              </PhotoView>
            </PhotoProvider>
        </div>
      </div>

      <div className="Product3">
        <div className="leftpro3">
        <PhotoProvider>
              <PhotoView src={Product3}>
                <img
                  className="proimg3"
                  src={Product3}
                  style={{ objectFit: "cover" }}
                  alt="Product"
                />
              </PhotoView>
            </PhotoProvider>
        </div>
        <div className="rightpro3">
          <div>
            <h3 className="protitle3">
              <span>
                Mobile Giving <span className="subpart">Made Easy</span>
              </span>
            </h3>
          </div>
          <span className="prospan3">
            Receive donations anytime, anywhere. Our streamlined mobile donation
            process enables your congregation to support your organization
            effortlessly with just a few taps. Safe, secure, and
            swift—facilitate giving with confidence and convenience.
          </span>
        </div>
      </div>

      <div className="Product4">
        <img className="extraimg1" src={extraimg1} alt="" />
        <img className="extraimg2" src={extraimg2} alt="" />
        <img className="extraimg3" src={extraimg3} alt="" />
        <img className="extraimg4" src={extraimg1} alt="" />
        <div className="rightpro4">
          <div>
            <h3 className="protitle4">
              <span>
                Manage Member <span className="subpart">Contributions</span>
              </span>
            </h3>
          </div>
          <span className="prospan4">
            Streamline management of member profiles and donations with this
            robust tool. Track engagement, monitor giving trends, and organize
            donation types to support your community’s growth and stewardship.
          </span>
        </div>
        <div className="leftpro4">
        <PhotoProvider>
              <PhotoView src={Product1}>
                <img
                  className="proimg4"
                  src={Product1}
                  style={{ objectFit: "cover" }}
                  alt="Product"
                />
              </PhotoView>
            </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
