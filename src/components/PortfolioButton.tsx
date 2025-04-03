"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function PortfolioButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const router = useRouter();

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

  // Handle portfolio button click - now direct navigation
  const handleClick = () => {
    router.push('/about/portfolio');
  };

  // Handle hover with delayed text appearance
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => {
        setTextVisible(true);
      }, 300); // Show text after lines extend
    } else {
      setTextVisible(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  // Calculate line width based on screen size
  const lineWidth = Math.min(windowWidth * 0.25, 300); // 25% of screen width, max 300px

  return (
    <div className="inline-block relative">
      {/* Left Side - Transforms into "crypto" */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
        {/* Line that animates */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? lineWidth : 0,
            opacity: isHovered ? (textVisible ? 0 : 1) : 0,
            x: isHovered ? -8 : 0
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-[2px] bg-current w-full"></div>
        </motion.div>

        {/* "crypto" Text */}
        <motion.div
          className="absolute top-1/2 left-[30px] -translate-y-1/2 whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: textVisible ? 1 : 0,
            scale: textVisible ? 1 : 0,
            x: textVisible ? -40 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.1
          }}
        >
          <span className="text-base font-medium">crypto</span>
        </motion.div>
      </div>

      {/* Right Side - Transforms into "non-crypto" */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
        {/* Line that animates */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? lineWidth : 0,
            opacity: isHovered ? (textVisible ? 0 : 1) : 0,
            x: isHovered ? 8 : 0
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="h-[2px] bg-current w-full"></div>
        </motion.div>

        {/* "non-crypto" Text */}
        <motion.div
          className="absolute top-1/2 right-[30px] -translate-y-1/2 whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: textVisible ? 1 : 0,
            scale: textVisible ? 1 : 0,
            x: textVisible ? 40 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <span className="text-base font-medium">non-crypto</span>
        </motion.div>
      </div>

      {/* Portfolio Button */}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <motion.div
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-black text-white transition-all duration-300"
          animate={{
            scale: isHovered ? 1.1 : 1,
            boxShadow: isHovered
              ? "0 0 30px rgba(0, 0, 0, 0.2)"
              : "0 0 0 rgba(0, 0, 0, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-lg font-medium">Portfolio</span>
        </motion.div>
      </div>
    </div>
  );
}
