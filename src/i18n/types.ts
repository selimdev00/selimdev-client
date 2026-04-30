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
  yearsExperience: string;
  proof: {
    yearsLabel: string;
    projectsValue: string;
    projectsLabel: string;
    sinceValue: string;
    sinceLabel: string;
  };
  technologies: string;
  aiWorkflowLabel: string;
  spokenLanguages: string;
  languageNames: { russian: string; english: string; turkmen: string };
}
