import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/ShareSpark.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const [t,setT]=useState("");

  const login = () => {
    alert("You Have Login Successfully!");
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setT(targetId);
    navigate(`/#${targetId}`);
  };
  console.log(t)

  return (
    <>
      <nav className="navbar">
        <div className="heading">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="links">
          <a
            href="/"
            className={`link  ${t===""?'active':""}`}
            onClick={(e) => handleScroll(e, "")}
          >
            Home
          </a>
          <a
            href="/#ourproduct"
            className={`link  ${t==="ourproduct"?'active':""}`}
            onClick={(e) => handleScroll(e, "ourproduct")}
          >
            OurProduct
          </a>
          <a
            href="/#subscription"
            className={`link  ${t==="subscription"?'active':""}`}
            onClick={(e) => handleScroll(e, "subscription")}
          >
            Subscription
          </a>
          <a
            href="/#testimonial"
            className={`link  ${t==="testimonial"?'active':""}`}
            onClick={(e) => handleScroll(e, "testimonial")}
          >
            Testimonial
          </a>
          <a
            href="/#give"
            className={`link  ${t==="give"?'active':""}`}
            onClick={(e) => handleScroll(e, "give")}
          >
            Give
          </a>
        </div>
        <div className="loginbtn">
          <button className="inloginbtn" onClick={login}>
            Login
          </button>
        </div>
        <div className="hamburger">
        <GiHamburgerMenu size={25}/>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
