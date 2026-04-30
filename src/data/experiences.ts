export interface Experience {
  positionKey: keyof import("../i18n/types").Translations["experienceItems"];
  tags: string[];
  link?: string;
  from: string;
  to: string;
}

export const experiences: Experience[] = [
  {
    positionKey: "ideal",
    tags: ["Nuxt 2", "Node", "Express", "Postgres"],
    from: "2018-07-08",
    to: "2019-08-08",
  },
  {
    positionKey: "geekspace",
    tags: ["Vue 2", "Nuxt 2", "SCSS"],
    from: "2019-08-08",
    to: "2020-02-08",
  },
  {
    positionKey: "freelance",
    tags: ["Vue 3", "Nuxt 3", "Nest", "React Native", "DivKit", "Strapi"],
    from: "2019-08-08",
    to: "now",
  },
  {
    positionKey: "sotnikov",
    tags: ["Nuxt", "Nest", "Node"],
    from: "2023-01-01",
    to: "2024-09-01",
  },
  {
    positionKey: "team3205",
    tags: ["TypeScript", "Nuxt", "Next", "Nest"],
    from: "2023-07-01",
    to: "now",
  },
];
