<script setup lang="ts">
const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "Nuxt.js",
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  "Nest.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "SCSS",
  "Git",
  "Docker",
  "Nginx",
  "pm2",
];
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="text-[13px] font-semibold">{{ $t("technologies") }}</p>
    <div class="flex flex-wrap gap-1">
      <span
        v-for="tech in technologies"
        :key="tech"
        class="text-sky-500 dark:text-sky-400 font-medium text-[10px] border border-sky-400 rounded-full px-1.5 py-0.5"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
