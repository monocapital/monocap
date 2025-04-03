"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import RoundButton from "@/components/RoundButton";
import ApplyButton from "@/components/ApplyButton"; // Import ApplyButton component
import "./flow-animations.css";
import "./flow-heading.css"; // Import heading animations
import "./typewriter.css"; // Import typewriter animation
import "./sliding-card.css"; // Import sliding card animations

export default function Flow() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeInfoCard, setActiveInfoCard] = useState<number | null>(null);
  const [buttonsPulsing, setButtonsPulsing] = useState(false);
  const [hasClickedAnyButton, setHasClickedAnyButton] = useState(false);
  const [showPulseAgain, setShowPulseAgain] = useState(false);
  const totalSteps = 3;

  // Auto progress through steps every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Function to toggle info card
  const toggleInfoCard = (index: number) => {
    if (activeInfoCard === index) {
      setActiveInfoCard(null);
    } else {
      setActiveInfoCard(index);
    }
    setHasClickedAnyButton(true);
    setButtonsPulsing(false);
    setShowPulseAgain(true); // Reset pulse timer after click

    // After 20 seconds of inactivity, allow the pulse to show again
    setTimeout(() => {
      setShowPulseAgain(false);
    }, 20000);
  };

  // Close info card when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeInfoCard !== null) {
        setActiveInfoCard(null);
      }
    };

    // Add event listener for click outside
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeInfoCard]);

  // Pulse animation effect after 5 seconds if user hasn't clicked any button
  useEffect(() => {
    // Only set up pulse if user hasn't clicked any button or if we should show pulse again
    if ((!hasClickedAnyButton || !showPulseAgain) && !buttonsPulsing) {
      const pulseTimer = setTimeout(() => {
        setButtonsPulsing(true);
      }, 5000); // 5 seconds

      return () => clearTimeout(pulseTimer);
    }
  }, [hasClickedAnyButton, buttonsPulsing, showPulseAgain]);

  // More detailed information for each step
  const detailedInfo = [
    {
      title: "Inquire Process",
      content: (
        <>
          <p className="mb-4">We are open for crypto and non-crypto startup!</p>
          <ul className="list-disc pl-5 mb-4 text-left space-y-2">
            <li>Team of Any Size</li>
            <li>Global Coverage</li>
            <li>Fast Approval</li>
            <li>Any funding size you might need :) (From $1 - $100K)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Due Diligence Details",
      content: (
        <>
          <p className="mb-4">It's time to conduct our Due Diligence:</p>
          <ul className="list-disc pl-5 mb-4 text-left space-y-2">
            <li>Team composition and experience</li>
            <li>Market size and growth potential</li>
            <li>Product/Service</li>
            <li>Competitive landscape analysis</li>
            <li>Legal & Compliance</li>
            <li>Scalability and sustainability</li>
          </ul>
          <p className="mb-4">During this phase, we may schedule calls with your team to discuss terms and QnA.</p>
          <p className="text-sm italic"></p>
        </>
      ),
    },
    {
      title: "Funding Process",
      content: (
        <>
          <p className="mb-4">Beyond funding, we provide:</p>
          <ul className="list-disc pl-5 mb-4 text-left space-y-2">
            <li>Consultation (business, branding, customer insight, user testing, etc.)</li>
            <li>Access to top-tier industry leaders and investors</li>
            <li>Financial tools and insights</li>
            <li>Trend Forecasting</li>
            <li>Tokenomics & Smart Contract (for crypto startup)</li>
          </ul>
          <p className="mb-4"></p>
          <p className="text-sm italic">Our partnership extends well beyond funding - we're committed to your long-term success.</p>
        </>
      ),
    },
  ];

  const steps = [
    {
      title: "Inquire",
      description: "Drop us your project information for initial review. We review all submissions and respond within 48 hours.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeStep === 0 ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Due Diligence",
      description: "We dive into your project, assessing its fit with our criteria and market promise.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeStep === 1 ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Funds Given",
      description: "Once approved, we quickly process funding and start your project's growth and success.",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeStep === 2 ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M17 9V7C17 4.79086 15.2091 3 13 3H8C5.79086 3 4 4.79086 4 7V17C4 19.2091 5.79086 21 8 21H13C15.2091 21 17 19.2091 17 17V15M12 12H21M21 12L18 9M21 12L18 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      <Header />

      <main className="container size-full w-full px-4 md:px-0 md:w-[50%]">
        <section className="pb-[140px] pt-[144px] text-center">
          {/* Flow Button */}
          <div style={{ opacity: 1, transform: "none" }}>
            <RoundButton href="/about" size="md">
              Flow
            </RoundButton>
          </div>

          {/* Flow Process */}
          <div className="mt-20 px-4 text-center">
            <h2 className="mb-16 text-3xl md:text-4xl font-medium inline-block">
              <span className="typewriter">3 Simple Steps</span>
            </h2>

            <div className="grid grid-cols-1 gap-16 mt-12 max-w-md mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 sm:p-8 rounded-lg transition-all duration-500 ${
                    activeStep === index ? "bg-[#f6f6f6]" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: activeStep === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">{step.icon}</div>

                  {/* Title with + button next to it */}
                  <h3 className="text-xl font-medium mb-3 flex items-center justify-center">
                    {step.title}
                    <div
                      className={`info-button ml-2 ${buttonsPulsing ? 'pulse' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleInfoCard(index);
                      }}
                    >
                      +
                    </div>
                  </h3>

                  <p className="text-sm text-gray-700 mx-auto max-w-xs">{step.description}</p>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 -bottom-10 transform -translate-x-1/2"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeStep === index ? 1 : 0.3
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Apply Now Button */}
            <div className="mt-24 flex justify-center">
              <ApplyButton />
            </div>

            {/* Why Us Button */}
            <div className="mt-6 flex justify-center">
              <Link href="/why-us" className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent py-3 px-6 text-sm font-medium transition-colors duration-300 hover:bg-black hover:text-white">
                Why Us
              </Link>
            </div>
          </div>
        </section>

        {/* Back Button - Hidden on mobile */}
        <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center bg-transparent hidden md:flex">
          <div style={{ opacity: 1 }}>
            <div className="">
              <RoundButton href="/about" size="sm">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.31066 8.7502L8.60176 13.0413L7.5411 14.102L1.96967 8.53053C1.67678 8.23763 1.67678 7.76276 1.96967 7.46987L7.5411 1.89844L8.60176 2.9591L4.31066 7.2502H14.5V8.7502H4.31066Z" fill="currentColor"></path>
                </svg>
              </RoundButton>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed info card container on the right side */}
      <div className="info-card-container">
        {activeInfoCard !== null && (
          <div
            className={`info-card ${activeInfoCard !== null ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="info-card-close"
              onClick={() => setActiveInfoCard(null)}
            >
              ×
            </div>
            <div className="info-card-title text-left">
              {activeInfoCard !== null && detailedInfo[activeInfoCard].title}
            </div>
            <div className="info-card-content fade-in text-sm">
              {activeInfoCard !== null && detailedInfo[activeInfoCard].content}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
