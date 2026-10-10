"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("custom-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      const hit = (e.target as Element).closest?.("a,button,[role=tab]");
      ring.current!.dataset.big = hit ? "true" : "false";
    };
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      dot.current!.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      ring.current!.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move);
    loop();
    return () => {
      cancelAnimationFrame(raf); removeEventListener("pointermove", move);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);
  return (
    <>
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-2 rounded-full bg-neon shadow-[0_0_10px_rgb(var(--neon))] [@media(pointer:fine)]:block" />
      <div ref={ring} data-big="false" aria-hidden className="group pointer-events-none fixed left-0 top-0 z-[100] hidden size-9 [@media(pointer:fine)]:block">
        <div className="size-full rounded-full border border-neon/70 transition-transform duration-200 group-data-[big=true]:scale-[1.7] group-data-[big=true]:bg-neon/10" />
      </div>
    </>
  );
}
