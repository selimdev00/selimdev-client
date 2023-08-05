import { fileURLToPath } from "node:url";

const filesNeedToExclude = ["components/Yandex/Metrica"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

console.log(filesPathToExclude);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://selimdev.vercel.app",
  },
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
    lazy: true,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
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
  vite: {
    build: {
      rollupOptions: {
        external: [
          "D:/Selim/Projects/selimdev/client/components/Yandex/Metrica/index.vue",
        ],
      },
    },
  },
});
