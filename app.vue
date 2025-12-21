<script setup lang="ts">
const { setDefaultMode } = useMode();

const { t } = useI18n();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// Structured Data (JSON-LD)
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://selimdev.vercel.app/#website",
            url: "https://selimdev.vercel.app",
            name: "Selim Ataballyev Portfolio",
            inLanguage: ["en-US", "ru-RU"],
          },
          {
            "@type": "Person",
            "@id": "https://selimdev.vercel.app/#person",
            name: "Selim Ataballyev",
            url: "https://selimdev.vercel.app",
            image: "https://selimdev.vercel.app/avatar-face.png",
            jobTitle: "Full Stack Developer",
            email: "selimdev00@gmail.com",
            sameAs: [
              "https://github.com/selimdev00",
              "https://stackoverflow.com/users/14384258/selim",
              "https://t.me/selimdevv",
              "https://www.upwork.com/freelancers/~0120bf1792a18108d4",
            ],
          },
          {
            "@type": "ProfilePage",
            "@id": "https://selimdev.vercel.app/#profilepage",
            url: "https://selimdev.vercel.app",
            name: "Selim Ataballyev - Full Stack Developer",
            mainEntity: { "@id": "https://selimdev.vercel.app/#person" },
          },
        ],
      }),
    },
  ],
});

useHead({
  meta: [
    {
      property: "og:title",
      content: t("meta.title"),
    },
    {
      property: "title",
      content: t("meta.title"),
    },
    {
      property: "twitter:title",
      content: t("meta.title"),
    },
    {
      property: "og:description",
      content: t("meta.description"),
    },
    {
      name: "description",
      content: t("meta.description"),
    },
    {
      property: "twitter:description",
      content: t("meta.description"),
    },
    {
      name: "keywords",
      content: t("meta.keywords"),
    },
    {
      name: "author",
      content: t("meta.author"),
    },
    {
      name: "distribution",
      content: "global",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      name: "revisit-after",
      content: "7 days",
    },
    {
      property: "og:image",
      content: "https://selimdev.vercel.app/screenshot.png",
    },
    {
      property: "twitter:image",
      content: "https://selimdev.vercel.app/screenshot.png",
    },
    {
      property: "og:image:url",
      content: "https://selimdev.vercel.app/screenshot.png",
    },
    {
      property: "og:image:alt",
      content: "Website screenshot",
    },
  ],
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ $t("website.title") }} - {{ $t("website.subtitle") }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </template>
    </Head>

    <Body>
      <div class="min-h-screen dark:bg-slate-900 bg-white">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>
