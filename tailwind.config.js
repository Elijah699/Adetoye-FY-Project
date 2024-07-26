/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay: '#000211D9',
        secondary: '#000211',
        black: {
          100: '#000000'
        },
        gray: {
          100: '#F7F7F7',
          200: '#FFFFFFDE',
        },
        blue: {
          100: '#023e73',
        } 
      },
    },
  },
  plugins: [],
}

