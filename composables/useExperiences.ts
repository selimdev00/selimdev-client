import { useI18n } from "vue-i18n";

export interface Experience {
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  from: string;
  to: string;
  place: string;
  position: string;
}

export const useExperiences = () => {
  const { t } = useI18n();

  const experiences = ref<Experience[]>([
    {
      position: "experienceItems.ideal.position",
      place: "experienceItems.ideal.place",
      subtitle: "experienceItems.ideal.subtitle",
      description: "experienceItems.ideal.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "SCSS",
        "Vue 2",
        "Nuxt 2",
        "node.js",
        "express",
        "mysql",
        "postgresql",
        "Nginx",
        "pm2",
      ],
      from: "2019-07-08",
      to: "2019-08-08",
    },
    {
      position: "experienceItems.geekspace.position",
      place: "experienceItems.geekspace.place",
      subtitle: "experienceItems.geekspace.subtitle",
      description: "experienceItems.geekspace.description",
      tags: ["HTML", "CSS", "Javascript", "SCSS", "Vue 2", "Nuxt 2"],
      from: "2019-08-08",
      to: "2020-02-08",
    },
    {
      position: "experienceItems.freelance.position",
      place: "experienceItems.freelance.place",
      subtitle: "experienceItems.freelance.subtitle",
      description: "experienceItems.freelance.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "SCSS",
        "Vue 3",
        "Nuxt 3",
        "TailwindCSS",
        "PrimeVue",
        "Node.js",
        "Nest.js",
        "Strapi",
        "Nginx",
        "pm2",
        "React Native",
        "DivKit",
        "Figma",
      ],
      from: "2020-02-08",
      to: "now",
    },
  ]);

  return { experiences };
};
