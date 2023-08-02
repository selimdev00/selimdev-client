<script lang="ts">
import { useNav } from "~/composables/useNav";

export default defineNuxtComponent({
  setup() {
    const loading = ref<boolean>(true);

    const route = useRoute();

    const navSystem = useNav();

    onMounted(() => {
      navSystem.setActive(route);

      loading.value = false;
    });

    return {
      nav: navSystem.nav,
      loading,
    };
  },
});
</script>

<template>
  <Icon v-if="loading" name="eos-icons:loading" />

  <ul
    v-else
    class="uppercase flex flex-col items-start gap-[11px] text-[12px] font-semibold"
  >
    <li
      v-for="(item, index) of nav"
      :key="`profile-nav-item-${index}`"
      class="group opacity-75 transition-all duration-500 hover:opacity-100"
      :class="{ 'is-active !opacity-100': item.active }"
    >
      <nuxt-link :to="item.path" class="flex items-center gap-2">
        <div
          class="h-[1px] w-[40px] group-[.is-active]:w-[80px] group-hover:w-[80px] bg-white transition-all duration-300"
        ></div>
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
