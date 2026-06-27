import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f1b16",
        paper: "#f4ead6",
        tomato: "#b53a2d",
        olive: "#5d6f3b",
        cream: "#fff8e8",
        gold: "#f0c35a"
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
