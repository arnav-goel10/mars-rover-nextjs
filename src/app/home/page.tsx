// pages/index.js or components/Page.js
"use client";
import React, { useEffect, useState } from "react";

import "./home.css"; // Import the CSS file for styles
import Footer from "@/components/footer/Footer";

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
          <div className="vision-content">test</div>
        </div>
      </section>
      <Footer isVisible={showFooter} />
    </div>
  );
};

export default Page;
