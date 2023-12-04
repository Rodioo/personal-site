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

