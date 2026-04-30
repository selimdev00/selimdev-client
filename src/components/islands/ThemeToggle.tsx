import { useEffect, useState } from "preact/hooks";

interface Props {
  label: string;
}

export default function ThemeToggle({ label }: Props) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const setTheme = (next: boolean) => {
    if (typeof document === "undefined") return;
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

  const checked = mounted ? isDark : false;

  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        class="sr-only peer"
        checked={checked}
        onInput={(e) =>
          setTheme((e.currentTarget as HTMLInputElement).checked)
        }
      />
      <div class="w-11 h-6 bg-gray-200 peer-focus-visible:ring-4 peer-focus-visible:ring-sky-400 dark:peer-focus-visible:ring-sky-400/50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400" />
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-400">
        {label}
      </span>
    </label>
  );
}
