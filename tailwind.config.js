/** @type {import('tailwindcss').Config} */
import techIconsColors from './src/helpers/techIconsColors'

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // see workaround in techIconColors.js (make the custom icon colors available to use in templates)
        ...techIconsColors, // add custom colors
        // 'lime': {
        //   500: techIconsColors.html // override default color
        // }
      },
      fontFamily: {
        'logo': ['Comfortaa']
      }
    },
    // to redefine project color palette
    // colors: {}
  },
  plugins: [],
}