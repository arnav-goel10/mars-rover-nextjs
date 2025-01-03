"use client";
import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Footer from "@/components/footer/Footer";

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
          <h1 className="mars-heading">
            Designing the <br />
            Future of Martian Rovers
          </h1>
          <p className="mars-subheading">
            Bringing Innovative Solutions for Mars Exploration
          </p>
          <div className="button-group">
            <a href="/contact" className="button button-dark">
              Join Us
            </a>
            <a href="/subsystems" className="button button-outline">
              Explore Our Subsystems
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="content-wrapper">
          <h2>Mission</h2>
          <p>
            To be the first Singaporean & South East Asian team to qualify & win
            the University Rover Challenge 2025.
          </p>

          <h2>Vision</h2>
          <p style={{ fontSize: "1.1rem" }}>
            Akin to the pioneering rovers on Mars, our team&apos;s spirit
            embodies the values of Curiosity, Perseverance, and Ingenuity. We
            strive to explore, innovate, and overcome adversities just as our
            robotic counterparts do on the Red Planet.
          </p>
        </div>
      </section>
      <section> test lomao</section>
      <section> test 2222</section>

      <Footer isVisible={showFooter} />
    </div>
  );
};

export default Page;
