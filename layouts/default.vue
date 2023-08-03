<script setup lang="ts">
import { useMotionProperties, useSpring } from "@vueuse/motion";

const element = ref(null);

const { motionProperties } = useMotionProperties(element, {
  cursor: "grab",
  x: 0,
  y: 0,
});

const { set } = useSpring(motionProperties);

const eventHandler = ({ ...state }) => {
  set({
    x: state.event.pageX - element.value.clientHeight / 2,
    y: state.event.pageY - element.value.clientWidth / 2,
  });
};
</script>

<template>
  <div
    class="dark:bg-slate-950 bg-sky-50 dark:text-white min-h-screen relative"
    v-move="eventHandler"
  >
    <div class="relative z-10">
      <slot />
    </div>

    <div
      ref="element"
      class="mouse-gradient absolute w-[350px] h-[350px] top-0 left-0 blur-[110px] pointer-events-none z-30 md:block hidden"
    ></div>

    <BottomPanel />
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
