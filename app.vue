<script setup lang="ts">
import { TransitionFade } from "@morev/vue-transitions";

const { setDefaultMode } = useMode();

const loading = ref<boolean>(true);
onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div class="min-h-screen dark:bg-slate-900 bg-sky-50">
    <transition-fade>
      <Loading v-if="loading" />
    </transition-fade>

    <NuxtLayout v-if="!loading">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
