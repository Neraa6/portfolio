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
        background: "#FAF7F2",
        foreground: "#000000",
        neo: {
          bg: "#FAF7F2",
          black: "#000000",
          white: "#FFFFFF",
          yellow: "#FFDE00",
          lime: "#A3E635",
          orange: "#FF5722",
          coral: "#FF5722",
          blue: "#2563EB",
          pink: "#FF007A",
          cyan: "#00E5FF",
          purple: "#8B5CF6",
          cream: "#FAF7F2",
        },
        secondary: "#FFFFFF",
        accent: {
          DEFAULT: "#FF5722",
          secondary: "#2563EB",
          yellow: "#FFDE00",
          lime: "#A3E635",
        },
        text: {
          primary: "#000000",
          secondary: "#18181B",
          light: "#FFFFFF",
          coral: "#FF5722",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        grotesk: ["var(--font-grotesk)", "var(--font-sans)", "sans-serif"],
        pixel: ["var(--font-pixel)", "var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "none": "0px",
        "sm": "4px",
        "md": "6px",
        "lg": "8px",
        "xl": "12px",
        "2xl": "16px",
      },
      boxShadow: {
        "neo-sm": "2px 2px 0px 0px #000000",
        "neo": "4px 4px 0px 0px #000000",
        "neo-lg": "6px 6px 0px 0px #000000",
        "neo-xl": "8px 8px 0px 0px #000000",
        "neo-2xl": "12px 12px 0px 0px #000000",
        "neo-yellow": "4px 4px 0px 0px #FFDE00",
        "neo-lime": "4px 4px 0px 0px #A3E635",
        "neo-orange": "4px 4px 0px 0px #FF5722",
        "neo-blue": "4px 4px 0px 0px #2563EB",
        "neo-pink": "4px 4px 0px 0px #FF007A",
      },
      animation: {
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;