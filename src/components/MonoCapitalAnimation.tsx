"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function MonoCapitalAnimation() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animationIteration, setAnimationIteration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const ownMoneyRef = useRef<HTMLSpanElement>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Check for mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Start animation loop when in view
  useEffect(() => {
    if (inView) {
      startAnimationCycle();
    } else {
      // Reset when out of view
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
      setIsAnimated(false);
    }

    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, [inView]);

  // Add scroll-based underline effect to "own money" text
  useEffect(() => {
    const handleScroll = () => {
      if (!ownMoneyRef.current) return;

      const rect = ownMoneyRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isInView) {
        ownMoneyRef.current.classList.add('word-underlined');
      } else {
        ownMoneyRef.current.classList.remove('word-underlined');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  // Start a new animation cycle
  const startAnimationCycle = () => {
    // Reset state
    setIsAnimated(false);

    // Wait a bit before starting animation
    animationTimerRef.current = setTimeout(() => {
      // Start animation
      setIsAnimated(true);

      // Set timer to restart the animation after completion
      animationTimerRef.current = setTimeout(() => {
        setAnimationIteration(prev => prev + 1);
        startAnimationCycle();
      }, 9000); // Faster animation cycle (9 seconds)
    }, 1500); // Moderate initial delay
  };

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={inViewRef}
      className="max-w-xl mx-auto bg-white rounded-lg p-6 shadow-sm overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animation container */}
        <div className={`w-full relative ${isMobile ? "h-48" : "h-36"}`}>
          {/* Desktop Layout */}
          {!isMobile ? (
            <>
              {/* Venture Capital - Desktop */}
              <div
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-lg md:text-xl font-medium text-gray-800 transition-all duration-1600 ease-in-out ${
                  isAnimated ? "opacity-0 translate-x-16" : "opacity-100"
                }`}
              >
                Venture Capital
              </div>

              {/* Angel Investing - Desktop */}
              <div
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-lg md:text-xl font-medium text-gray-800 transition-all duration-1600 ease-in-out ${
                  isAnimated ? "opacity-0 -translate-x-16" : "opacity-100"
                }`}
              >
                Angel Investing
              </div>
            </>
          ) : (
            <>
              {/* Venture Capital - Mobile */}
              <div
                className={`absolute left-1/2 top-1/4 transform -translate-x-1/2 text-lg font-medium text-gray-800 transition-all duration-1600 ease-in-out ${
                  isAnimated ? "opacity-0 -translate-y-8" : "opacity-100"
                }`}
              >
                Venture Capital
              </div>

              {/* Angel Investing - Mobile */}
              <div
                className={`absolute left-1/2 bottom-1/4 transform -translate-x-1/2 text-lg font-medium text-gray-800 transition-all duration-1600 ease-in-out ${
                  isAnimated ? "opacity-0 translate-y-8" : "opacity-100"
                }`}
              >
                Angel Investing
              </div>
            </>
          )}

          {/* Mono Capital (combined result) - only visible when the other words are not */}
          <div
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl font-semibold text-black transition-all duration-1600 ease-in-out ${
              isAnimated ? "opacity-100 scale-110" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Mono Capital
          </div>
        </div>

        {/* Description - no fade effect, always visible */}
        <p className="text-center text-gray-700 text-sm md:text-base max-w-md">
          At Mono Capital, we invest in your startup with our
          <span
            ref={ownMoneyRef}
            className="relative cursor-pointer mx-1 font-medium text-black hover:text-gray-800 inline-block own-money-text hover-bounce"
            onClick={() => setShowPopup(!showPopup)}
          >
            own money

            {/* Popup */}
            {showPopup && (
              <div
                ref={popupRef}
                className="absolute z-10 left-1/2 bottom-full mb-2 -translate-x-1/2 bg-black text-white text-xs md:text-sm rounded-md px-3 py-2 w-48 shadow-lg"
              >
                not our partners' 😉
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black"></div>
              </div>
            )}
          </span>,
          offering the personal touch of angel investing alongside the resources and support you'd expect from venture capital!
        </p>
      </div>
    </div>
  );
}
