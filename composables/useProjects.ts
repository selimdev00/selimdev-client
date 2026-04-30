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
  images: string[];
  date: string;
}

export const useProjects = () => {
  const { t } = useI18n();

  const projects = ref<Project[]>([
    {
      name: "projectItems.legoGen.name",
      description: "projectItems.legoGen.description",
      tags: ["Vue 3", "Vite", "TypeScript"],
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
      images: ["/projects/lego-gen/preview.png"],
      date: "2019-03-15",
    },
    {
      name: "projectItems.pokemon.name",
      description: "projectItems.pokemon.description",
      tags: ["React", "Redux", "TypeScript", "Ant Design"],
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
      images: ["/projects/pokemon/preview.png"],
      date: "2018-11-20",
    },
    {
      name: "projectItems.fantagolia.name",
      description: "projectItems.fantagolia.description",
      tags: ["Nuxt 3", "Tailwind"],
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
      images: ["/projects/fantagolia/preview.png"],
      date: "2018-06-10",
    },
  ]);

  return { projects };
};
