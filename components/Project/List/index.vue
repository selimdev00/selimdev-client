<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const project = ref(null);

const { projects } = useProjects();

const { setActive } = useNav();

const route = useRoute();

const { stop } = useIntersectionObserver(
  project,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) setActive(route, "projects");
  },
  { threshold: 0.5 }
);
</script>

<template>
  <section ref="project" id="projects" class="pt-4">
    <ul class="flex flex-col gap-[45px] group/list">
      <li
        v-for="(item, index) in projects"
        :key="`pro-${index}`"
        v-motion-fade-visible
        class="group/item"
      >
        <ProjectItem :item="item" />
      </li>
    </ul>
  </section>
</template>
