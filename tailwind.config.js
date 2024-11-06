/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans"],
        logo: ["Roboto"],
      },

      colors: {
        bgMain: "#0D1016",
        txtColor: "#f2f2f2",
        modeColor: "#608BC1",
      },
    },
  },
  plugins: [],
}

