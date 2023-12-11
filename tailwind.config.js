/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotSlab: ["Roboto Slab", "sans-serif"],
        tomorrow: ["Tomorrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
