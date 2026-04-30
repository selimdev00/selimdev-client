import { useEffect, useRef } from "preact/hooks";

const SIZE = 480;
const STIFFNESS = 0.06;

export default function CursorGradient() {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const target = { x: window.innerWidth / 2, y: 0 };
    const current = { x: window.innerWidth / 2, y: 0 };
    let raf = 0;
    let active = true;

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX - SIZE / 2;
      target.y = event.clientY - SIZE / 2;
    };

    const tick = () => {
      current.x += (target.x - current.x) * STIFFNESS;
      current.y += (target.y - current.y) * STIFFNESS;
      const el = elRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }
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
        class="mouse-gradient pointer-events-none absolute top-0 left-0 hidden md:block will-change-transform"
        style={`width:${SIZE}px;height:${SIZE}px;filter:blur(140px);opacity:0.85;`}
      />
    </div>
  );
}
