"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

type P = (typeof site.projects)[string][number];

function Card({ p }: { p: P }) {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <article onMouseMove={onMove} className="spot flex flex-col rounded-2xl border border-line bg-panel/70 p-6 transition hover:-translate-y-1 hover:border-neon/60">
      <h3 className="font-display text-lg font-bold text-strong">{p.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-mute">{p.text}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => <li key={t} className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-xs text-neon">{t}</li>)}
      </ul>
      {p.link && !p.soon ? (
        <a href={p.link} target="_blank" rel="noreferrer" className="relative mt-5 font-semibold text-neon hover:underline">View project</a>
      ) : (
        <span className="mt-5 text-sm text-dim">Coming soon</span>
      )}
    </article>
  );
}

export default function Projects() {
  const tabs = Object.keys(site.projects);
  const [tab, setTab] = useState(tabs[0]);
  return (
    <div>
      <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tab === t ? "border-neon bg-neon text-ink shadow-[0_0_18px_rgb(var(--neon)/0.5)]" : "border-line text-soft hover:border-neon/60"}`}>
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects[tab].map((p) => <Card key={p.title} p={p} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
