import { useEffect, useState } from "preact/hooks";

interface Props {
  src: string;
  alt: string;
}

export default function ImageViewer({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        class="cursor-zoom-in block focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`Open ${alt}`}
      >
        <span class="block w-[100px] h-[70px]">
          <img
            class="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
          />
        </span>
      </button>

      {open && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12Z" />
            </svg>
          </button>
          <img
            src={src}
            alt={alt}
            class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
