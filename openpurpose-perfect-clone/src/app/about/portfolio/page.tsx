"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import RoundButton from "@/components/RoundButton";
import "./underline-animation.css"; // Import our animated underline CSS
import "./dropdown.css"; // Import dropdown animation CSS

export default function Portfolio() {
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const [nonCryptoOpen, setNonCryptoOpen] = useState(false);
  // Track whether user has manually closed the dropdowns
  const [userClosedCrypto, setUserClosedCrypto] = useState(false);
  const [userClosedNonCrypto, setUserClosedNonCrypto] = useState(false);

  const cryptoRef = useRef<HTMLDivElement>(null);
  const nonCryptoRef = useRef<HTMLDivElement>(null);

  // Toggle functions for manual opening/closing
  const toggleCrypto = () => {
    // If dropdown is being closed, mark it as manually closed
    if (cryptoOpen) {
      setUserClosedCrypto(true);
    } else {
      // If it's being opened, reset the user closed flag
      setUserClosedCrypto(false);
    }
    setCryptoOpen(prev => !prev);
  };

  const toggleNonCrypto = () => {
    // If dropdown is being closed, mark it as manually closed
    if (nonCryptoOpen) {
      setUserClosedNonCrypto(true);
    } else {
      // If it's being opened, reset the user closed flag
      setUserClosedNonCrypto(false);
    }
    setNonCryptoOpen(prev => !prev);
  };

  // Check if element is in viewport
  const isInViewport = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  };

  // Handle scroll to automatically open dropdowns when scrolled into view
  // Only if the user hasn't manually closed them
  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport(cryptoRef.current) && !cryptoOpen && !userClosedCrypto) {
        setCryptoOpen(true);
      }
      if (isInViewport(nonCryptoRef.current) && !nonCryptoOpen && !userClosedNonCrypto) {
        setNonCryptoOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial state after a small delay to ensure page has rendered
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cryptoOpen, nonCryptoOpen, userClosedCrypto, userClosedNonCrypto]);

  return (
    <main className="w-full bg-white font-suisse text-primary antialiased">
      <Header />

      <main className="container size-full w-full px-4 md:px-0 md:w-[50%]">
        <section className="pb-[140px] pt-[144px] text-center">
          {/* Portfolio Button */}
          <div style={{ opacity: 1, transform: "none" }}>
            <RoundButton href="/about" size="lg">
              Portfolio
            </RoundButton>
          </div>

          {/* Portfolio Text */}
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="mt-20">
              Projects/Protocols/Company Investments
            </p>
          </div>

          {/* Crypto Sector */}
          <div style={{ opacity: 1, transform: "none" }} ref={cryptoRef}>
            <h3
              className={`mt-16 mb-4 text-lg font-medium relative inline-block animated-underline-container dropdown-header ${cryptoOpen ? 'open' : ''}`}
              onClick={toggleCrypto}
            >
              Crypto Sector
              <div className="animated-underline"></div>
            </h3>
            <div className={`dropdown-section ${cryptoOpen ? 'open' : ''}`}>
              <div className="flex flex-col items-center space-y-3">
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Solana
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Powerful for developers. Fast for everyone.</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Bonk
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Meme token on Solana</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  JumperExchange
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Cross-chain DEX aggregator</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Layer3
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Web3 education platform</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  DeBridge
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Cross-chain infrastructure</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Algorand
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Sustainable blockchain</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  MonkeDAO
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Solana NFT community</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  LayerZero
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Omnichain interoperability protocol</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Dune
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Blockchain analytics platform</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Base
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Ethereum L2 by Coinbase</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Zora
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">NFT marketplace protocol</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  OverProtocol
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Multichain liquidity protocol</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Pyth
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Oracle solution for DeFi</span>
                </div>
              </div>
            </div>
          </div>

          {/* Non-crypto Sector */}
          <div style={{ opacity: 1, transform: "none" }} ref={nonCryptoRef}>
            <h3
              className={`mt-16 mb-4 text-lg font-medium relative inline-block animated-underline-container dropdown-header ${nonCryptoOpen ? 'open' : ''}`}
              onClick={toggleNonCrypto}
            >
              Non-crypto Sector
              <div className="animated-underline"></div>
            </h3>
            <div className={`dropdown-section ${nonCryptoOpen ? 'open' : ''}`}>
              <div className="flex flex-col items-center space-y-3">
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  Ooakmart
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Niche import market</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  AuctionTech
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Gadget auction place</span>
                </div>
                <div className="transition-all duration-300 hover:scale-110 hover:font-medium cursor-default relative group">
                  BBCA
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Bank Central Asia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center bg-transparent">
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
