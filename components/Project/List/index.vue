<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "projects");
  }
);
</script>

<template>
  <section ref="target" id="projects" class="pt-4">
    <ul class="flex flex-col gap-[45px] group/list">
      <li
        v-for="i in 5"
        :key="`pro-${i}`"
        v-motion-fade-visible
        class="group/item"
      >
        <ProjectItem />
      </li>
    </ul>
  </section>
</template>
