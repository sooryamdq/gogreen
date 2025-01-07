/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#006400',
        'secondary':'#90EE90',

      }
    },
  },
  plugins: [],
}

