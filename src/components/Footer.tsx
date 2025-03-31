"use client";

export default function Footer() {
  return (
    <footer className="fixed bottom-5 left-5 z-20">
      <a
        href="https://portrait.so/mono"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block active transition-transform duration-300 hover:scale-125"
        data-status="active"
      >
        <div className="rounded-full border border-current h-[24px] w-[40px] flex items-center justify-center text-xs">
          MC
        </div>
      </a>
    </footer>
  );
}
