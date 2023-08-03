<script setup lang="ts">
import { TransitionFade } from "@morev/vue-transitions";

const { menuVisible, toggleMenu, windowWidth } = useMenu();

const goToTop = (): void => {
  window.scrollTo(0, 0);
};

const showGoToTopButton = ref<boolean>(false);

onMounted(() => {
  document.addEventListener("scroll", (e) => {
    showGoToTopButton.value = window.scrollY > 0;
  });
});
</script>

<template>
  <div class="fixed bottom-4 right-4 flex flex-col gap-2 z-30">
    <transition-fade>
      <div
        v-if="showGoToTopButton && !menuVisible"
        class="h-14 w-14 border-2 border-primary bg-dark-900 flex items-center justify-center rounded-full active:bg-primary"
        @click="goToTop"
      >
        <Icon name="mdi:arrow-top" />
      </div>
    </transition-fade>

    <div
      v-if="windowWidth < 1023"
      class="h-14 w-14 border-2 border-primary bg-dark-900 flex items-center justify-center rounded-full active:bg-primary"
      @click="toggleMenu"
    >
      <transition-fade>
        <Icon v-if="menuVisible" name="mdi:close" class="absolute" />
        <Icon v-else name="mdi:menu" class="absolute" />
      </transition-fade>
    </div>
  </div>

  <transition-fade>
    <Profile
      v-if="menuVisible"
      key="profile-menu"
      class="!fixed !flex top-0 bottom-0 left-0 right-0 bg-dark-900 z-20 h-full p-4"
    />
  </transition-fade>
</template>
