import type { Translations } from "../i18n/types";

export interface SpokenLanguage {
  nameKey: keyof Translations["languageNames"];
  level: string;
  icon: string;
}

export const spokenLanguages: SpokenLanguage[] = [
  { nameKey: "russian", level: "C2", icon: "twemoji:flag-russia" },
  { nameKey: "english", level: "B2", icon: "twemoji:flag-united-states" },
  { nameKey: "turkmen", level: "Native", icon: "twemoji:flag-turkmenistan" },
];
