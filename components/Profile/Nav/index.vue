<script lang="ts" setup>
const loading = ref<boolean>(true);

const route = useRoute();

const { nav, setActive } = useNav();
const { toggleMenu } = useMenu();

onMounted(() => {
  setActive(route);

  loading.value = false;
});
</script>

<template>
  <Icon v-show="loading" name="eos-icons:loading" />

  <ul
    v-show="!loading"
    class="uppercase flex flex-col items-start gap-[11px] text-[12px] font-semibold"
  >
    <li
      v-for="(item, index) of nav"
      :key="`profile-nav-item-${index}`"
      class="group opacity-50 transition-all duration-500 hover:opacity-100"
      :class="{ 'is-active !opacity-100': item.active }"
    >
      <nuxt-link
        :to="item.path"
        class="flex items-center gap-2"
        @click.native="toggleMenu"
      >
        <div
          class="h-[1px] w-[40px] group-[.is-active]:w-[80px] group-hover:w-[80px] dark:bg-white bg-gray-700 transition-all duration-300"
        ></div>
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
