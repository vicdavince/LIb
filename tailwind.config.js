/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo': '#330099',
        'light-indigo': '#5a009c',
        'azure': '#007FFF',
      },
    },
  },
  plugins: [],
}

