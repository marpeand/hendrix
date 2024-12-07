import type { Config } from "tailwindcss";
import { darkBackground } from "./blog.config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: darkBackground || "#1A1A1A",
        foreground: {
          50: "#EBEBEB",
          100: "#D6D6D6",
          200: "#ADADAD",
          300: "#858585",
          400: "#5C5C5C",
          500: "#323232",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
          950: "#050505",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
