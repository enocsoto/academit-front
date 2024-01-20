/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      LoginText: '#313173',
      BGLoginText: '#313173',
    },
  },
  plugins: [],
}