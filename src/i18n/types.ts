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
  };
  about: string;
  experiences: string;
  lightMode: string;
  darkMode: string;
  contactMeNow: string;
  primaryCta: string;
  githubCta: string;
  available: string;
  skipToContent: string;
  backToTop: string;
  footerContent: string;
  aboutContent: string;
  experienceItems: Record<
    string,
    {
      position: string;
      subtitle: string;
      place: string;
      description: string;
    }
  >;
  now: string;
  CV: string;
  seeCV: string;
  print: string;
  writing: string;
  yearsExperience: string;
  technologies: string;
  aiWorkflowLabel: string;
  techLead: string;
  techGroups: {
    frontend: string;
    backend: string;
    data: string;
    infra: string;
    ai: string;
  };
  techMeta: {
    frontend: string;
    backend: string;
    data: string;
    infra: string;
    ai: string;
  };
  spokenLanguages: string;
  languageNames: { russian: string; english: string; turkmen: string };
  faq: {
    label: string;
    items: { q: string; a: string }[];
  };
}
