import { useEffect, useState } from "preact/hooks";

interface Props {
  topLabel: string;
}

export default function BottomPanel({ topLabel }: Props) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showTop) return null;

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={topLabel}
      class="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 shadow-sm hover:text-sky-700 dark:hover:text-sky-200 transition-colors duration-300 no-print"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13 20V8.41l4.29 4.3a1 1 0 0 0 1.42-1.42l-6-6a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 1.42 1.42L11 8.41V20a1 1 0 0 0 2 0Z" />
      </svg>
    </button>
  );
}
