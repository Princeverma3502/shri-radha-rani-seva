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
        spiritual: {
          saffron: "#FF9933",     // Bright orange for primary buttons
          deepSaffron: "#D35400", // Darker orange for hover states
          maroon: "#800000",      // Deep red for headings/text
          cream: "#FFFDD0",       // Soft yellowish-white for background
          gold: "#FFB800",        // Accent color for borders/icons
          dark: "#2C3E50",        // Soft black for readable body text
        },
      },
      backgroundImage: {
        'mandala-pattern': "url('/mandala-bg.png')", // We will add this later
      }
    },
  },
  plugins: [],
};
export default config;