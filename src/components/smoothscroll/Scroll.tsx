"use client";
import { useEffect } from "react";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY * 0.25, // Adjust the multiplier to control the speed
        behavior: "smooth",
      });
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
};

export default SmoothScroll;
