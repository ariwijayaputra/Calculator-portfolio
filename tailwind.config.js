/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  fontFamily: {
    sans: ['Nunito', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  theme: {
    extend: {
      spacing: {
        '129': '32rem'
      },
      boxShadow: {
        'md-neu': ' -2px 2px 4px rgba(199, 204, 211, 0.2), 2px -2px 4px rgba(199, 204, 211, 0.2), -2px -2px 4px rgba(253, 255, 255, 0.9), 2px 2px 5px rgba(199, 204, 211, 0.9), inset 1px 1px 2px rgba(253, 255, 255, 0.3), inset -1px -1px 2px rgba(199, 204, 211, 0.5)',
        'md-i-neu': '1px 1px 2px rgba(253, 255, 255, 0.3), -1px -1px 2px rgba(199, 204, 211, 0.5), inset -2px 2px 4px rgba(199, 204, 211, 0.2), inset 2px -2px 4px rgba(199, 204, 211, 0.2), inset -2px -2px 4px rgba(253, 255, 255, 0.9), inset 2px 2px 5px rgba(199, 204, 211, 0.9);',
      }
    },
  },
  plugins: [],
}
