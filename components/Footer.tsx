import { site } from "@/data/site";
import { LocationIcon } from "@/components/Icons";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1250px] px-6">
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line/60 py-8 text-center text-sm text-dim sm:flex-row sm:text-left">
          <p>&copy; 2026 {site.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <LocationIcon className="size-4 text-neon" />
            Dhaka, Bangladesh
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
