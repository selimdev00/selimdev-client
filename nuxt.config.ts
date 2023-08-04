// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  site: {
    url: "https://selimdev.vercel.app",
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
    baseUrl: "https://selimdev.vercel.app",
    compilation: {
      strictMessage: false,
    },
    langDir: "lang/",
    locales: [
      {
        code: "ru",
        file: "ru.js",
        iso: "ru-RU",
      },
      {
        code: "en",
        file: "en.js",
        iso: "en-EN",
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
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://selimdev.vercel.app",
      siteName:
        "Selim Ataballyev | Top Full Stack Developer | Expert Web Solutions & Custom Software Development",
      siteDescription:
        "Looking for a top-notch Full Stack Developer? I am skilled and experienced developer that offers expert web solutions and custom software development services to take your projects to new heights. Contact me today for a seamless online presence and innovative applications.",
      language: "en-US",
      titleSeparator: "|",
      trailingSlash: true,
    },
  },
  linkChecker: {
    failOn404: true,
  },
});
