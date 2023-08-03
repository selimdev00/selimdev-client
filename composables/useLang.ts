import { useI18n } from "vue-i18n";

export interface Language {
  name: string;
  code: string;
  icon: string;
}

const languages = ref<Language[]>([
  {
    name: "English",
    code: "en",
    icon: "twemoji:flag-united-states",
  },
  {
    name: "Русский",
    code: "ru",
    icon: "twemoji:flag-russia",
  },
]);

export const useLang = () => {
  const i18n = useI18n();

  const cookieLocale = useCookieLocale();

  const locale = ref<string>(cookieLocale.value);

  const set = async (code: string) => {
    await i18n.setLocale(code);
  };

  watch(
    () => locale.value,
    () => set(locale.value)
  );

  return { set, locale, languages };
};
