import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F6F3EB",
        secondary: "#FAF8F5",
        accent: {
          DEFAULT: "#4F624A",
          secondary: "#7F2020",
        },
        text: {
          primary: "#2E2A25",
          secondary: "#5A554D",
        },
        khaki: "#C9CAAC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass": "linear-gradient(145deg, rgba(15,23,42,0.6), rgba(7,11,20,0.8))",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(79, 98, 74, 0.2)",
        "glow-purple": "0 0 20px rgba(127, 32, 32, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s linear infinite",
        "typewriter": "typewriter 2.5s steps(40) forwards",
        "blink": "blink 0.7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        typewriter: {
          "0%": { width: "0ch" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;