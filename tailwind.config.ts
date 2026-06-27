import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1b18",
        paper: "#fbf7ef",
        tomato: "#b53a2d",
        olive: "#5d6f3b",
        cream: "#fffaf0"
      },
      fontFamily: {
        heading: ["var(--font-heading-family)", "Georgia", "serif"],
        body: ["var(--font-body-family)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
}

export default config

