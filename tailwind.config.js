/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "iphone15": "393px",
        "xs": '475px'
      }
    },
  },
  plugins: [],
}

