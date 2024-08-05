"use client";
import React, { useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
import "./home.css";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { bind, unbind } = createScrollSnap(
        containerRef.current,
        {
          snapDestinationX: "0%",
          snapDestinationY: "50%",
          timeout: 100,
          duration: 300,
          threshold: 0.9,
          snapStop: false,
          easing: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t), // easeInOutQuad
        },
        () => console.log("element snapped")
      );

      // Bind the scroll snap
      bind();

      // Cleanup function to unbind the scroll snap when component unmounts
      return () => {
        unbind();
      };
    }
  }, []);

  return (
    <div ref={containerRef}>
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
    </div>
  );
};

export default Page;
