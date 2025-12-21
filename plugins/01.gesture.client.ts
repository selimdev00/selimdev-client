import { GesturePlugin } from "@vueuse/gesture";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.vueApp.use(GesturePlugin);
  }
});
