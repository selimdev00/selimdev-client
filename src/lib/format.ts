import type { Locale } from "./site";

export function formatMonthYear(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const formatted = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(d);
  // Russian Intl returns "мар 2019 г." - strip the trailing " г." for cleanliness.
  return formatted.replace(/\s*г\.?$/, "");
}
