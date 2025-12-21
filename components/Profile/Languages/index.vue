<script setup lang="ts">
const spokenLanguages = [
  { name: "languageNames.russian", level: "C2", icon: "twemoji:flag-russia" },
  { name: "languageNames.english", level: "B2", icon: "twemoji:flag-united-states" },
  { name: "languageNames.turkmen", level: "Native", icon: "twemoji:flag-turkmenistan" },
];
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="text-[13px] font-semibold">{{ $t("spokenLanguages") }}</p>
    <div class="flex flex-col gap-1">
      <div
        v-for="lang in spokenLanguages"
        :key="lang.name"
        class="flex items-center gap-2 text-[11px]"
      >
        <Icon :name="lang.icon" class="text-[14px]" />
        <span class="dark:text-gray-300 text-gray-700">{{ $t(lang.name) }}</span>
        <span class="text-[10px] dark:text-gray-500 text-gray-400">({{ lang.level }})</span>
      </div>
    </div>
  </div>
</template>
