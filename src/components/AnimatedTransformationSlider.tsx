"use client";

import { useState, useRef, useEffect } from "react";

export default function AnimatedTransformationSlider() {
  // Initial slider position set to 0 (before state)
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

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

  // Handle mouse and touch interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    e.preventDefault();
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  const handleSliderClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Calculate opacity based on slider position
  const getOpacity = (isBefore: boolean) => {
    const position = sliderPosition / 100;

    // For "before" words, they should fade out as slider moves right
    if (isBefore) {
      return 1 - position;
    }
    // For "after" words, they should fade in as slider moves right
    else {
      return position;
    }
  };

  // Get styles including opacity for content sections
  const getStyles = (isBefore: boolean) => {
    return {
      opacity: getOpacity(isBefore),
    };
  };

  return (
    <div
      ref={containerRef}
      className={`slider-container max-w-xl mx-auto ${isMobile ? 'mobile-slider' : ''}`}
      onClick={handleSliderClick}
    >
      {/* Fixed position content columns */}
      <div className="relative flex">
        {/* Overlay for the active section */}
        <div
          className="absolute top-0 bottom-0 left-0 h-full"
          style={{
            width: `${sliderPosition}%`,
            zIndex: 1,
            background: 'linear-gradient(to right, rgba(250,250,250,0.3) 0%, rgba(250,250,250,0.5) 100%)',
            opacity: 0.5
          }}
        ></div>

        {/* Without Side - Confusing and No Funding */}
        <div className="slider-text text-before w-1/2 relative z-2">
          <h3 className="text-xl font-medium mb-6" style={{ opacity: getOpacity(true) }}>Without</h3>

          <div className="w-full space-y-2" style={getStyles(true)}>
            {/* Messy Vision Board - Updated confusion elements */}
            <div className="vision-board confused mb-4">
              <div className="sticky-note rotate-neg5 bg-yellow-100">
                <span className="text-xs">Idea?</span>
              </div>
              <div className="sticky-note rotate-pos3 bg-blue-50">
                <span className="text-xs">No funds</span>
              </div>
              <div className="sticky-note rotate-neg2 bg-pink-50">
                <span className="text-xs">Network? who</span>
              </div>
              <div className="sticky-note rotate-pos7 bg-green-50">
                <span className="text-xs">Direction?</span>
              </div>
            </div>

            {/* No Funding Visualization */}
            <div className="funding-status no-funding mb-4">
              <div className="funding-label text-xs text-left mb-1">Capital:</div>
              <div className="empty-wallet">
                <div className="wallet-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="#f57c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 11H5" stroke="#f57c00" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="wallet-status text-xs text-red-500 mt-1">Insufficient funds</div>
              </div>
            </div>

            {/* Confused Connections */}
            <div className="connections confused">
              <div className="connection-dots">
                <div className="connection-dot"></div>
                <div className="connection-dot"></div>
                <div className="connection-dot"></div>
                <div className="connection-question text-xs">No connections</div>
              </div>
            </div>
          </div>
        </div>

        {/* With Us Side - Clear, Funded with Guidance */}
        <div className="slider-text text-after w-1/2 relative z-2">
          <h3 className="text-xl font-medium mb-6" style={{ opacity: getOpacity(false) }}>With Us</h3>

          <div className="w-full space-y-3" style={getStyles(false)}>
            {/* Strategic Guidance */}
            <div className="guidance-container mb-2">
              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H16" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="service-text text-sm text-left">Strategic Consultation</div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L21 9V21H3V9L12 3Z" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="service-text text-sm text-left">Brand Development</div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L12 14L16 10" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#34c759" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="service-text text-sm text-left">Market Insights</div>
              </div>
            </div>

            {/* Funded Status */}
            <div className="funding-status has-funding mb-2">
              <div className="funding-label text-xs text-left mb-1">Capital:</div>
              <div className="full-wallet">
                <div className="wallet-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H16" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="5" fill="#34c75950" stroke="#34c759" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="wallet-status text-xs text-green-500 mt-1">Fully funded</div>
              </div>
            </div>

            {/* Top-tier Networks */}
            <div className="network-container">
              <div className="network-label text-xs text-left mb-1">Network Access:</div>
              <div className="network-icons">
                <div className="network-icon-group">
                  <div className="network-icon"></div>
                  <div className="network-icon"></div>
                  <div className="network-icon"></div>
                  <div className="network-icon"></div>
                  <div className="network-icon"></div>
                </div>
                <div className="network-label text-xs text-green-600 mt-1">Top-tier connections</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical divider line that moves with the slider */}
        <div
          className="absolute top-0 bottom-0 w-[1px] bg-black z-3 transition-all duration-100 ease-out cursor-col-resize"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Draggable indicator on the divider - made smaller on mobile */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-6 h-6' : 'w-8 h-8'} bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center cursor-grab`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <svg width={isMobile ? "10" : "12"} height={isMobile ? "10" : "12"} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1h14M0 7h14M0 13h14" stroke="#555" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Help text */}
      <div className="text-center text-gray-400 text-xs mt-2">
        Drag the divider to compare
      </div>
    </div>
  );
}
