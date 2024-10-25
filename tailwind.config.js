/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans"],
      },

      colors: {
        bgMain: "#0D1016",
        txtColor: "#f2f2f2",
      },
    },
  },
  plugins: [],
}

