"use client";
import React, { useEffect, useState } from "react";
import "./home.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("scroll");
      const navbar = document.querySelector(".navbar"); // Select the navbar element
      const firstSection = document.querySelector(".mars-section");

      if (container && navbar && firstSection) {
        // Check if at bottom to show footer
        const isAtBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        setShowFooter(isAtBottom);

        // Check if the first section is in view
        const rect = firstSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom >= window.innerHeight / 2) {
          navbar.classList.add("visible");
          navbar.classList.remove("hidden");
        } else {
          navbar.classList.add("hidden");
          navbar.classList.remove("visible");
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
    <>
      <NavBar />
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
            <h2>Test</h2>
            <p style={{ fontSize: "1.1rem" }}>LOREM IPSUM</p>
          </div>
        </section>

        <section className="goals-section">
          <div className="goals-header">
            <h2 style={{ fontWeight: "9000", fontSize: "3rem" }}>Our Goals</h2>
          </div>
          <div className="goals-content">
            <h2 className="section-title">Mission</h2>
            <p className="section-text">
              To be the first Singaporean & South East Asian team to qualify &
              win the University Rover Challenge 2025.
            </p>

            <h2 className="section-title">Vision</h2>
            <p className="section-text">
              Akin to the pioneering rovers on Mars, our team&apos;s spirit
              embodies the values of Curiosity, Perseverance, and Ingenuity. We
              strive to explore, innovate, and overcome adversities like our
              robotic counterparts on the Red Planet.
            </p>

            <h2 className="section-title">About URC</h2>
            <p className="section-text">
              The University Rover Challenge (URC) hosted by The Mars Society is
              among the world&apos;s premier robotics competitions for
              university students. Held annually in the desert of southern Utah,
              United States, URC challenges student teams to ideate, design, and
              fabricate Mars rovers that will one day work alongside astronauts
              exploring the Red Planet.
            </p>
          </div>
        </section>

        <section> test 2222</section>

        <Footer isVisible={showFooter} />
      </div>
    </>
  );
};

export default Page;
