/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%)',
      },
    },
  },
  plugins: [],
}