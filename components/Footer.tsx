import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1250px] px-6">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line/60 py-10 text-dim sm:flex-row">
        <p>&copy; 2026 {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
