import { useEffect, useRef, useState } from "preact/hooks";

interface Props {
  lightLabel: string;
  darkLabel: string;
}

interface DocumentWithViewTransition extends Document {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
}

export default function ThemeToggle({ lightLabel, darkLabel }: Props) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const applyTheme = (next: boolean) => {
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* no-op */
    }
    setIsDark(next);
    document.dispatchEvent(
      new CustomEvent("theme-change", { detail: { isDark: next } }),
    );
  };

  const toggle = () => {
    if (typeof document === "undefined") return;
    const next = !isDark;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const doc = document as DocumentWithViewTransition;
    if (reduce || typeof doc.startViewTransition !== "function") {
      applyTheme(next);
      return;
    }

    const btn = buttonRef.current;
    const rect = btn?.getBoundingClientRect();
    const cx = rect ? rect.left + rect.width / 2 : window.innerWidth - 40;
    const cy = rect ? rect.top + rect.height / 2 : 40;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy),
    );

    const transition = doc.startViewTransition(() => applyTheme(next));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${cx}px ${cy}px)`,
            `circle(${radius}px at ${cx}px ${cy}px)`,
          ],
        },
        {
          duration: 520,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  const checked = mounted ? isDark : false;
  const label = checked ? lightLabel : darkLabel;

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-pressed={checked}
      aria-label={label}
      class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-sky-700 dark:hover:text-sky-200 transition-colors duration-300"
    >
      {checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 3a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1Zm0 14.5a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1ZM4 11a1 1 0 0 1 0 2H2.5a1 1 0 0 1 0-2H4Zm17.5 0a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2h1.5Zm-15.6-6.1a1 1 0 0 1 1.4 0l1.06 1.06a1 1 0 0 1-1.42 1.42L5.9 6.32a1 1 0 0 1 0-1.42Zm10.6 10.6a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 1 1-1.42 1.42L16.5 16.92a1 1 0 0 1 0-1.42Zm0-9.18a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 0 1 1.42 1.42l-1.06 1.06a1 1 0 0 1-1.42 0Zm-10.6 10.6a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 1 1 1.42 1.42L7.32 18.1a1 1 0 0 1-1.42 0ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z" />
        </svg>
      )}
    </button>
  );
}
