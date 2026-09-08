/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Bengali"', 'sans-serif'],
        serif: ['"Noto Serif Bengali"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        tiro: ['"Tiro Bangla"', 'serif'],
      },
    },
  },
  plugins: [],
}
