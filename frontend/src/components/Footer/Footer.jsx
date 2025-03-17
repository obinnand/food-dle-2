import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            veritatis reiciendis qui nihil saepe corrupti quod! Quasi ab id
            reiciendis molestiae exercitationem voluptate, animi dolore esse,
            similique quis quos nam!
          </p>
          <div className="footer-social-icons">
            <a href="#">
              {" "}
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="#">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="#">
              {" "}
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOCH</h2>
          <ul>
            <li>
              <a href="tel:08119211645">+234-8119-211-645</a>
            </li>
            <li>
              <a href="">obinnandor@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2025 obinna.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
