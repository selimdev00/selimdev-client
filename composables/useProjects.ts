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
      tags: ["HTML", "CSS", "Javascript", "SCSS", "Vue 3", "Vite", "Typesript"],
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
  ]);

  return { projects };
};
