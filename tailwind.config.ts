import type { Config } from "tailwindcss";

// Sankofa Royale design tokens (see brand-dna.md).
// ink = warm black of the ballroom · carpet = the red carpet · gold = antique award gold · ivory = invitation paper
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F0C0B", 2: "#17120F", 3: "#211915", line: "#3A2C22" },
        carpet: { DEFAULT: "#B3121E", deep: "#7A0C14", glow: "#D6303B" },
        gold: { DEFAULT: "#C8A253", light: "#E6CF96", deep: "#8C6B2C" },
        ivory: { DEFAULT: "#F3EBDD", muted: "#BDB1A0", dim: "#8A7F72" },
      },
      fontFamily: {
        display: ['"Bodoni Moda"', "Didot", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: { label: "0.28em" },
      maxWidth: { page: "1240px" },
      keyframes: {
        kenburns: { "0%": { transform: "scale(1.06)" }, "100%": { transform: "scale(1.16) translate(-1.5%, -1%)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        rise: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: {
        kenburns: "kenburns 14s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        rise: "rise .9s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
