<script setup lang="ts">
import { useMotionProperties, useSpring } from "@vueuse/motion";

const element = ref<HTMLElement | null>(null);

const { motionProperties } = useMotionProperties(element, {
  cursor: "grab",
  x: 0,
  y: 0,
});

const { set } = useSpring(motionProperties);

const handleMouseMove = (event: MouseEvent) => {
  if (!element.value) return;
  set({
    x: event.pageX - element.value.clientHeight / 2,
    y: event.pageY - element.value.clientWidth / 2,
  });
};
</script>

<template>
  <div
    class="dark:bg-slate-950 bg-white dark:text-white min-h-screen relative"
    @mousemove="handleMouseMove"
  >
    <div class="relative z-10 h-full">
      <slot />
    </div>

    <BottomPanel />

    <div
      class="absolute top-0 bottom-0 h-full w-full min-h-screen overflow-hidden"
    >
      <div
        ref="element"
        class="mouse-gradient absolute w-[350px] h-[350px] top-0 left-0 blur-[110px] pointer-events-none z-30 md:block hidden"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.mouse-gradient {
  background: repeating-linear-gradient(
    to right,
    rgba(0, 103, 220, 0.2) 0%,
    rgba(129, 156, 224, 0.2) 50%,
    rgba(54, 196, 228, 0.2) 100%
  );
}
</style>
