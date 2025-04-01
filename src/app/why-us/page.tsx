"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import RoundButton from "@/components/RoundButton";
import AnimatedTransformationSlider from "@/components/AnimatedTransformationSlider";
import "./why-us.css";

export default function WhyUs() {
  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      <Header />

      <main className="container size-full w-full px-4 md:px-0 md:w-[50%]">
        <section className="pb-[140px] pt-[144px] text-center">
          {/* Why Us Button */}
          <div style={{ opacity: 1, transform: "none" }}>
            <RoundButton href="/about" size="md">
              Why Us
            </RoundButton>
          </div>

          {/* Main Headline */}
          <div className="mt-16 mb-14">
            <h1 className="text-2xl md:text-3xl font-medium">
              Beyond Capital
            </h1>
          </div>

          {/* Animated Transformation Slider */}
          <div className="mt-10 mb-20">
            <AnimatedTransformationSlider />
          </div>

          {/* Flow Button and CTA */}
          <div className="mt-24 mb-10 relative">
            <div className="relative inline-flex items-center">
              <RoundButton href="/flow" size="md">
                Flow
              </RoundButton>

              {/* Arrow pointing to the Flow button - adjusted position */}
              <div className="arrow-container absolute top-1/2 -right-65 transform -translate-y-1/2 flex flex-col items-center">
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg -scale-x-100">
                  <path d="M2 12H38M38 12L24 2M38 12L24 22" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="arrow-text text-xs text-gray-500 mt-3 whitespace-nowrap w-44 text-center">
                  Click to see how easy it is partnering with us
                </span>
              </div>
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
    </main>
  );
}
