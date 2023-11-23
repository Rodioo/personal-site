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
      },
    },
  },
  plugins: [],
}

