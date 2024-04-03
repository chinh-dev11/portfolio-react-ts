/** @type {import('tailwindcss').Config} */
import techIconsColors from './src/helpers/techIconsColors'

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...techIconsColors, // add custom colors
        // 'lime': {
        //   500: techIconsColors.html // override default color
        // }
      }
    },
    // to redefine project color palette
    // colors: {}
  },
  plugins: [],
}