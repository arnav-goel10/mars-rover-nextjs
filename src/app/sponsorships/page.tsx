"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

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
            <NavBar/>
            <Footer isVisible={showFooter} />
        </>
    )
};

export default Page;
