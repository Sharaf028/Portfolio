import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12">
      <Reveal>
        <h2 className="font-display text-2xl font-bold text-strong sm:text-3xl">
          <span className="text-neon">/</span> {title}
        </h2>
      </Reveal>
      <div className="mt-7">{children}</div>
    </section>
  );
}
