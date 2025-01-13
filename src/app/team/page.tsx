"use client";
import React, { useEffect, useState, useRef } from "react";
import NavBar from "@/components/navbar/NavBar";
import "./team.css";
import TeamCard from "@/components/teamcard/TeamCard";
import { teamMembersList } from "@/data/teamMembersList";
import Footer from "@/components/footer/Footer";

const SCROLL_HIDE_THRESHOLD = 25;

const Page = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScrollY - lastScrollY.current > SCROLL_HIDE_THRESHOLD) {
        setIsNavVisible(false);
      }

      // Show navbar when scrolling up
      if (lastScrollY.current - currentScrollY > SCROLL_HIDE_THRESHOLD) {
        setIsNavVisible(true);
      }

      // Check if scrolled to the bottom to show the footer
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setShowFooter(scrolledToBottom);

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar-wrapper ${isNavVisible ? "visible" : "hidden"}`}>
        <NavBar />
      </div>
      <div className="team-section">
        <div className="team-container">
          <div className="team-heading">
            <h1>Our Team.</h1>
          </div>
          <div className="team-description">
            <p>
              The NUS Mars Rover Team combines expertise and passion for space
              exploration. Together, we are dedicated to advancing technology
              and innovation in the field of robotics, aiming to contribute to
              future missions on Mars. With a diverse set of skills and a shared
              vision, we strive to push the boundaries of what is possible in
              extraterrestrial research. Join us on this exciting journey as we
              work towards making history in space exploration!
            </p>
          </div>
        </div>
        <div className="team-members-wrapper">
          <div className="team-members">
            {teamMembersList.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer isVisible={showFooter} />
    </>
  );
};

export default Page;
