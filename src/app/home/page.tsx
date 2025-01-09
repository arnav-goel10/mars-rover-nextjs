"use client";
import React, { useEffect, useState } from "react";
import "./home.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  const images = [
    { src: "/images/mars1.jpg", alt: "Mars Rover 1" },
    { src: "/images/mars2.jpg", alt: "Mars Rover 2" },
    { src: "/images/mars3.jpg", alt: "Mars Rover 3" },
    { src: "/images/mars4.jpg", alt: "Mars Rover 4" },
    { src: "/images/mars5.jpg", alt: "Mars Rover 5" },
  ];

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

        // Get the bounding rectangle of the first section
        const rect = firstSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if a significant portion of the first section is visible
        const isFirstSectionVisible =
          rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;

        if (isFirstSectionVisible) {
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
              <Link href="/contact" className="button button-dark">
                Join Us
              </Link>
              <Link href="/subsystems" className="button button-outline">
                Explore Our Subsystems
              </Link>
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
            <h2 style={{ fontWeight: "900" }}>Our Goals</h2>
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

        <section className="subsystems-section">
          <div className="goals-header">
            <h2 style={{ fontWeight: "900" }}>Our Subsystems</h2>
          </div>
          <div className="subsystems-grid">
            {[
              { title: "Autonomous Navigation", link: "/subsystems/autonav" },
              { title: "Delivery Subsystem", link: "/subsystems/delivery" },
              {
                title: "Robotic Arm Subsystem",
                link: "/subsystems/robotic-arm",
              },
              { title: "Science Subsystem", link: "/subsystems/science" },
              {
                title: "GNSS and Communications",
                link: "/subsystems/gnss-and-communication",
              },
              {
                title: "Business and Media",
                link: "/subsystems/business-and-media",
              },
            ].map((subsystem, index) => (
              <div className="subsystem-card" key={index}>
                <h3 className="subsystem-title">{subsystem.title}</h3>
                <Link href={subsystem.link || "#"} className="subsystem-button">
                  Discover More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="explore-section">
          <div className="explore-header">Exploring Mars with Innovation</div>
          <div ref={sliderRef} className="keen-slider">
            {images.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="carousel-image"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section> test 2222</section>

        <section> test 2222</section>

        <Footer isVisible={showFooter} />
      </div>
    </>
  );
};

export default Page;
