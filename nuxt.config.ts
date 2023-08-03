// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: "@/assets/scss/main.scss" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxtjs/i18n", "@morev/vue-transitions/nuxt"],
  i18n: {
    compilation: {
      strictMessage: false,
    },
    langDir: "lang/",
    locales: [
      {
        code: "ru",
        file: "ru.js",
      },
      {
        code: "en",
        file: "en.js",
      },
    ],
    lazy: false,
    defaultLocale: "en",

    strategy: "no_prefix",
  },
});
