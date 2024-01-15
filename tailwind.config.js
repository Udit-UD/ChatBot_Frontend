/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': 'rgb(12 21 37)',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

