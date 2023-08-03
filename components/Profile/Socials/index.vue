<script lang="ts" setup>
const { socials } = useSocials();
</script>

<template>
  <ul class="flex gap-2">
    <li
      v-for="(social, index) in socials"
      :key="`profile-socials-item-${index}`"
      class="group opacity-75 hover:opacity-100 transition-all duration-300 text-[25px]"
    >
      <nuxt-link :to="social.link" target="_blank">
        <Icon :name="social.icon" />
      </nuxt-link>
    </li>
  </ul>
</template>
