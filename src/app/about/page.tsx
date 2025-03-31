"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import RoundButton from "@/components/RoundButton";
import SuccessMetrics from "@/components/SuccessMetrics";
import CircularFlow from "@/components/CircularFlow";
import PortfolioButton from "@/components/PortfolioButton";
import "./about-enhancements.css"; // Import our enhancements CSS
import "../mobile-text.css"; // Make sure we import the mobile text CSS

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showPartnershipError, setShowPartnershipError] = useState(false);

  // Refs for scroll reveal elements
  const featuresRef = useRef<HTMLDivElement>(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  // Function to check if element is in viewport
  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7
    );
  };

  // Handle scroll to reveal elements
  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport(featuresRef.current) && !featuresVisible) {
        setFeaturesVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [featuresVisible]);

  const openModal = () => {
    setIsModalOpen(true);
    setOptionSelected(null);
    setSubmitted(false);
    setShowPartnershipError(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleOptionSelect = (option: string) => {
    setOptionSelected(option);

    if (option === 'funding') {
      // Redirect to Typeform for funding
      window.open('https://q97htoe4h2i.typeform.com/to/G4LYtSlt', '_blank');
      closeModal();
    } else if (option === 'partnership') {
      // Show partnership unavailable message
      setShowPartnershipError(true);
    }
  };

  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      {/* Preload critical images */}
      <link
        rel="preload"
        href="/x-logo.png"
        as="image"
        type="image/png"
      />
      <link
        rel="preload"
        href="/fire-icon.png"
        as="image"
        type="image/png"
      />
      <Header />

      <main className="container size-full w-full px-4 md:px-0 md:w-[50%]">
        <section className="pb-[140px] pt-[144px] text-center">
          {/* About Button */}
          <div style={{ opacity: 1, transform: "none" }}>
            <RoundButton href="/" size="md">
              About
            </RoundButton>
          </div>

          {/* X Logo */}
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="mt-12">
              <div className="flex w-full items-center justify-center">
                <a
                  href="https://x.com/monocapital__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className="border-border flex size-16 items-center justify-center rounded-full border bg-black" style={{ opacity: 1, transform: "none" }}>
                    <Image
                      src="/x-logo.png"
                      alt="X"
                      className="size-8 object-contain"
                      width={32}
                      height={32}
                      priority={true}
                      loading="eager"
                      fetchPriority="high"
                      sizes="32px"
                      quality={100}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Ignite Text - With alternating fire icon and text */}
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="tagline-enhanced mt-28 text-center px-4 md:px-0 ignite-container">
              <span className="mobile-wrap-text">We</span>
              <span className="relative mx-1 mobile-nowrap">
                <span className="relative z-10">
                  <span className="ignite-text">ignite</span>
                  <Image
                    src="/fire-icon.png"
                    alt="fire"
                    width={24}
                    height={24}
                    priority={true}
                    loading="eager"
                    fetchPriority="high"
                    sizes="24px"
                    quality={100}
                    className="fire-icon absolute -top-0 left-1/2 transform -translate-x-1/2 z-0"
                  />
                </span>
              </span>
              <span className="mobile-wrap-text last">visionary leaders to forge legendary business legacies</span>
            </p>
          </div>

          {/* Features - Hidden until scrolled into view */}
          <div
            ref={featuresRef}
            className={`scroll-reveal mt-16 px-4 mx-auto max-w-md ${featuresVisible ? 'visible' : ''}`}
          >
            <p className="mt-10 px-4 mx-auto max-w-md">
              <span className="md:hidden">
                Team of Any Size • Any Startup • Global Coverage • Fast Approval • Up to $100K
                <br /><br />
              </span>
              <span className="hidden md:block">
                Team of Any Size<br />
                Any Startup<br />
                Global Coverage<br />
                Fast Approval<br />
                Up to $100K<br />
                <br />
              </span>
              Beyond Capital - Consultation, Mentorship, Network, Technical Assistance, Tools, Audits
            </p>
          </div>

          {/* Apply Button */}
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="mt-20">
              <div className="flex flex-col gap-2">
                <button
                  onClick={openModal}
                  className="z-10 py-2 px-6 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 focus:outline-none text-base font-medium"
                >
                  Apply Now
                </button>
                <p className="text-sm text-gray-600">Contact us - we'll reply fast</p>
              </div>
            </div>
          </div>

          {/* Flow Button - Using our new component with circular animation */}
          <div style={{ opacity: 1, transform: "none" }} className="mt-24 mb-16 flex justify-center">
            <CircularFlow />
          </div>

          {/* Portfolio Button - With line animations */}
          <div style={{ opacity: 1, transform: "none" }} className="my-20 flex justify-center">
            <PortfolioButton />
          </div>

          {/* Portfolio Statement */}
          <div style={{ opacity: 1, transform: "none" }}>
            <p>
              <span className="animated-underline">Funding from $1 - Start Something.</span>
            </p>
          </div>

          {/* Success Metrics */}
          <div style={{ opacity: 1, transform: "none" }} className="mt-16 mb-16">
            <h3 className="text-center text-lg font-medium mb-8">Our Success in Numbers</h3>
            <SuccessMetrics />
          </div>

        </section>

        {/* Back Button - Hidden on mobile */}
        <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center bg-transparent hidden md:flex">
          <div style={{ opacity: 1 }}>
            <div className="">
              <RoundButton href="/" size="sm">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.31066 8.7502L8.60176 13.0413L7.5411 14.102L1.96967 8.53053C1.67678 8.23763 1.67678 7.76276 1.96967 7.46987L7.5411 1.89844L8.60176 2.9591L4.31066 7.2502H14.5V8.7502H4.31066Z" fill="currentColor"></path>
                </svg>
              </RoundButton>
            </div>
          </div>
        </div>

      </main>

      {/* Apply Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 touch-none"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md relative overflow-hidden shadow-xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-6 md:p-8">
              {!showPartnershipError ? (
                <>
                  <h2 className="text-xl font-medium mb-6 text-center">What are you applying for?</h2>
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => handleOptionSelect('funding')}
                      className="py-4 px-6 bg-white border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-center"
                    >
                      For Funding
                    </button>
                    <button
                      onClick={() => handleOptionSelect('partnership')}
                      className="py-4 px-6 bg-white border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-center"
                    >
                      For Partnership
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-amber-500 text-4xl mb-4">!</div>
                  <h2 className="text-xl font-medium mb-2">Partnership Unavailable</h2>
                  <p className="text-gray-600 mb-6">
                    Partnership is currently unavailable.
                    <br/>Please consider applying for funding instead.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleOptionSelect('funding')}
                      className="px-6 py-2.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Apply for Funding
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <h2
        id="radix-:rg:"
        style={{
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          whiteSpace: "nowrap",
          overflowWrap: "normal"
        }}
      >
        Help dialog
      </h2>
    </main>
  );
}
