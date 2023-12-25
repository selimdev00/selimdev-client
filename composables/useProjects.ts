import { useI18n } from "vue-i18n";

export interface Link {
  name: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  links: Link[];
  preview: string;
}

export const useProjects = () => {
  const { t } = useI18n();

  const projects = ref<Project[]>([
    {
      name: "projectItems.legoGen.name",
      description: "projectItems.legoGen.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "SCSS",
        "Vue 3",
        "Vite",
        "Typescript",
      ],
      links: [
        {
          name: "github",
          url: "https://github.com/selimdev00/lego-gen",
        },
        {
          name: "preview",
          url: "https://lego-gen.vercel.app/",
        },
      ],
      preview: "/projects/lego-gen/preview.png",
    },
    {
      name: "projectItems.pokemon.name",
      description: "projectItems.pokemon.description",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Typescript",
        "ky",
        "Ant Design",
      ],
      links: [
        {
          name: "github",
          url: "https://github.com/selimdev00/pokemon-app",
        },
        {
          name: "preview",
          url: "https://pokemon-selimdev.netlify.app/",
        },
      ],
      preview: "/projects/pokemon/preview.png",
    },
    {
      name: "projectItems.fantagolia.name",
      description: "projectItems.fantagolia.description",
      tags: ["HTML", "CSS", "Javascript", "Vue 3", "Nuxt 3", "Tailwind CSS"],
      links: [
        {
          name: "github",
          url: "https://github.com/selimdev00/fantagolia",
        },
        {
          name: "preview",
          url: "https://fantagolia-9jfkjpy8x-richiedev666.vercel.app/",
        },
      ],
      preview: "/projects/fantagolia/preview.png",
    },
  ]);

  return { projects };
};
