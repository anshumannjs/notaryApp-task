const formKitTailwind = require('@formkit/themes/tailwindcss')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    formKitTailwind
  ],
}
