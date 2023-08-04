export interface Social {
  name: string;
  icon: string;
  link: string;
}

export const useSocials = () => {
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
  ]);

  return { socials };
};
