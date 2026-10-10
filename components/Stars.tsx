"use client";
import { useEffect, useRef } from "react";

type Star = { x: number; y: number; vx: number; vy: number; r: number; t: number };

export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, stars: Star[] = [];
    let accent = "34,211,238", starC = "190,240,255";
    const mouse = { x: -999, y: -999 };

    const init = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = innerWidth; h = innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.3 + 0.3, t: Math.random() * 6.28,
      }));
    };
    const line = (x1: number, y1: number, x2: number, y2: number, a: number) => {
      ctx.strokeStyle = `rgba(${accent},${a})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    };
    const readTheme = () => {
      const cs = getComputedStyle(document.documentElement);
      accent = cs.getPropertyValue("--neon").trim().split(/\s+/).join(",");
      starC = cs.getPropertyValue("--star").trim().split(/\s+/).join(",");
    };
    const draw = () => {
      readTheme();
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!reduce) {
          s.x += s.vx; s.y += s.vy; s.t += 0.02;
          if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
          if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
        }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283);
        ctx.fillStyle = `rgba(${starC},${0.45 + 0.45 * Math.sin(s.t)})`; ctx.fill();
      }
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) line(a.x, a.y, b.x, b.y, (1 - d / 110) * 0.18);
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) line(a.x, a.y, mouse.x, mouse.y, (1 - dm / 170) * 0.5);
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const move = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    init(); draw();
    addEventListener("resize", init);
    const redraw = () => { if (reduce) draw(); };
    addEventListener("pointermove", move);
    addEventListener("themechange", redraw);
    return () => {
      removeEventListener("themechange", redraw); cancelAnimationFrame(raf); removeEventListener("resize", init); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 size-full" />;
}
