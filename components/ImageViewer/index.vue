<script setup lang="ts">
interface ImageViewerProps {
  src: string;
  alt?: string;
}

const props = defineProps<ImageViewerProps>();

const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
  document.body.style.overflow = "hidden";
};

const close = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    close();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <div>
    <div @click="open" class="cursor-zoom-in">
      <slot />
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          @click="close"
        >
          <button
            class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            @click.stop="close"
          >
            <Icon name="mdi:close" class="text-3xl" />
          </button>

          <img
            :src="props.src"
            :alt="props.alt"
            class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            @click.stop
          />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
