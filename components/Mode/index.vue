<script setup lang="ts">
const { setMode, isDark, setDefaultMode } = useMode();

onBeforeMount(() => {
  setDefaultMode();
});

const handler = (e: Event) => {
  const input = e.target as HTMLInputElement;
  setMode(input?.checked);
};
</script>

<template>
  <div>
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        @input="handler"
        :checked="isDark"
      />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-400 dark:peer-focus:ring-sky-400/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400"
      ></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">{{
        isDark ? "Light mode" : "Dark mode"
      }}</span>
    </label>
  </div>
</template>
