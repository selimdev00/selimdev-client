import { RouteLocation } from "vue-router";

interface NavItem {
  id: string;
  title: string;
  path: string;
  active: boolean;
}

const nav = ref<NavItem[]>([
  {
    id: "about",
    title: "About",
    path: "/#about",
    active: false,
  },
  {
    id: "experiences",
    title: "Experiences",
    path: "/#experiences",
    active: false,
  },
  {
    id: "projects",
    title: "Projects",
    path: "/#projects",
    active: false,
  },
]);

export const useNav = () => {
  const router = useRouter();

  const setActive = async (
    route: RouteLocation,
    section: string = ""
  ): Promise<void> => {
    nav.value.forEach((e) => (e.active = false));

    let index: number;

    section
      ? (index = nav.value.findIndex((e) => e.id === section))
      : (index = nav.value.findIndex((e) => e.path === route.fullPath));

    if (index >= 0) {
      const currentItem = nav.value[index];

      currentItem.active = true;
    }
  };

  return { nav, setActive };
};
