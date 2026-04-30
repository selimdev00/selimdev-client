<script setup lang="ts">
const { totalExperienceYears } = useExperiences();
</script>

<template>
  <div class="flex flex-col gap-3">
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
          alt: 'Selim Ataballyev - Full-Stack Engineer'
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

      <div class="flex items-baseline gap-2 mt-3">
        <span class="text-[26px] font-bold dark:text-sky-200 text-sky-600 leading-none">{{ totalExperienceYears }}+</span>
        <span class="text-[11px] uppercase tracking-wider dark:text-gray-400 text-gray-500">{{ $t("yearsExperience") }}</span>
      </div>
    </div>

    <p class="dark:text-sky-200 text-sky-700 text-[14px] leading-[1.55]">
      {{ $t("website.description") }}
    </p>

    <a
      href="https://t.me/selimdevv"
      target="_blank"
      rel="noopener"
      class="mt-1 inline-flex items-center gap-2 self-start rounded-md border border-sky-500 dark:border-sky-300 px-3 py-2 text-[13px] font-semibold text-sky-700 dark:text-sky-200 transition-colors duration-300 hover:bg-sky-50 dark:hover:bg-slate-900"
    >
      <Icon name="mdi:telegram" class="text-[16px]" />
      <span>{{ $t("primaryCta") }}</span>
      <Icon name="mdi:arrow-right" class="text-[14px]" />
    </a>
  </div>
</template>
