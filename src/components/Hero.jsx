import React, { useEffect, useMemo, useRef } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { gsap } from "gsap";
import { ensureGsap, prefersReducedMotion } from "../lib/motion";
import { profile } from "../data/profile";

function getProfileSrc() {
  // User said they'll add PNG; keep jpg fallback for current repo state.
  return "/profile.png";
}

export default function Hero() {
  const rootRef = useRef(null);
  const profileSrc = useMemo(() => getProfileSrc(), []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.set("[data-hero-reveal]", { autoAlpha: 0, y: 18 });
      gsap.set("[data-hero-float]", { y: 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to("[data-hero-reveal]", { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0)
        .to("[data-hero-float]", { y: -10, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.2 }, 0.4);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={rootRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-ink" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

      {/* Decorative Vector Shapes */}
      <div className="pointer-events-none absolute inset-0">
        {/* Triangle */}
        <svg
          data-hero-float
          className="absolute top-20 left-10 h-8 w-8 text-white/20 sm:left-20 sm:h-12 sm:w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L22 20H2L12 2Z" />
        </svg>
        {/* Square */}
        <svg
          data-hero-float
          className="absolute top-40 right-16 h-6 w-6 text-white/20 sm:right-32 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="4" width="16" height="16" />
        </svg>
        {/* Circle */}
        <svg
          data-hero-float
          className="absolute top-60 left-1/4 h-7 w-7 text-white/20 sm:left-1/3 sm:h-11 sm:w-11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        {/* Triangle */}
        <svg
          data-hero-float
          className="absolute bottom-32 right-20 h-9 w-9 text-white/20 sm:right-40 sm:h-14 sm:w-14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L22 20H2L12 2Z" />
        </svg>
        {/* Square */}
        <svg
          data-hero-float
          className="absolute bottom-20 left-1/3 h-8 w-8 text-white/20 sm:left-1/2 sm:h-12 sm:w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="4" y="4" width="16" height="16" />
        </svg>
        {/* Circle */}
        <svg
          data-hero-float
          className="absolute top-1/3 right-10 h-6 w-6 text-white/20 sm:right-24 sm:h-9 sm:w-9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        {/* Triangle */}
        <svg
          data-hero-float
          className="absolute bottom-40 left-16 h-7 w-7 text-white/20 sm:left-32 sm:h-10 sm:w-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L22 20H2L12 2Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl container-px pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Image first on mobile, content second */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div data-hero-float className="absolute -inset-3 rounded-[2rem] border border-white/10 bg-white/5 blur-sm" />
              <div className="relative card p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-ink-850">
                  <img
                    src={profileSrc}
                    onError={(e) => {
                      e.currentTarget.src = "/profile.jpg";
                    }}
                    alt={profile.name}
                    className="h-[360px] w-full object-cover sm:h-[440px]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Focus</div>
                    <div className="muted text-sm">Full-stack + clean UI</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Currently</div>
                    <div className="muted text-sm">Learning & shipping</div>
                  </div>
                </div>
              </div>

              <div data-hero-float className="pointer-events-none absolute -right-3 top-10 hidden h-20 w-20 rounded-2xl border border-white/10 bg-brand-500/10 sm:block" />
              <div data-hero-float className="pointer-events-none absolute -left-4 bottom-10 hidden h-14 w-14 rounded-full border border-white/10 bg-white/5 sm:block" />
            </div>
          </div>

          {/* Content second on mobile, first on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div data-hero-reveal className="chip w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="uppercase tracking-[0.18em] text-white/80">Hey ! </span>
            </div>

            <h1 data-hero-reveal className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block text-white">I’m</span>
              <span className="block text-brand-500">{profile.name}</span>
            </h1>

            <p data-hero-reveal className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
              <span className="font-semibold text-white">{profile.role}</span>
              <span className="block mt-2">{profile.intro}</span>
            </p>

            <div data-hero-reveal className="mt-4 text-sm text-white/60">
              <a href={profile.links.email} className="hover:text-brand-500 transition-colors">{profile.links.email.replace('mailto:', '')}</a>
              {profile.phone && (
                <>
                  <span className="mx-2">|</span>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-brand-500 transition-colors">{profile.phone}</a>
                </>
              )}
              {profile.location && (
                <>
                  <span className="mx-2">|</span>
                  <a className="hover:text-brand-500 transition-colors cursor-default">{profile.location}</a>
                </>
              )}
            </div>

            <div data-hero-reveal className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                View work <FiArrowUpRight />
              </a>
              <a className="btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a className="btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
              <a className="btn-ghost" href={profile.links.email}>
                <FiMail /> Email
              </a>
            </div>

            <div data-hero-reveal className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              <div className="card p-4">
                <div className="text-2xl font-extrabold text-brand-500">06</div>
                <div className="muted text-sm">Months internship</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-extrabold text-brand-500">10+</div>
                <div className="muted text-sm">Projects built</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-extrabold text-brand-500">4th</div>
                <div className="muted text-sm">Year student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

