"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import "./sponsorship.css";
import Image from "next/image";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 500); // 1 second delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      <div className="sponsor" style={{ backgroundColor: "#3c1b09" }}>
        <h1 className="heading">Sponsorships</h1>
        <br />
        <div className="image-container">
          <Image
            alt="ZeroErr"
            src="/images/ZeroERR.png"
            width={300}
            height={300}
          />
          <p className="image-caption">ZeroErr Control Co. Ltd.</p>
        </div>
      </div>
      <Footer isVisible={showFooter} />
    </>
  );
};

export default Page;
