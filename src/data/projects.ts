export interface ProjectLink {
  name: "github" | "preview";
  url: string;
}

export interface Project {
  nameKey: keyof import("../i18n/types").Translations["projectItems"];
  tags: string[];
  links: ProjectLink[];
  images: string[];
  date: string;
}

export const projects: Project[] = [
  {
    nameKey: "legoGen",
    tags: ["Vue 3", "Vite", "TypeScript"],
    links: [
      { name: "github", url: "https://github.com/selimdev00/lego-gen" },
      { name: "preview", url: "https://lego-gen.vercel.app/" },
    ],
    images: ["/projects/lego-gen/preview.png"],
    date: "2019-03-15",
  },
  {
    nameKey: "pokemon",
    tags: ["React", "Redux", "TypeScript", "Ant Design"],
    links: [
      { name: "github", url: "https://github.com/selimdev00/pokemon-app" },
      { name: "preview", url: "https://pokemon-selimdev.netlify.app/" },
    ],
    images: ["/projects/pokemon/preview.png"],
    date: "2018-11-20",
  },
  {
    nameKey: "fantagolia",
    tags: ["Nuxt 3", "Tailwind"],
    links: [
      { name: "github", url: "https://github.com/selimdev00/fantagolia" },
      {
        name: "preview",
        url: "https://fantagolia-9jfkjpy8x-richiedev666.vercel.app/",
      },
    ],
    images: ["/projects/fantagolia/preview.png"],
    date: "2018-06-10",
  },
];
