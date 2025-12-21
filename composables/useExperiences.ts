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
      from: "2018-07-08",
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
      from: "2019-08-08",
      to: "now",
    },
    {
      position: "experienceItems.sotnikov.position",
      place: "experienceItems.sotnikov.place",
      subtitle: "experienceItems.sotnikov.subtitle",
      description: "experienceItems.sotnikov.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Nest.js",
      ],
      from: "2023-01-01",
      to: "2024-09-01",
    },
    {
      position: "experienceItems.team3205.position",
      place: "experienceItems.team3205.place",
      subtitle: "experienceItems.team3205.subtitle",
      description: "experienceItems.team3205.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "TypeScript",
        "Vue.js",
        "Nuxt.js",
        "React.js",
        "Node.js",
        "Nest.js",
      ],
      from: "2023-07-01",
      to: "now",
    },
  ]);

  const totalExperienceYears = computed(() => {
    if (!experiences.value.length) return 0;

    const dates = experiences.value.map((exp) => new Date(exp.from));
    const earliestDate = new Date(Math.min(...dates.map((d) => d.getTime())));
    const now = new Date();

    const years =
      (now.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
  });

  return { experiences, totalExperienceYears };
};
