const menuVisible = ref<boolean>(false);
const windowWidth = ref<number>(0);

export const useMenu = () => {
  const toggleMenu = (): void => {
    if (windowWidth.value > 1023) return;

    menuVisible.value = !menuVisible.value;

    document.body.classList.toggle("overflow-hidden");
  };

  if (window) {
    windowWidth.value = window.innerWidth;

    window.addEventListener("resize", (e) => {
      windowWidth.value = window.innerWidth;

      if (windowWidth.value > 768) menuVisible.value = false;
    });
  }

  return { menuVisible, toggleMenu, windowWidth };
};
