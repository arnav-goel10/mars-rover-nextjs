import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-heading">Follow us</div>
      <div className="footer-columns">
        <div className="footer-column">
          <a
            href="https://www.linkedin.com/company/nus-endeavour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/nusroverteam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
