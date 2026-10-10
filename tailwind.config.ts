import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: v("ink"), panel: v("panel"), line: v("line"), neon: v("neon"), btn: v("btn"),
        strong: v("strong"), soft: v("soft"), mute: v("mute"), dim: v("dim"),
      },
      fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
    },
  },
  plugins: [],
};
export default config;
