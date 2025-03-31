"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ApplyButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate window width for full-width lines
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window dimensions
    setWindowWidth(window.innerWidth);

    // Update dimensions on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate line width based on screen size
  const lineWidth = Math.min(windowWidth * 0.25, 300); // 25% of screen width, max 300px

  // Handle apply button click
  const handleClick = () => {
    window.open('https://q97htoe4h2i.typeform.com/to/G4LYtSlt', '_blank');
  };

  return (
    <div className="inline-block relative">
      {/* Left Side - Line only */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
        {/* Line that animates */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? lineWidth : 0,
            opacity: isHovered ? 1 : 0,
            x: isHovered ? -8 : 0
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-[2px] bg-current w-full"></div>
        </motion.div>
      </div>

      {/* Right Side - Line only */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
        {/* Line that animates */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? lineWidth : 0,
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 8 : 0
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-[2px] bg-current w-full"></div>
        </motion.div>
      </div>

      {/* Apply Button */}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <motion.div
          className="relative z-10 flex h-16 w-auto px-6 items-center justify-center rounded-full bg-black text-white transition-all duration-300"
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 0 30px rgba(0, 0, 0, 0.2)"
              : "0 0 0 rgba(0, 0, 0, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-lg font-medium">Apply Now</span>
        </motion.div>
      </div>
    </div>
  );
}
