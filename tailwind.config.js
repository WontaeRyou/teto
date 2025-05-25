/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#2C3E50',
        sub: '#7F8C8D',
        primary: '#2563EB',
        primaryHover: '#1D4ED8',
        accent: '#FACC15',
        bg: '#FAFAFA',
      },
    },
  },
  plugins: [],
} 