export interface Translations {
  website: {
    title: string;
    subtitle: string;
    description: string;
  };
  meta: {
    title: string;
    description: string;
    author: string;
    keywords: string;
  };
  about: string;
  experiences: string;
  projects: string;
  lightMode: string;
  darkMode: string;
  github: string;
  preview: string;
  contactMeNow: string;
  primaryCta: string;
  secondaryCta: string;
  footerContent: string;
  aboutContent: string;
  projectItems: Record<string, { name: string; description: string }>;
  experienceItems: Record<
    string,
    {
      position: string;
      subtitle: string;
      place: string;
      description: string;
    }
  >;
  education: string;
  educationItems: Record<
    string,
    { institution: string; field: string; degree: string }
  >;
  now: string;
  CV: string;
  seeCV: string;
  print: string;
  yearsExperience: string;
  technologies: string;
  spokenLanguages: string;
  languageNames: { russian: string; english: string; turkmen: string };
}
