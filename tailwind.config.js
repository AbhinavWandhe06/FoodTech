/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a3c2b",
        gold: "#e8a020",
        light: "#faf7f2",
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
}
