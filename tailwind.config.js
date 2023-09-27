/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'light-black': "#555",
        'hero-heading':"#614BC3",
        'hero-offer-bg':"#94A684",
        'button-bg':"#FF9494",
        '96C291':"#96C291",
        'CEDEBD':"#96C291"
      },
    },
  },
  plugins: [
    require('tailwindcss-easing'),
  ],
}