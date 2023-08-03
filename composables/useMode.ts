const isDark = ref<boolean>(false);

export const useMode = () => {
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDark.value = true;
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    isDark.value = false;
  };

  const setDefaultMode = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      savedTheme === "light" ? setLightMode() : setDarkMode();
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const setMode = (value: boolean) => {
    value ? setDarkMode() : setLightMode();
  };

  return { setDarkMode, setLightMode, setDefaultMode, isDark, setMode };
};
