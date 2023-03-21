/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zIndex: {
          '50%': '1',
          '100%': '1',
          '0': '1',
          '49.999': '1'
        }
      }
    },
  },
  plugins: [],
}