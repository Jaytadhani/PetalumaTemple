/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "heading" : "#822913"
      },
      fontSize : {
        "h1" : "40px",
        "h2" : "30px",
        "p-lg" :"22px",

        "p-sm" : "16px",
        


      }
    },
  },
  plugins: [],
}

