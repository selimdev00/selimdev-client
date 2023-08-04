<script setup lang="ts">
import { TransitionFade } from "@morev/vue-transitions";

const { setDefaultMode } = useMode();

const loading = ref<boolean>(true);
onMounted(() => {
  loading.value = false;
});

const { t } = useI18n();
const title = computed<string>(
  () => t("website.title") + " - " + t("website.subtitle")
);

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const runtimeConfig = useRuntimeConfig().public;

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
      property: "description",
      content: t("meta.description"),
    },
    {
      property: "twitter:description",
      content: t("meta.description"),
    },
    {
      property: "keywords",
      content: t("meta.keywords"),
    },
    {
      property: "author",
      content: t("meta.author"),
    },
    {
      property: "distribution",
      content: "global",
    },
    {
      property: "robots",
      content: "index,follow",
    },
    {
      property: "revisit-after",
      content: "7 days",
    },
    {
      property: "og:image",
      content: "/screenshot.png",
    },
    {
      property: "twitter:image",
      content: "/screenshot.png",
    },
    {
      property: "og:image:url",
      content: "/screenshot.png",
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
    <SeoKit />

    <SchemaOrgPerson
      :name="$t('website.title')"
      image="/favicon-96x96.png"
      :same-as="['https://github.com/selimdev00']"
    />
    <SchemaOrgWebSite :name="$t('meta.title')" />
    <SchemaOrgWebPage />

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
      <div class="min-h-screen dark:bg-slate-900 bg-sky-50">
        <transition-fade>
          <Loading v-if="loading" />
        </transition-fade>

        <NuxtLayout v-if="!loading">
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>
