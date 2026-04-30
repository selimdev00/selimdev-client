type Group = NodeListOf<HTMLElement>;

function isInViewportNow(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

function revealAll(els: Group) {
  els.forEach((el) => {
    el.classList.add("is-visible-instant", "is-visible");
  });
}

function init() {
  const fadeEls = document.querySelectorAll<HTMLElement>(
    "[data-fade-on-scroll]",
  );
  const headingEls =
    document.querySelectorAll<HTMLElement>(".section-heading");
  const staggerEls = document.querySelectorAll<HTMLElement>("[data-stagger]");

  if (typeof IntersectionObserver === "undefined") {
    revealAll(fadeEls);
    revealAll(headingEls);
    revealAll(staggerEls);
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    revealAll(fadeEls);
    revealAll(headingEls);
    revealAll(staggerEls);
    return;
  }

  const revealInstant = (el: HTMLElement) => {
    el.classList.add("is-visible-instant", "is-visible");
  };

  const revealAnimated = (el: Element) => {
    el.classList.add("is-visible");
  };

  const observe = (elements: Group, threshold: number) => {
    const remaining: HTMLElement[] = [];
    elements.forEach((el) => {
      if (isInViewportNow(el)) {
        revealInstant(el);
      } else {
        remaining.push(el);
      }
    });
    if (remaining.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealAnimated(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );
    remaining.forEach((el) => io.observe(el));
  };

  observe(fadeEls, 0.12);
  observe(headingEls, 0.6);
  observe(staggerEls, 0.2);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export {};
