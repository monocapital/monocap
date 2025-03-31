"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface RoundButtonProps {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function RoundButton({
  href,
  children,
  size = "md",
  className = "",
}: RoundButtonProps) {
  const sizeClass =
    size === "sm" ? "size-14" :
    size === "lg" ? "size-56" :
    "size-28";

  return (
    <Link
      href={href}
      className={`inline-flex text-wrap relative items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:bg-primary focus-visible:text-white disabled:pointer-events-none disabled:opacity-50 bg-white rounded-full text-primary hover:bg-primary hover:text-white border-primary border data-[state=on]:bg-primary data-[state=on]:text-white active:bg-primary active:text-white ${sizeClass} group ${className}`}
    >
      {children}
    </Link>
  );
}
