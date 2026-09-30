/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        slate: "rgb(var(--slate) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        span: "rgb(var(--span) / <alpha-value>)",
        live: "rgb(var(--live) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Geist", "system-ui", "sans-serif"],
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
        script: ["WindSong", "cursive"],
      },
    },
  },
  plugins: [],
};
