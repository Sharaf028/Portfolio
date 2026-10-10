"use client";
import { useState } from "react";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/40 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1250px] items-center justify-between px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-wide text-neon">{site.name.split(" ")[0]}</a>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-8 text-sm md:flex" aria-label="Main">
            {site.nav.map((n) => <a key={n.href} href={n.href} className="text-soft transition hover:text-neon">{n.label}</a>)}
          </nav>
          <ThemeToggle />
          <button className="md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-6 bg-strong" /><span className="my-1.5 block h-0.5 w-6 bg-strong" /><span className="block h-0.5 w-6 bg-strong" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-line/40 px-6 py-5 text-soft md:hidden" aria-label="Mobile">
          {site.nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
