/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:{
          light: "#333333 ",
          default: "#18181A"
        }
      }
    },
  },
  plugins: [],
}