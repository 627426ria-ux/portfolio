import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#EAD7B7", // Usage: text-gold, bg-gold, border-gold
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],    // Default font (Thin, Clean)
        cursive: ["var(--font-cursive)", "cursive"],  // Great Vibes (Script)
        serif: ["var(--font-serif)", "serif"],        // Playfair Display (Luxury Italic)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;