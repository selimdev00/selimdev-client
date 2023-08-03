<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const experience = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  experience,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "experiences");
  },
  { threshold: 0.7 }
);

const { experiences } = useExperiences();
</script>

<template>
  <section ref="experience" id="experiences" class="pt-4 md:pb-32 pb-12">
    <ul class="flex flex-col md:gap-16 gap-8 group/list">
      <li
        v-for="(item, index) in experiences"
        :key="`exp-${index}`"
        v-motion-fade-visible
        class="group/item"
      >
        <ExperienceItem :item="item" />
      </li>
    </ul>
  </section>
</template>
