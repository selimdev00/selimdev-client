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
    title: "about",
    path: "/#about",
    active: false,
  },
  {
    id: "experiences",
    title: "experiences",
    path: "/#experiences",
    active: false,
  },
  {
    id: "projects",
    title: "projects",
    path: "/#projects",
    active: false,
  },
]);

export const useNav = () => {
  const setActive = async (
    route: RouteLocation,
    section: string = ""
  ): Promise<void> => {
    let index: number;

    section
      ? (index = nav.value.findIndex((e) => e.id === section))
      : (index = nav.value.findIndex((e) => e.path === route.fullPath));

    if (index > -1) {
      nav.value.forEach((e) => (e.active = false));

      nav.value[index].active = true;
    }
  };

  return { nav, setActive };
};
