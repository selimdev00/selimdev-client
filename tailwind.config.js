/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        dark: {
          900: '#1B262C'
        },
        blue: {
          400: '#BBE1FA'
        },
        gray: {
          300: '#ababab'
        }
      }
    },
  },
  plugins: [],
};
