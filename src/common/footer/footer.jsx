import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-0 ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="mb-3">LUCA</h1>
            <p>Your perfect website choice to shop and choose trendy, cool, comfortable, cozy clothes!</p>
            <div className="d-flex">
              <div className="d-flex align-items-center mr-3">
                <i className="fab fa-google-play mr-2"></i>
                <span>Google Play</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fab fa-app-store-ios mr-2"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h2>About Us</h2>
            <ul className="list-unstyled">  
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h2>Contact Us</h2>
            <ul className="list-unstyled">
              <li>7000 New Cairo, Egypt</li>
              <li>Email: LUCA.help@gmail.com</li>
              <li>Phone: +1 1111 111 111</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
