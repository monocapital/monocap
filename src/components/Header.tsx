"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        // Hide header when scrolling down, show when scrolling up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 top-6 z-20 flex justify-center text-white mix-blend-difference transition-all duration-500 md:top-10 ${!visible ? '-translate-y-20 opacity-0' : ''}`}
    >
      <Link href="/">
        <h2 className="flex h-6 items-start justify-start">
          <span className="text-[24px] leading-none">Mono Capital</span>
          <span className="text-[10px] font-light leading-none">®</span>
        </h2>
      </Link>
    </header>
  );
}
