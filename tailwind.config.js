/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        'deep-navy' : '#2B3864',
        'cool-steel' : '#C0C5D7',
        'steel-blue' : '#7A83A6',
      },
    },
  },
  plugins: [],
}