"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-10 -translate-x-1/2 flex items-center gap-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
      <Link
        href="/about"
        className={`transition-all hover:opacity-100 ${
          pathname === "/about" ? "opacity-100" : "opacity-50"
        }`}
      >
        About
      </Link>
      <Link
        href="/flow"
        className={`transition-all hover:opacity-100 ${
          pathname === "/flow" ? "opacity-100" : "opacity-50"
        }`}
      >
        Flow
      </Link>
    </nav>
  );
}
