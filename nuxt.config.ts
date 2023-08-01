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
    langDir: "lang/",
    locales: [
      {
        code: "ru",
        file: "ru.js",
      },
      {
        code: "tk",
        file: "tk.js",
      },
      {
        code: "en",
        file: "en.js",
      },
    ],
    lazy: true,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
  },
});
