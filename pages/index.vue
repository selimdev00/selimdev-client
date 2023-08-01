<script lang="ts" setup>
import { vIntersectionObserver } from "@vueuse/components";
import { useNav } from "~/composables/useNav";

const navSystem = useNav();

const route = useRoute();

const sectionIntersectionHandler = (
  entries: IntersectionObserverEntry[],
  id: string
) => {
  entries.forEach(async (e) => {
    if (e.isIntersecting) {
      await navSystem.setActive(route, id);
    }
  });
};
</script>

<template>
  <div class="container max-w-[955px] tracking-normal">
    <div class="grid grid-cols-2 gap-[50px] items-start">
      <Profile v-motion-fade />

      <div class="flex flex-col gap-[10px] py-10">
        <About
          v-motion-fade
          id="about"
          data-section="about"
          v-intersection-observer="[
            (entries) => sectionIntersectionHandler(entries, 'about'),
            { threshold: 0.5 },
          ]"
        />

        <section
          id="experiences"
          data-section="experiences"
          class="pt-4 pb-32"
          v-intersection-observer="[
            (entries) => sectionIntersectionHandler(entries, 'experiences'),
            { threshold: 0.5 },
          ]"
        >
          <ul class="flex flex-col gap-16">
            <ExperienceItem v-motion-fade-visible />
            <ExperienceItem v-motion-fade-visible />
            <ExperienceItem v-motion-fade-visible />
            <ExperienceItem v-motion-fade-visible />
            <ExperienceItem v-motion-fade-visible />
          </ul>
        </section>

        <section
          id="projects"
          data-section="projects"
          class="pt-4"
          v-intersection-observer="[
            (entries) => sectionIntersectionHandler(entries, 'projects'),
            { threshold: 0.5 },
          ]"
        >
          <ul class="flex flex-col gap-[45px]">
            <ProjectItem v-motion-fade-visible />
            <ProjectItem v-motion-fade-visible />
            <ProjectItem v-motion-fade-visible />
            <ProjectItem v-motion-fade-visible />
            <ProjectItem v-motion-fade-visible />
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
