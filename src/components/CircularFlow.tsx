"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

export default function CircularFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create array of 3 arrows with appropriate angle offsets using useMemo
  const arrows = useMemo(() => [0, 120, 240], []); // Angles in degrees (evenly spaced around a circle)

  // Calculate rotation duration based on hover state
  const rotationDuration = isHovered ? 1.5 : 8; // Very fast (1.5s) when hovered, slow (8s) when not

  // Setup intersection observer to trigger animation on scroll
  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Small delay after coming into view
            setTimeout(() => {
              setIsVisible(true);
            }, 300);
            // Once triggered, disconnect observer
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of element is visible
    );

    observer.observe(currentRef);

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center h-[120px] w-[120px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The button */}
      <Link href="/flow" className="z-10">
        <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110">
          <span className="text-base font-medium">Flow</span>
        </div>
      </Link>

      {/* Subtle dotted circle path */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gray-200 border-dashed opacity-0"
        animate={{
          opacity: isVisible ? 0.5 : 0,
          scale: isVisible ? 1 : 0.8,
          borderColor: isHovered ? "#000" : "#e5e5e5"
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>

      {/* The orbiting arrows - reversed direction with counter-clockwise rotation */}
      {arrows.map((angle, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            rotate: angle,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            rotate: isVisible ? angle - 360 : angle, // Only start rotating when visible
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.5,
          }}
          transition={{
            rotate: {
              duration: rotationDuration, // Dynamic duration based on hover state
              repeat: Infinity,
              ease: "linear",
              delay: 0.05 * index // Slight stagger for more natural feel
            },
            opacity: {
              duration: 0.6,
              delay: 0.1 * index // Stagger the entrance of each arrow
            },
            scale: {
              duration: 0.6,
              delay: 0.1 * index
            }
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isHovered ? "animate-pulse" : ""}
            >
              <path
                d="M12 4L4 12L12 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
