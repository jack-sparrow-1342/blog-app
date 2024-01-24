/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors :{
        SaintPetersburgDarkBlue: '#025091',
        SaintPetersburgLightBlue: '#71C5EE',
        LightGray: '#BCC5CE',
        DarkGray: '#65696f',
      },
    },
  },
  plugins: [],
}

