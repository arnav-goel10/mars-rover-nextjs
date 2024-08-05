import React from "react";
import "./home.css";

const page = () => {
  return (
    <>
      <div className="home-container mars">
        <div className="mars-wrapper">
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
        <div className="vision-wrapper"></div>
      </div>
    </>
  );
};

export default page;
