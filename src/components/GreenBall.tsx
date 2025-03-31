"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GreenBall() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative size-96 mx-auto transition-opacity duration-1000 ease-in-out"
      style={{ opacity }}
    >
      <Link href="/about" className="block w-full h-full group">
        <div className="absolute inset-0 hover:opacity-90 transition-all duration-300 rounded-full">
          <div className="relative size-full flex items-center justify-center">
            <Image
              src="https://media.decentralized-content.com/-/rs:fill:2000:2000/g:ce/f:webp/aHR0cHM6Ly9tYWdpYy5kZWNlbnRyYWxpemVkLWNvbnRlbnQuY29tL2lwZnMvYmFmeWJlaWZhNnllb25sd2pyZXo1aXh1ZHN3YW1vY2tpeXZqNWNneHhzNHpuYzJqb2VrbXh3aHRtamk"
              alt="Mono Capital Logo"
              className="size-full object-contain transition-transform duration-300 group-hover:scale-110"
              width={1200}
              height={1200}
              unoptimized
              priority
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
