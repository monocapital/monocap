"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FlowButton() {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Circle containing the rotating arrow */}
      <div className="absolute w-[120px] h-[120px] rounded-full">
        <motion.div
          className="absolute top-0 left-[calc(50%-8px)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: "8px 60px" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12L12 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Flow button */}
      <Link href="/flow">
        <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110">
          <span className="text-base font-medium">Flow</span>
        </div>
      </Link>
    </div>
  );
}
