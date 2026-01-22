import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { ensureGsap, prefersReducedMotion } from "../lib/motion";
import { profile } from "../data/profile";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-nav-item]",
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.05 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={rootRef} className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl container-px py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-brand-500/15 border border-brand-500/25 grid place-items-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold">{profile.name}</div>
            <div className="text-xs text-white/60">Software Engineering Intern</div>
          </div>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href} data-nav-item>
                <a
                  className="px-3 py-2 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/5 transition"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn-primary hidden sm:inline-flex" href="#contact">
            Contact
          </a>
          <button
            type="button"
            className="lg:hidden btn-ghost"
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-white/10 bg-ink-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl container-px py-3">
            <div className="grid grid-cols-2 gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 hover:bg-white/10 transition"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}