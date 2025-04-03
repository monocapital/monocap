"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider() {
  // Set initial slider position to 0 (before state)
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

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

  // Calculate the chaotic/ordered position for elements
  const getChaoticPosition = (index: number, isBefore: boolean) => {
    const position = sliderPosition / 100;
    const chaos = isBefore ? 1 - position : position;

    // Random offsets for chaotic positioning
    const offsets = [
      { x: -15, y: 8 },
      { x: 12, y: -10 },
      { x: -8, y: -12 },
      { x: 10, y: 15 },
      { x: -20, y: -5 },
    ];

    // Choose an offset based on index
    const offset = offsets[index % offsets.length];

    // If it's the "before" side, apply chaotic positioning
    if (isBefore) {
      return {
        transform: `translate(${offset.x * chaos}px, ${offset.y * chaos}px) rotate(${-5 * chaos}deg)`,
      };
    }
    // For "after" side, elements become more aligned as slider moves to the right
    else {
      return {
        transform: `translate(0, 0) rotate(0deg)`,
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="slider-container max-w-xl mx-auto"
      onClick={handleSliderClick}
    >
      {/* Fixed position content columns */}
      <div className="relative flex">
        {/* Very subtle overlay for the active section */}
        <div className="absolute top-0 bottom-0 left-0 h-full"
             style={{
               width: `${sliderPosition}%`,
               zIndex: 1,
               background: 'linear-gradient(to right, rgba(250,250,250,0.3) 0%, rgba(250,250,250,0.5) 100%)',
               opacity: 0.5
             }}></div>

        {/* Before Side - Chaotic, Low Funds */}
        <div className="slider-text text-before w-1/2 relative z-2">
          <h3 className="text-xl font-medium mb-6">Before</h3>

          <div className="funding-visualization mb-4">
            {/* Low funds visual */}
            <div
              className="money-indicator"
              style={{
                opacity: getOpacity(true),
                ...getChaoticPosition(0, true)
              }}
            >
              <span className="text-xs text-gray-400">Funding:</span>
              <div className="flex items-center mt-1">
                <div className="h-2 w-6 bg-red-300 rounded-full"></div>
                <span className="ml-2 text-sm">Low</span>
              </div>
            </div>
          </div>

          {/* Chaotic notes and plans */}
          <div className="relative h-[150px] w-full">
            {/* Sticky notes with chaotic arrangement */}
            <div
              className="absolute sticky-note bg-yellow-100 p-2 text-xs shadow-sm"
              style={{
                top: '10px',
                left: '20px',
                opacity: getOpacity(true),
                ...getChaoticPosition(1, true)
              }}
            >
              MVP??
            </div>

            <div
              className="absolute sticky-note bg-blue-100 p-2 text-xs shadow-sm"
              style={{
                top: '50px',
                right: '30px',
                opacity: getOpacity(true),
                ...getChaoticPosition(2, true)
              }}
            >
              Need investors!
            </div>

            <div
              className="absolute sticky-note bg-red-100 p-2 text-xs shadow-sm"
              style={{
                bottom: '20px',
                left: '40px',
                opacity: getOpacity(true),
                ...getChaoticPosition(3, true)
              }}
            >
              Running out of cash
            </div>

            <div
              className="absolute sticky-note bg-purple-100 p-2 text-xs shadow-sm"
              style={{
                bottom: '60px',
                right: '20px',
                opacity: getOpacity(true),
                ...getChaoticPosition(4, true)
              }}
            >
              ???
            </div>
          </div>
        </div>

        {/* After Side - Clear, Funded, Planned */}
        <div className="slider-text text-after w-1/2 relative z-2">
          <h3 className="text-xl font-medium mb-6">After</h3>

          <div className="funding-visualization mb-4">
            {/* Strong funding visual */}
            <div
              className="money-indicator"
              style={{
                opacity: getOpacity(false),
                ...getChaoticPosition(0, false)
              }}
            >
              <span className="text-xs text-gray-700">Funding:</span>
              <div className="flex items-center mt-1">
                <div className="h-2 w-16 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-sm">Secured</span>
              </div>
            </div>
          </div>

          {/* Organized plans and roadmap */}
          <div className="relative h-[150px] w-full">
            {/* Organized roadmap tiles */}
            <div
              className="absolute roadmap-tile bg-green-50 p-2 text-xs shadow-sm border-l-2 border-green-500"
              style={{
                top: '10px',
                left: '20px',
                opacity: getOpacity(false),
                ...getChaoticPosition(1, false)
              }}
            >
              <div className="font-medium mb-1">Q1: MVP Launch</div>
              <div className="text-green-700">✓ Completed</div>
            </div>

            <div
              className="absolute roadmap-tile bg-blue-50 p-2 text-xs shadow-sm border-l-2 border-blue-500"
              style={{
                top: '60px',
                left: '20px',
                opacity: getOpacity(false),
                ...getChaoticPosition(2, false)
              }}
            >
              <div className="font-medium mb-1">Q2: Market Expansion</div>
              <div className="text-blue-700">In Progress</div>
            </div>

            <div
              className="absolute roadmap-tile bg-gray-50 p-2 text-xs shadow-sm border-l-2 border-gray-500"
              style={{
                top: '110px',
                left: '20px',
                opacity: getOpacity(false),
                ...getChaoticPosition(3, false)
              }}
            >
              <div className="font-medium mb-1">Q3: Series A</div>
              <div className="text-gray-700">Planned</div>
            </div>
          </div>
        </div>

        {/* Vertical divider line that moves with the slider - Make fully draggable */}
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
          {/* Draggable indicator on the divider */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center cursor-grab"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1h14M0 7h14M0 13h14" stroke="#555" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div
        ref={sliderRef}
        className="slider-control mt-6"
        onClick={handleSliderClick}
      >
        <div
          className="slider-progress"
          style={{ width: `${sliderPosition}%` }}
        ></div>
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        ></div>
      </div>

      {/* Help text to make the slider more intuitive */}
      <div className="text-center text-gray-400 text-xs mt-2">
        Drag the divider or click anywhere to compare
      </div>
    </div>
  );
}
