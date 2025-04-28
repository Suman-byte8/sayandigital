/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#38414a',
        secondary: '#777682',
        bgPrimary: '#E3E3E3',
        bgSecondary: '#F5F5F5',
      },

    },
  },
  plugins: [],
}
