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
        "off-white": "#8F9090",
        "light-black": "#1D1D1B",
        "light-blue": "#009FE3",
        "light-red": "#FF132D",
        "yellow": "#FEBE32",
        "orange": "#EBA82C",
        "gray": "#F5F5F5",
        "light-gray": "#D9D9D9",  
        "dark-yellow": "#F3B72C",
        "dark-gray": "#9DA1A2",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/webp/hero-bg.webp')",
      }
    },
  },
  plugins: [],
} satisfies Config;
