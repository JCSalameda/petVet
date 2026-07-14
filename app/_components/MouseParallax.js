"use client";

import { useEffect } from "react";

export default function MouseParallax() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Apply to root for any component to consume
      document.documentElement.style.setProperty("--mouse-x", x.toString());
      document.documentElement.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // This is a logic-only component
}
