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
    class="dark:bg-dark-900 dark:text-white min-h-screen"
    v-move="eventHandler"
  >
    <div class="relative z-10">
      <slot />
    </div>

    <div ref="element" class="mouse-gradient"></div>
  </div>
</template>

<style lang="scss" scoped>
.mouse-gradient {
  position: absolute;
  background: repeating-linear-gradient(
    to right,
    #0067dc 0%,
    #1d9ce0 50%,
    #36c4e4 100%
  );
  height: 300px;
  width: 300px;
  top: 0;
  left: 0;
  filter: blur(110px);
}
</style>
