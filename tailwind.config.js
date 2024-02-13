/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      BGLoginText: '#313173',
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
}