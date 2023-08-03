import { DateTime } from "luxon";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      DateTime,
    },
  };
});
