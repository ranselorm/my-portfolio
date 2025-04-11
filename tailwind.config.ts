/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#583ebc",
        dark: "#22212a",
        grey: "#ebf2f9",
        deep: "#dfebf6",
        spotlight: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero.jpg')",
      },
      fontFamily: {
        primary: ["Aeonik", "sans-serif"],
        heading: ["Rubik", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        pure: ["puremechanic", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
