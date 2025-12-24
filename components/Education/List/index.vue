<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const educationRef = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  educationRef,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "education");
  },
  { threshold: 0.5 },
);

const { education } = useEducation();
</script>

<template>
  <section ref="educationRef" id="education" class="pt-4 md:pb-32 pb-12">
    <h2
      class="text-sm font-semibold uppercase tracking-widest dark:text-sky-400 text-sky-600 mb-8"
    >
      {{ $t("education") }}
    </h2>
    <ul class="flex flex-col md:gap-16 gap-8 group/list">
      <li
        v-for="(item, index) in education"
        :key="`edu-${index}`"
        v-motion-fade-visible
        class="group/item"
      >
        <EducationItem :item="item" />
      </li>
    </ul>
  </section>
</template>
