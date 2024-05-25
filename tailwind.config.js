/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    // Add this to config
    './resources//*.blade.php',
    './resources//*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}