<script lang="ts" setup>
interface NavItem {
  title: string;
  path: string;
}

const nav = ref<NavItem[]>([
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Experience",
    path: "/#experience",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
]);

const route = useRoute();
</script>

<template>
  <ul class="flex flex-col gap-[11px] uppercase text-[12px] font-semibold">
    <li
      v-for="(item, index) in nav"
      :key="`profile-nav-item-${index}`"
      class="group flex items-center gap-2 opacity-75 transition-all duration-500 hover:opacity-100"
      :class="{'is-active opacity-100': route.href === item.path}"
    >
      <div
        class="h-[1px] w-[40px] group-[.is-active]:w-[80px] bg-white transition-all duration-300"
      ></div>
      <nuxt-link :to="item.path">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
