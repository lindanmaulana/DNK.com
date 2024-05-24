/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/css/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
};
