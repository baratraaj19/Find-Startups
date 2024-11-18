import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#D0E2FF", // Light blue for softer contrast
          DEFAULT: "#1A73E8", // Classic blue for main contrast
          "900": "#0A4DA8", // Dark blue for strong accent
        },
        secondary: {
          "100": "#FFF7CC", // Light yellow for softer accent
          DEFAULT: "#FFD700", // Yellow for main accent color (golden yellow)
          "900": "#B38600", // Dark yellow for contrast (golden brown)
        },
        black: {
          "100": "#1A1A1A", // Soft black for subtle contrast
          "200": "#0D0D0D", // Darker black
          "300": "#666666", // Light gray for additional contrast
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F0F0F0", // Light gray for softer backgrounds
          DEFAULT: "#FFFFFF",
        },
        gray: {
          "50": "#F9FAFB",
          "100": "#F3F4F6",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "600": "#4B5563",
          "700": "#374151",
          "800": "#1F2937",
          "900": "#111827",
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0 / 0.5)", // Softer black shadow
        200: "2px 2px 0px 2px rgb(0, 0, 0 / 0.6)", // Darker shadow for strong contrast
        300: "2px 2px 0px 2px rgb(26, 115, 232)", // Primary color shadow for accent
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
