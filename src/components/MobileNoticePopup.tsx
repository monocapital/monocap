"use client";

import { useState, useEffect, useRef } from "react";

export default function MobileNoticePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use a ref to track if the popup has been shown during this session
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Set mounted state to indicate client-side rendering
    setIsMounted(true);

    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      // If view changes to desktop while popup is visible, hide it
      if (!isMobileView && isVisible) {
        setIsVisible(false);
      }
    };

    // Check for mobile on initial load
    checkMobile();

    // Check localStorage on mount to see if popup has been shown
    try {
      const popupShown = localStorage.getItem('popupShown');
      if (popupShown === 'true') {
        hasShownRef.current = true;
      }
    } catch (e) {
      console.error("Error reading popup state", e);
    }

    // Set timer to show popup after 10 seconds, but only on mobile and if not shown before
    if (isMobile && !hasShownRef.current) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        hasShownRef.current = true;

        // Store popup display state in localStorage to persist across pages
        try {
          localStorage.setItem('popupShown', 'true');
        } catch (e) {
          console.error("Error storing popup state", e);
        }
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    }

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile, isVisible]);

  // Don't render anything server-side or if not on mobile
  if (!isMounted || !isMobile) return null;

  return (
    <div
      className={`desktop-notice-popup ${isVisible ? 'show' : ''}`}
      style={{ zIndex: 9999 }}
    >
      <button
        className="close-button"
        onClick={() => setIsVisible(false)}
        aria-label="Close notice"
      >
        ×
      </button>
      <p>For the best experience, this site is recommended to view on desktop.</p>
    </div>
  );
}
