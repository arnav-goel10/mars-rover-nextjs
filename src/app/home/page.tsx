"use client"; // Add this line at the top of the file
import React from "react";
import "./home.css";
import mars from "../../images/mars.png";

const page = () => {
  return (
    <>
      <div className="home-container mars-img">
        <div className="content-wrapper">
          <div className="team-title">Team Endeavour</div>
          <div className="about-us">
            We bring together a growing team of dedicated individuals from the
            diverse fields of Engineering, Science, Design and Business to
            design the next generation of Martian rovers and represent the
            National University of Singapore at international robotics
            competitions.
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="content-wrapper">
          <div className="about-us"></div>
        </div>
      </div>
    </>
  );
};

export default page;
