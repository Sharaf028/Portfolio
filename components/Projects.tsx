"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { GithubIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

type P = (typeof site.projects)[string][number];

function CaseStudy({ project, onBack }: { project: P; onBack: () => void }) {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mt-12 overflow-hidden rounded-[28px] border border-line bg-panel/80 p-5 shadow-[0_0_24px_rgba(var(--neon)/0.08)] md:p-8">
      <header className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          {project.category && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neon">{project.category}</p>}
          <h3 className="mt-3 font-display text-3xl font-black text-strong md:text-4xl">{project.title}</h3>
          <p className="mt-3 max-w-2xl text-base text-soft">A warm, trustworthy platform where owners rehome pets and adopters can discover their next companion.</p>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-btn px-4 py-2 font-semibold text-white transition hover:bg-neon hover:text-ink">Open in Figma</a>
        )}
      </header>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="overflow-hidden rounded-[20px] border border-line bg-[#201a36] p-4">
          {project.preview && <img src={project.preview} alt={project.title} className="h-full w-full rounded-[16px] object-cover" />}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[20px] border border-line bg-[#1d1730] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">Role</p>
            <p className="mt-2 text-sm text-soft">UI/UX Designer</p>
          </div>
          <div className="rounded-[20px] border border-line bg-[#1d1730] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">Tools</p>
            <p className="mt-2 text-sm text-soft">Figma</p>
          </div>
          <div className="rounded-[20px] border border-line bg-[#1d1730] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">Type</p>
            <p className="mt-2 text-sm text-soft">Landing page · desktop + mobile</p>
          </div>
          <div className="rounded-[20px] border border-line bg-[#1d1730] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">Timeline</p>
            <p className="mt-2 text-sm text-soft">Concept project</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
        <h4 className="font-display text-2xl font-bold text-strong">Overview</h4>
        <p className="mt-4 text-base leading-7 text-soft">
          Pet Stay is a concept platform where owners post pets for rehoming, and adopters browse and connect with pets that match their lifestyle and home. The goal was to make the process feel clear, reassuring, and easy for both groups to use from the very first screen.
        </p>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
          <h4 className="font-display text-2xl font-bold text-strong">Problem &amp; goal</h4>
          <p className="mt-4 text-base leading-7 text-soft">
            Owners looking to rehome a pet and people hoping to adopt can struggle to find a simple, trustworthy place to connect. This concept aims to make it easy to start browsing or learn how to post a pet.
          </p>
        </div>
        <div className="rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
          <h4 className="font-display text-2xl font-bold text-strong">Users</h4>
          <ul className="mt-4 space-y-3 text-base leading-7 text-soft">
            <li><span className="font-semibold text-strong">Pet owners:</span> need a clear, safe-feeling way to share a pet for rehoming.</li>
            <li><span className="font-semibold text-strong">Adopters:</span> need an easy way to discover pets and feel confident reaching out.</li>
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
        <h4 className="font-display text-2xl font-bold text-strong">Design decisions</h4>
        <ul className="mt-4 grid gap-4 text-base leading-7 text-soft md:grid-cols-2">
          <li><span className="font-semibold text-strong">Warm palette and rounded shapes:</span> to make the concept feel friendly and caring.</li>
          <li><span className="font-semibold text-strong">Simple sidebar navigation:</span> to keep the main choices easy to scan.</li>
          <li><span className="font-semibold text-strong">Circular pet-photo area:</span> to give pet imagery a prominent place in the hero.</li>
          <li><span className="font-semibold text-strong">Focused logged-out experience:</span> account-dependent actions can stay separate from the first-time browsing experience.</li>
          <li><span className="font-semibold text-strong">Playful heading and clear body text:</span> to balance personality with readability.</li>
        </ul>
      </section>

      <section className="mt-6 rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
        <h4 className="font-display text-2xl font-bold text-strong">Process</h4>
        <p className="mt-4 text-base leading-7 text-soft">The concept is organized around a straightforward path from the landing page to discovery and, later, account-based actions:</p>
        <ol className="mt-4 flex flex-wrap gap-2 text-sm text-soft">
          {["Landing page", "Browse pets", "Pet details", "Sign in", "Post a pet"].map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-line bg-panel px-3 py-2">{step}</span>
              {index < 4 && <span aria-hidden className="text-neon">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6 rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
        <h4 className="font-display text-2xl font-bold text-strong">Final design</h4>
        {project.preview && (
          <figure className="mt-4">
            <img src={project.preview} alt={`${project.title} landing page design`} className="w-full rounded-[16px] border border-line" />
            <figcaption className="mt-2 text-sm text-mute">Landing page concept preview</figcaption>
          </figure>
        )}
      </section>

      <section className="mt-6 rounded-[24px] border border-line bg-[#201831] p-5 md:p-6">
        <h4 className="font-display text-2xl font-bold text-strong">Reflection &amp; next steps</h4>
        <p className="mt-4 text-base leading-7 text-soft">
          This concept explores how one landing page can speak to both pet owners and adopters. Next, I would develop the browsing and pet-detail experiences, design the account and posting flows, and test the direction with users.
        </p>
      </section>

      <div className="mt-6 flex justify-start">
        <button type="button" onClick={onBack} className="text-sm font-semibold text-neon transition hover:text-soft">Back to projects</button>
      </div>
    </motion.article>
  );
}

function Card({ p, category, index }: { p: P; category: string; index: number }) {
  const isWebProject = category === "Web Development";
  const isGraphicProject = category === "Graphic Design";
  const imageFirst = index % 2 === 1;
  const openLink = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3), ease: "easeOut" }}
      className={`group grid gap-5 border-b border-line/50 py-6 text-left last:border-b-0 sm:gap-6 sm:py-8 md:items-center md:gap-12 md:py-12 ${isWebProject ? "" : "md:grid-cols-2"}`}
    >
      <div className={`flex flex-col items-start ${imageFirst ? "md:order-2" : "md:order-1"}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neon">
          {p.category ?? category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-strong sm:text-2xl md:text-3xl">{p.title}</h3>
        <p className="mt-3 text-sm leading-6 text-mute md:text-base">{p.text}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 text-[11px] font-medium text-neon">{t}</li>
          ))}
        </ul>

        {isWebProject ? (
          p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-transparent px-4 py-2 text-sm font-semibold text-strong transition hover:border-neon hover:text-neon"
            >
              <GithubIcon className="size-4" />
              Open in GitHub
            </a>
          ) : (
            <span className="mt-5 text-sm text-dim">GitHub repository link needed</span>
          )
        ) : p.link && !p.soon ? (
          <button type="button" onClick={(e) => { e.stopPropagation(); openLink(p.link); }} className="mt-5 rounded-full border border-line bg-transparent px-4 py-2 text-sm font-semibold text-strong transition hover:border-neon hover:text-neon">Open in Figma</button>
        ) : !p.preview ? (
          <span className="mt-5 text-sm text-dim">Coming soon</span>
        ) : null}
      </div>

      {!isWebProject && (
        <div className={`relative flex items-center justify-center ${imageFirst ? "md:order-1" : "md:order-2"}`}>
          {p.preview ? (
            <img
              src={p.preview}
              alt={`${p.title} project preview`}
              className={`w-full transition duration-300 group-hover:scale-[1.02] ${isGraphicProject ? "max-h-[32rem] object-contain" : "aspect-[1.55] object-cover shadow-[0_12px_36px_rgb(var(--ink)/0.35)]"}`}
            />
          ) : (
            <div className="flex aspect-[1.55] w-full flex-col items-center justify-center rounded-2xl bg-panel/50 px-6 text-center">
              <span className="font-display text-3xl font-bold text-neon/70">{p.title}</span>
              <p className="mt-2 text-sm text-mute">{category}</p>
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  const categories = Object.keys(site.projects);
  const tabs = ["All", ...categories];
  const [tab, setTab] = useState<string>("All");
  const projectList = tab === "All"
    ? categories.flatMap((category) => site.projects[category].map((p) => ({ p, category })))
    : (site.projects[tab] ?? []).map((p) => ({ p, category: tab }));

  return (
    <div>
      <Reveal>
        <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${tab === t ? "border-neon bg-neon text-ink shadow-[0_0_18px_rgb(var(--neon)/0.5)]" : "border-line text-soft hover:border-neon/60"}`}>
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="mt-8 space-y-6 md:space-y-8">
          {projectList.map(({ p, category }, index) => (
            <Card key={`${category}-${p.title}`} p={p} category={category} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
