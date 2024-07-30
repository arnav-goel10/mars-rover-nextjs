import React from "react";
import "./footer.css";
import mail from "@/images/mail.svg";
import location from "@/images/location.svg";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <Link href="/contact" className="contact-link">
          Contact Us
        </Link>

        <div className="footer-row">
          <Image src={mail} alt="a" /> : roverteam.nus@gmail.com
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-title">Address</div>
        <div className="footer-row">
          <Image src={location} alt="a" /> : EW1A, 1 Engineering Drive 2,
          Singapore 117576
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-title">Socials</div>
        <div className="footer-row">Row</div>
      </div>
    </div>
  );
};

export default Footer;
