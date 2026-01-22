import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ensureGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function makeScrollReveal(targets, vars = {}, scrollVars = {}) {
  if (prefersReducedMotion()) return;
  ensureGsap();

  return gsap.fromTo(
    targets,
    { y: 18, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: "power3.out",
      ...vars,
      scrollTrigger: {
        trigger: scrollVars.trigger ?? targets,
        start: scrollVars.start ?? "top 82%",
        end: scrollVars.end ?? "bottom 20%",
        toggleActions: scrollVars.toggleActions ?? "play none none none",
        once: scrollVars.once ?? true,
        ...scrollVars,
      },
    }
  );
}

