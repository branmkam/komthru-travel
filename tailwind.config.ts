import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        default: "6px 6px 5px black",
        red: "6px 6px 5px red",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBlue: "#020430",
      },
      keyframes: {
        smallbounce: {
          "0%, 100%": {
            transform: "translateY(0px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-3px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        fadeInOut: {
          "0%, 100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
      },
      animation: {
        smallbounce: "smallbounce 1s infinite",
        fadeInOut: "fadeInOut 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
