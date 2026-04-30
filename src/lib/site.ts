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
