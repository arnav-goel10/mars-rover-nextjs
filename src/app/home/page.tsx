"use client";
import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Footer from "@/components/footer/Footer";
import vision from "../../images/vision.png";
import Image from "next/image";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);
  const visionRef1 = useRef<HTMLDivElement>(null);
  const visionRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scroll");
      if (container) {
        const isAtBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        setShowFooter(isAtBottom);
      }

      // Check if vision sections are in view
      [visionRef1, visionRef2].forEach((ref) => {
        if (ref.current && isElementInViewport(ref.current)) {
          ref.current.classList.add("animate");
        }
      });
    };

    const container = document.getElementById("scroll");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
            <div ref={visionRef1} className="image-container">
              <Image
                src={vision}
                alt="Your Image Description"
                width={300}
                height={250}
              />
            </div>
          </div>

          <div className="vision-content">
            <div ref={visionRef2} className="image-container">
              <Image
                src={vision}
                alt="Your Second Image Description"
                width={300}
                height={250}
              />
            </div>
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
