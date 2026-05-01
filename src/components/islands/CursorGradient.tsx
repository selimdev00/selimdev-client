import { useEffect, useRef } from "preact/hooks";

const STIFFNESS = 0.08;

export default function CursorGradient() {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const target = { x: 50, y: 35 };
    const current = { x: 50, y: 35 };
    let raf = 0;
    let active = true;

    const setVars = () => {
      const el = elRef.current;
      if (!el) return;
      el.style.setProperty("--mx", `${current.x}%`);
      el.style.setProperty("--my", `${current.y}%`);
    };

    setVars();

    if (reduce) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      target.x = (event.clientX / window.innerWidth) * 100;
      target.y = (event.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      current.x += (target.x - current.x) * STIFFNESS;
      current.y += (target.y - current.y) * STIFFNESS;
      setVars();
      if (active) raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        active = false;
        cancelAnimationFrame(raf);
      } else if (!active) {
        active = true;
        raf = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      active = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      class="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={elRef}
        class="mouse-gradient pointer-events-none absolute inset-0 hidden md:block"
      />
    </div>
  );
}
