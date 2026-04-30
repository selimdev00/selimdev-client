// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://selim.services",
  },

  css: [{ src: "@/assets/scss/main.scss" }],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@morev/vue-transitions/nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],

  i18n: {
    baseUrl: "https://selim.services",
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
    lazy: true,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
    strategy: "prefix_except_default",
  },

  image: {
    quality: 80,
    format: ["webp", "avif", "png"],
  },

  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || "https://selim.services",
      siteName: "Selim Ataballyev - Full-Stack Engineer",
      siteDescription:
        "Full-stack engineer with 7+ years building production apps in Vue, Nuxt, Next.js, React Native, and Node. Available for senior contract and full-time roles.",
      language: "en-US",
      titleSeparator: "-",
      trailingSlash: true,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/ru", "/sitemap.xml", "/robots.txt"],
    },
  },

  compatibilityDate: "2025-12-22",
});