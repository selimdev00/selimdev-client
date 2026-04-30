import { useEffect, useRef } from "preact/hooks";

const SIZE = 350;
const STIFFNESS = 0.08;

export default function CursorGradient() {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      target.x = event.pageX - SIZE / 2;
      target.y = event.pageY - SIZE / 2;
    };

    const tick = () => {
      current.x += (target.x - current.x) * STIFFNESS;
      current.y += (target.y - current.y) * STIFFNESS;
      const el = elRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      class="absolute top-0 bottom-0 h-full w-full min-h-screen overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={elRef}
        class="mouse-gradient absolute w-[350px] h-[350px] top-0 left-0 blur-[110px] pointer-events-none z-30 md:block hidden will-change-transform"
      />
    </div>
  );
}
