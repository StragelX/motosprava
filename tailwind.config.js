const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto Condensed": ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        primary: "#4D7DF9",
        bg: "#FFEE02",
        bg_gray: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
