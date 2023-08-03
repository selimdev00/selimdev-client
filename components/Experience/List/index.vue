<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "experiences");
  }
);
</script>

<template>
  <section ref="target" id="experiences" class="pt-4 md:pb-32 pb-12">
    <ul class="flex flex-col md:gap-16 gap-8 group/list">
      <li
        v-for="i in 5"
        :key="`exp-${i}`"
        v-motion-fade-visible
        class="group/item"
      >
        <ExperienceItem />
      </li>
    </ul>
  </section>
</template>
