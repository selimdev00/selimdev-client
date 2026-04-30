<script lang="ts" setup>
const { socials } = useSocials();

const { isDark } = useMode();
</script>

<template>
  <div class="flex flex-col gap-3">
    <ul class="flex gap-2">
      <li
        v-for="(social, index) in socials"
        :key="`profile-socials-item-${index}`"
        class="group opacity-75 hover:opacity-100 transition-opacity duration-300 text-[20px]"
      >
        <nuxt-link
          :to="social.link"
          target="_blank"
          rel="noopener"
          :aria-label="social.name"
        >
          <Icon :name="social.icon" />
        </nuxt-link>
      </li>
    </ul>

    <div class="flex flex-col gap-1">
      <p class="text-[12px] uppercase tracking-wider dark:text-gray-400 text-gray-500">{{ $t("contactMeNow") }}</p>
      <a
        href="mailto:selimdev00@gmail.com"
        class="text-[13px] dark:text-gray-200 text-gray-800 hover:text-sky-600 dark:hover:text-sky-200 transition-colors"
      >
        selimdev00@gmail.com
      </a>
    </div>

    <div class="flex flex-col gap-1">
      <p class="text-[12px] uppercase tracking-wider dark:text-gray-400 text-gray-500">{{ $t("CV") }}</p>
      <div class="flex gap-3 items-center text-[13px] dark:text-gray-200 text-gray-800">
        <a
          :href="isDark ? `/cv/dark.pdf` : `/cv/light.pdf`"
          target="_blank"
          rel="noopener"
          class="hover:text-sky-600 dark:hover:text-sky-200 transition-colors"
        >
          {{ $t("seeCV") }}
        </a>
        <a
          href="/hh.pdf"
          target="_blank"
          rel="noopener"
          class="hover:text-sky-600 dark:hover:text-sky-200 transition-colors"
        >
          PDF
        </a>
      </div>
    </div>
  </div>
</template>
