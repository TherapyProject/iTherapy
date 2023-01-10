/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg':
          "url('components/HeroSection/HeroSection-images/linearbackground.png')",
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};
