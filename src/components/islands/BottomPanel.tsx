import { useEffect, useState } from "preact/hooks";

interface Props {
  menuLabel: string;
  closeLabel: string;
  topLabel: string;
}

export default function BottomPanel({ menuLabel, closeLabel, topLabel }: Props) {
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setShowTop(window.scrollY > 0);
    const onResize = () => setIsMobile(window.innerWidth < 1024);

    onScroll();
    onResize();
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
    document.dispatchEvent(
      new CustomEvent("menu-toggle", { detail: { open: menuOpen } }),
    );
  }, [menuOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ open: boolean }>).detail;
      if (detail) setMenuOpen(detail.open);
    };
    document.addEventListener("menu-set", handler);
    return () => document.removeEventListener("menu-set", handler);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div class="fixed bottom-4 right-4 flex flex-col gap-3 z-40 no-print">
      {showTop && !menuOpen && (
        <button
          type="button"
          onClick={goTop}
          aria-label={topLabel}
          class="h-14 w-14 border border-sky-400 dark:bg-slate-950 bg-white flex items-center justify-center rounded-full active:bg-sky-400 cursor-pointer transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13 20V8.41l4.29 4.3a1 1 0 0 0 1.42-1.42l-6-6a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 1.42 1.42L11 8.41V20a1 1 0 0 0 2 0Z" />
          </svg>
        </button>
      )}

      {isMobile && (
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? closeLabel : menuLabel}
          aria-expanded={menuOpen}
          class="h-14 w-14 border border-sky-400 dark:bg-slate-950 bg-white flex items-center justify-center rounded-full active:bg-sky-400 cursor-pointer transition-colors duration-300"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
