"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => { setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"); }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    window.dispatchEvent(new Event("themechange"));
  };
  return (
    <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "day" : "night"} mode`}
      className="flex size-10 items-center justify-center rounded-full border border-line text-soft transition hover:border-neon hover:text-neon">
      {theme === "dark" ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </button>
  );
}
