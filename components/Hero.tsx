"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

function Typer({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  const [still, setStill] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setStill(true); return; }
    const w = words[i];
    let t: number;
    if (!del && n < w.length) t = window.setTimeout(() => setN(n + 1), 95);
    else if (!del) t = window.setTimeout(() => setDel(true), 1500);
    else if (n > 0) t = window.setTimeout(() => setN(n - 1), 45);
    else { setDel(false); setI((i + 1) % words.length); return; }
    return () => clearTimeout(t);
  }, [i, n, del, words]);
  const text = still ? words[0] : words[i].slice(0, n);
  return (
       <span className="text-neon [text-shadow:0_0_18px_rgb(var(--neon)/0.55)]">
      {text}<span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[2px] animate-pulse bg-neon" aria-hidden />
    </span>
  );
}

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-[1250px] items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="text-lg text-soft">Hello, I&apos;m</p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[1.05] text-strong">{site.name}.</h1>
        <p className="mt-5 font-display text-[clamp(1.2rem,2.6vw,2rem)] font-medium text-soft">
          And I&apos;m a <Typer words={site.roles} />
        </p>
        <p className="mt-8 max-w-xl text-lg leading-8 text-mute">{site.heroText}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="rounded-lg bg-btn px-8 py-4 font-semibold text-white shadow-[0_0_24px_rgb(var(--btn)/0.45)] transition hover:-translate-y-0.5 hover:bg-neon hover:text-ink">Hire Me</a>
          <a href="#contact" className="rounded-lg border-2 border-dim/70 px-8 py-4 font-semibold text-strong transition hover:-translate-y-0.5 hover:border-neon hover:text-neon">Contact Me</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[460px]">
        <div className="absolute inset-0 -z-10 scale-95 rounded-full bg-neon/20 blur-3xl" aria-hidden />
        <div className="blob relative aspect-[0.95] overflow-hidden border-2 border-neon/60 bg-gradient-to-br from-panel to-ink shadow-[0_0_50px_rgb(var(--neon)/0.25)]">
          <span className="absolute inset-0 flex items-center justify-center font-display text-8xl font-extrabold text-neon/30" aria-hidden>
            {site.name[0]}
          </span>
          {photoOk && (
            <img src="/assets/me.png" alt={`Portrait of ${site.name}`} className="absolute inset-0 size-full object-cover" onError={() => setPhotoOk(false)} />
          )}
        </div>
      </div>
    </section>
  );
}
