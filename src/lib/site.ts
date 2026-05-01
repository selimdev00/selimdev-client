export const site = {
  url: "https://selim.services",
  name: "Selim Ataballyev - Full-Stack Engineer",
  description:
    "Full-stack engineer with 7+ years building production apps in Vue, Nuxt, Next.js, React Native, and Node. Available for senior contract and full-time roles.",
  ownerName: "Selim Ataballyev",
  ownerEmail: "selimdev00@gmail.com",
  telegramUrl: "https://t.me/selimdevv",
  githubUrl: "https://github.com/selimdev00",
  upworkUrl: "https://www.upwork.com/freelancers/~0120bf1792a18108d4",
  stackOverflowUrl: "https://stackoverflow.com/users/14384258/selim",
  ogImage: "/screenshot.png",
} as const;

export type Locale = "en" | "ru";

const startDates = [
  "2018-07-08",
  "2019-08-08",
  "2019-08-08",
  "2023-01-01",
  "2023-07-01",
];

export function totalExperienceYears(reference: Date = new Date()): number {
  const earliest = new Date(
    Math.min(...startDates.map((d) => new Date(d).getTime())),
  );
  const years =
    (reference.getTime() - earliest.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}

export type TechItem = { name: string; icon: string };
export type TechGroupKey = "frontend" | "backend" | "data" | "infra" | "ai";
export type TechGroup = {
  key: TechGroupKey;
  items: readonly TechItem[];
};

export const TECH_GROUPS: readonly TechGroup[] = [
  {
    key: "frontend",
    items: [
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Vue", icon: "simple-icons:vuedotjs" },
      { name: "Nuxt", icon: "simple-icons:nuxt" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "React", icon: "simple-icons:react" },
      { name: "React Native", icon: "simple-icons:react" },
      { name: "Astro", icon: "simple-icons:astro" },
      { name: "Preact", icon: "simple-icons:preact" },
      { name: "Tailwind", icon: "simple-icons:tailwindcss" },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node", icon: "simple-icons:nodedotjs" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Nest", icon: "simple-icons:nestjs" },
      { name: "Hono", icon: "simple-icons:hono" },
      { name: "Laravel", icon: "simple-icons:laravel" },
    ],
  },
  {
    key: "data",
    items: [
      { name: "Postgres", icon: "simple-icons:postgresql" },
      { name: "Redis", icon: "simple-icons:redis" },
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "Drizzle", icon: "simple-icons:drizzle" },
    ],
  },
  {
    key: "infra",
    items: [
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Cloudflare", icon: "simple-icons:cloudflare" },
      { name: "Nginx", icon: "simple-icons:nginx" },
      { name: "pm2", icon: "simple-icons:pm2" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "Claude Code", icon: "simple-icons:claude" },
      { name: "Cursor", icon: "simple-icons:cursor" },
      { name: "MCP", icon: "simple-icons:modelcontextprotocol" },
      { name: "OpenAI SDK", icon: "simple-icons:openai" },
    ],
  },
] as const;
