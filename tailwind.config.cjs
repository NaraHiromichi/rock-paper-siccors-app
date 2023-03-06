/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Robot': ['Barlow Semi Condensed', 'Inter']
      }
    },
  },
  plugins: [],
}