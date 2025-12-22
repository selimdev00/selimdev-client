export interface Social {
  name: string;
  icon: string;
  link: string;
}

const socials = ref<Social[]>([
  {
    name: "Github",
    icon: "mdi:github",
    link: "https://github.com/selimdev00",
  },
  {
    name: "StackOverflow",
    icon: "mdi:stackoverflow",
    link: "https://stackoverflow.com/users/14384258/selim",
  },
  {
    name: "Telegram",
    icon: "mdi:telegram",
    link: "https://t.me/selimdevv",
  },
  {
    name: "Gmail",
    icon: "mdi:gmail",
    link: "mailto:selimdev00@gmail.com",
  },
  {
    name: "Upwork",
    icon: "simple-icons:upwork",
    link: "https://www.upwork.com/freelancers/selimdev",
  },
  {
    name: "hh.ru",
    icon: "mdi:briefcase-account",
    link: "https://hh.ru/resume/030344d5ff09a1652e0039ed1f5544506d4c6b",
  },
]);

export const useSocials = () => {
  return { socials };
};
