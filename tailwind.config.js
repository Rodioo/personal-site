/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato'
      },
      colors: {
        'onyx': '#3D3D3D',
        'taupe-gray': '#848188',
        'picton-blue': '#1AA1DB',
        'ncs-blue': '#1586B7',
        'baby-blue': '#6DC7EE',
      },
      width: {
        '168': '36rem',
      },
      spacing: {
        '4%': '4%'
      }
    },
  },
  plugins: [],
}

