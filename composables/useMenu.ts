import { onMounted, onUnmounted, ref } from "vue";

const menuVisible = ref<boolean>(false);
const windowWidth = ref<number>(0);

export const useMenu = () => {
  let resizeHandler: (() => void) | null = null;

  const toggleMenu = (): void => {
    if (windowWidth.value > 1023) return;

    menuVisible.value = !menuVisible.value;

    document.body.classList.toggle("overflow-hidden");
  };

  onMounted(() => {
    windowWidth.value = window.innerWidth;

    resizeHandler = () => {
      windowWidth.value = window.innerWidth;

      if (windowWidth.value > 768) {
        menuVisible.value = false;

        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", resizeHandler);
  });

  onUnmounted(() => {
    if (resizeHandler) {
      window.removeEventListener("resize", resizeHandler);
    }
  });

  return { menuVisible, toggleMenu, windowWidth };
};
