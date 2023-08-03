<script lang="ts" setup>
import { vIntersectionObserver } from "@vueuse/components";

const { setActive } = useNav();

const route = useRoute();
</script>

<template>
  <div class="container max-w-[1050px] tracking-normal">
    <div class="grid lg:grid-cols-[1fr_1.5fr] lg:gap-[100px]">
      <Profile key="profile" v-motion-fade-visible />

      <div class="flex flex-col gap-[10px] md:py-10 py-6">
        <ProfileInfo class="lg:hidden block md:py-10 py-4" />

        <About v-motion-fade-visible />

        <ExperienceList />

        <ProjectList />

        <Footer />
      </div>
    </div>
  </div>
</template>
