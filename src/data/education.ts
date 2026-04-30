export interface Education {
  itemKey: keyof import("../i18n/types").Translations["educationItems"];
  from: string;
  to: string;
  link?: string;
}

export const education: Education[] = [
  {
    itemKey: "school4",
    from: "2011-09-01",
    to: "2021-05-31",
  },
];
