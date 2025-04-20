/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      bellefair: ['Bellefair', 'serif'],
      barlowCondensed: ['Barlow Condensed', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif'],
    },},
  },
  plugins: [],
}
