"use client";
import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-[1250px] items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.15fr_1fr]">
      <Reveal>
        <div>
          <p className="text-lg text-soft">Hello, I&apos;m</p>
          <h1 className="mt-2 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-extrabold leading-[1.05] text-strong">{site.name}.</h1>
          <p className="hero-role-glow mt-4 font-display text-lg font-medium">
            {site.roles.join(" · ")}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-8 text-mute">{site.heroText}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-btn px-8 py-4 font-semibold text-white shadow-[0_0_24px_rgb(var(--btn)/0.45)] transition hover:-translate-y-0.5 hover:bg-neon hover:text-ink">View My Projects</a>
            <a href="#contact" className="rounded-lg border-2 border-dim/70 px-8 py-4 font-semibold text-strong transition hover:-translate-y-0.5 hover:border-neon hover:text-neon">Contact Me</a>
          </div>
        </div>
      </Reveal>
      <Reveal>
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
      </Reveal>
    </section>
  );
}
