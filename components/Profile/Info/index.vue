<script setup lang="ts">
const { totalExperienceYears } = useExperiences();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col">
      <NuxtPicture
        src="/avatar-face.png"
        :width="150"
        :height="150"
        format="webp,avif,png"
        loading="eager"
        preload
        :img-attrs="{
          class: 'rounded-full border-sky-500 dark:border-sky-200 border-3 mb-3 shadow-lg shadow-sky-200 dark:shadow-slate-800 w-[120px] h-[120px]',
          alt: 'Selim Ataballyev - Full Stack Developer'
        }"
      />

      <h1
        class="text-[32px] font-bold leading-[1] mb-2 text-gray-700 dark:text-white"
      >
        {{ $t("website.title") }}
      </h1>

      <div class="flex">
        <h2 class="text-[16px] font-semibold leading-[1] text-gray-400">
          {{ $t("website.subtitle") }}
        </h2>
      </div>

      <div class="flex items-center gap-2 mt-1">
        <span class="text-[20px] font-bold dark:text-sky-400 text-sky-600">{{ totalExperienceYears }}+</span>
        <span class="text-[12px] dark:text-gray-400 text-gray-500">{{ $t("yearsExperience") }}</span>
      </div>
    </div>

    <p class="dark:text-sky-200 text-sky-500 text-[13px]">
      {{ $t("website.description") }}
    </p>
  </div>
</template>
