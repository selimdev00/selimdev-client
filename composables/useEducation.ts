import { useI18n } from "vue-i18n";

export interface Education {
  degree: string;
  field: string;
  institution: string;
  from: string;
  to: string;
  link?: string;
}

export const useEducation = () => {
  const { t } = useI18n();

  const education = ref<Education[]>([
    {
      degree: "educationItems.school4.degree",
      field: "educationItems.school4.field",
      institution: "educationItems.school4.institution",
      from: "2011-09-01",
      to: "2021-05-31",
    },
  ]);

  return { education };
};
