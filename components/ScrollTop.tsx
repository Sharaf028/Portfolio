"use client";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(scrollY > 400);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <button aria-label="Back to top" onClick={() => scrollTo({ top: 0 })}
      className={`fixed bottom-4 right-4 z-40 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4f9bf0] to-[#3fd6c6] text-white shadow-[0_8px_30px_rgba(79,155,240,.45)] transition duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:size-14 ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m6 15 6-6 6 6" /></svg>
    </button>
  );
}
