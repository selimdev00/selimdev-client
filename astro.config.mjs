import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://selim.services",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    preact({ compat: false }),
    sitemap({
      filter: (page) => !page.includes("/cv-print/"),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ru: "ru-RU",
        },
      },
    }),
    tailwind({ applyBaseStyles: false }),
    icon({
      include: {
        mdi: [
          "github",
          "stackoverflow",
          "telegram",
          "gmail",
          "briefcase-account",
          "arrow-right",
          "arrow-top-right",
        ],
        twemoji: [
          "flag-russia",
          "flag-united-states",
          "flag-turkmenistan",
        ],
        "simple-icons": [
          "upwork",
          "typescript",
          "vuedotjs",
          "nuxt",
          "nextdotjs",
          "react",
          "astro",
          "preact",
          "tailwindcss",
          "nodedotjs",
          "express",
          "nestjs",
          "hono",
          "laravel",
          "postgresql",
          "redis",
          "prisma",
          "drizzle",
          "docker",
          "cloudflare",
          "nginx",
          "pm2",
          "githubactions",
          "claude",
          "modelcontextprotocol",
          "cursor",
          "openai",
        ],
      },
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
