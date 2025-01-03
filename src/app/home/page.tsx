"use client";
import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Footer from "@/components/footer/Footer";
import vision from "../../images/vision.png";
import Image from "next/image";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div>
      lOLOL
      <Footer isVisible={showFooter} />
    </div>
  );
};

export default Page;
