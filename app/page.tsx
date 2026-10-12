import Stars from "@/components/Stars";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { site } from "@/data/site";

const iconLink = "flex size-14 items-center justify-center rounded-full border border-line bg-panel/70 text-soft transition hover:-translate-y-1 hover:border-neon hover:text-neon hover:shadow-[0_0_22px_rgb(var(--neon)/0.4)]";

export default function Home() {
  return (
    <>
      <Stars />
      <Cursor />
      <ScrollTop />
      <Header />
      <main className="relative z-10">
        <Hero />

        <Section id="about" title="About me">
          <Reveal><p className="max-w-3xl text-lg leading-8 text-soft">{site.about}</p></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {site.focus.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-panel/70 p-6 transition hover:border-neon/60">
                  <h3 className="font-display text-lg font-bold text-neon">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mute">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects"><Projects /></Section>

        <Section id="education" title="Education">
          <div className="space-y-5">
            {site.education.map((e) => (
              <Reveal key={e.school}>
                <div className="rounded-2xl border-l-4 border-neon bg-panel/70 p-6">
                  <h3 className="font-display text-xl font-bold text-strong">{e.school}</h3>
                  <p className="mt-1 text-soft">{e.degree}</p>
                  <p className="mt-1 text-sm text-dim">{e.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical skills">
          <ul className="flex flex-wrap gap-3">
            {site.skills.map((s, i) => (
              <li key={s}>
                <Reveal delay={i * 0.04}>
                  <span className="block rounded-full border border-line bg-panel/70 px-5 py-2.5 text-sm text-soft transition hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon">{s}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Get in touch">
          <Reveal>
            <div className="mt-8 flex gap-5">
              <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}><MailIcon className="size-6" /></a>
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}><GithubIcon className="size-6" /></a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}><LinkedinIcon className="size-6" /></a>
            </div>
          </Reveal>
        </Section>

        <Footer />
      </main>
    </>
  );
}
