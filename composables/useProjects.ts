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
      name: t("projects.legoGen.name"),
      description: t("projects.legoGen.description"),
      tags: ["HTML", "CSS", "Javascript", "SCSS", "Vue 3", "Vite", "Typesript"],
      links: [
        {
          name: "Github",
          url: "https://github.com/selimdev00/lego-gen",
        },
        {
          name: "Preview",
          url: "https://lego-gen.vercel.app/",
        },
      ],
      preview: "/projects/lego-gen/preview.png",
    },
  ]);

  return { projects };
};
