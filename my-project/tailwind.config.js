/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },


      fontFamily: {
        pop: ['Poppins', ...defaultTheme.fontFamily.sans],
        fira: ['Fira Code', ...defaultTheme.fontFamily.sans],
        mont: ['Montserrat', ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [],
}