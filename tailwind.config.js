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
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#3282B8",
        dark: {
          900: "#1B262C",
          800: "#212e35",
        },
        blue: {
          400: "#BBE1FA",
        },
        gray: {
          300: "#ababab",
        },
      },
    },
  },
  plugins: [],
};
