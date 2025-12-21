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
        class="group opacity-75 hover:opacity-100 transition-all duration-300 text-[20px]"
      >
        <nuxt-link :to="social.link" target="_blank">
          <Icon :name="social.icon" />
        </nuxt-link>
      </li>
    </ul>

    <div class="flex flex-col gap-0.5">
      <p class="text-[13px] font-semibold">{{ $t("contactMeNow") }}</p>
      <div class="flex gap-2 items-center text-[11px] dark:text-gray-300 text-gray-700">
        <a
          href="mailto:selimdev00@gmail.com"
          class="opacity-1 hover:opacity-75 transition-opacity"
        >
          selimdev00@gmail.com
        </a>
        <span class="dark:text-gray-500 text-gray-400">|</span>
        <a
          href="https://t.me/selimdevv"
          target="_blank"
          class="opacity-1 hover:opacity-75 transition-opacity"
        >
          Telegram
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-0.5">
      <p class="text-[13px] font-semibold">{{ $t("CV") }}</p>
      <div class="flex gap-2 items-center text-[11px] dark:text-gray-300 text-gray-700">
        <a
          :href="isDark ? `/cv/dark.pdf` : `/cv/light.pdf`"
          target="_blank"
          class="opacity-1 hover:opacity-75 transition-opacity"
        >
          {{ $t("seeCV") }}
        </a>
        <span class="dark:text-gray-500 text-gray-400">|</span>
        <a
          href="/hh.pdf"
          target="_blank"
          class="opacity-1 hover:opacity-75 transition-opacity"
        >
          PDF
        </a>
      </div>
    </div>
  </div>
</template>
