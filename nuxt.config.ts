// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Selim Ataballyev - Full Stack Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
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
    baseUrl: "https://selimdev.vercel.app/",
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
    strategy: "no_prefix",
  },
});
