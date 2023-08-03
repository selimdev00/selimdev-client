<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const about = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  about,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "about");
  },
  { threshold: 0.7 }
);
</script>

<template>
  <section
    ref="about"
    id="about"
    data-section="about"
    class="py-2 flex flex-col gap-[22px] leading-[26px] dark:text-gray-400 text-gray-600 lg:pb-32 pb-6"
    v-html="$t('aboutContent')"
  ></section>
</template>
