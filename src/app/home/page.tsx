// pages/index.js or components/Page.js
"use client";
import React, { useEffect, useState } from "react";

import "./home.css"; // Import the CSS file for styles
import Footer from "@/components/footer/Footer";
import "../../images/vision.png";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scroll");
      if (container) {
        const isAtBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        if (isAtBottom) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
        }
      }
    };

    const container = document.getElementById("scroll");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div id="scroll">
      <section className="mars-section">
        <div className="content-wrapper">
          <div className="about-us">
            We bring together a growing team of dedicated individuals from the
            diverse fields of Engineering, Science, Design, and Business to
            design the next generation of Martian rovers and represent the
            National University of Singapore at international robotics
            competitions.
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="content-wrapper">
          <div className="vision-content">
            <div className="text-container">
              <h2>Mission</h2>
              <p>
                To be the first Singaporean & South East Asian team to qualify &
                win the University Rover Challenge 2025.
              </p>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/closeup-picture-text-mission-vision_875000-69.jpg?size=626&ext=jpg"
              alt="Your Image Description"
              width={300}
            />
          </div>

          <div className="vision-content">
            <img
              src="https://img.freepik.com/premium-photo/closeup-picture-text-mission-vision_875000-69.jpg?size=626&ext=jpg"
              alt="Your Second Image Description"
              width={300}
            />
            <div className="text-container">
              <h2>Vision</h2>
              <p style={{ fontSize: "1.1rem" }}>
                Akin to the pioneering rovers on Mars, our team&apos;s spirit
                embodies the values of Curiosity, Perseverance, and Ingenuity.
                We strive to explore, innovate, and overcome adversities just as
                our robotic counterparts do on the Red Planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="content-wrapper">
          <div className="vision-content">test</div>
        </div>
      </section>

      <Footer isVisible={showFooter} />
    </div>
  );
};

export default Page;
