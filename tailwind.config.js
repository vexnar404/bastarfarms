/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // The key 'manrope' becomes the class 'font-manrope'
        // The value "Manrope" must match the name in the Google Font URL
        manrope: ['"Manrope"', 'sans-serif'],
        caveat: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}

