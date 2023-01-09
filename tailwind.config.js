/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Anton: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-image.jpg')",
      },
      letterSpacing: {
        widest: ".28em",
      },
    },
  },
  plugins: [],
};