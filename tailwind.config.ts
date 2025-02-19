import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gold": "#EBA82C",
        "light-black": "#1D1D1B",
        "light-red": "#FF132D",
        "yellow": "#FEBE32",
        "gray": "#F5F5F5",
        "dark-yellow": "#F3B72C",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/webp/hero-bg.webp')",
      }
    },
  },
  plugins: [],
} satisfies Config;
