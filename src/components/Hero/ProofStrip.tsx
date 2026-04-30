import { useEffect, useRef, useState } from "preact/hooks";

interface ProofItem {
  value: string;
  label: string;
  animate?: boolean;
}

interface Props {
  items: ProofItem[];
}

function parseLeadingNumber(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} | null {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  const number = parseInt(match[2], 10);
  if (Number.isNaN(number)) return null;
  return { prefix: match[1] ?? "", number, suffix: match[3] ?? "" };
}

function CountValue({
  raw,
  run,
  animate,
}: {
  raw: string;
  run: boolean;
  animate: boolean;
}) {
  const parsed = parseLeadingNumber(raw);
  const [n, setN] = useState<number | null>(
    parsed && animate ? 0 : parsed?.number ?? null,
  );

  useEffect(() => {
    if (!parsed) return;
    if (!animate) {
      setN(parsed.number);
      return;
    }
    if (!run) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(parsed.number);
      return;
    }

    const duration = 800;
    const start = performance.now();
    let raf = 0;

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(parsed.number * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, animate, parsed?.number]);

  if (!parsed) return <span>{raw}</span>;
  return (
    <span>
      {parsed.prefix}
      {n ?? 0}
      {parsed.suffix}
    </span>
  );
}

export default function ProofStrip({ items }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRun(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      class="mt-12 grid grid-cols-3 gap-6 border-t border-sky-700/15 dark:border-sky-300/15 pt-6 max-w-[420px]"
    >
      {items.map((item) => (
        <div class="flex flex-col">
          <span class="proof-value text-[24px] md:text-[28px] font-bold leading-none text-sky-700 dark:text-sky-200">
            <CountValue
              raw={item.value}
              run={run}
              animate={item.animate !== false}
            />
          </span>
          <span class="mt-2 text-[11px] uppercase tracking-[0.1em] text-gray-500 dark:text-gray-500 leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
