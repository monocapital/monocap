"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RotatingArrows() {
  const [isVisible, setIsVisible] = useState(true);

  // We'll create a simple fade-in/fade-out effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Create 8 arrows positioned in a circle
  const arrows = Array.from({ length: 8 }, (_, index) => {
    const angle = (index * 45) * (Math.PI / 180);
    const radius = 40; // Distance from center
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Calculate rotation angle for the arrow (pointing inward)
    const rotationAngle = (angle * 180 / Math.PI) + 90;

    return { x, y, rotationAngle };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full">
        {arrows.map((arrow, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, x: arrow.x, y: arrow.y, rotate: arrow.rotationAngle }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: arrow.x,
              y: arrow.y,
              rotate: [arrow.rotationAngle, arrow.rotationAngle + 360]
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 8,
                ease: "linear"
              },
              opacity: { duration: 0.5 }
            }}
            style={{
              transformOrigin: "center center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
