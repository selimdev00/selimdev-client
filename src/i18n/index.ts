import en from "./en";
import ru from "./ru";
import type { Translations } from "./types";
import type { Locale } from "../lib/site";

export const translations: Record<Locale, Translations> = { en, ru };

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

export type { Translations, Locale };
