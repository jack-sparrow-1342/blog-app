/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors :{
        SaintPetersburgDarkBlue: '#B60071',
        SaintPetersburgLightBlue: '#E4003A',
        LightGray: '#BCC5CE',
        DarkGray: '#65696f',
      },
    },
  },
  plugins: [],
}

