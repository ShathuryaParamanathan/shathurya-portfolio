import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import VectorArt from "./VectorArt";
import { profile } from "../data/profile";
import { ensureGsap, makeScrollReveal, prefersReducedMotion } from "../lib/motion";
import { gsap } from "gsap";

export default function AboutSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.12 }, { trigger: el });

    // Vector art subtle float (fixes “2nd image block not working” by adding the intended motion)
    if (prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      gsap.to("#va-plus", { y: -10, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#va-wave", { y: 12, duration: 3.1, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#va-check", { y: -8, duration: 2.9, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950" />

      <div className="mx-auto max-w-6xl container-px">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div data-reveal>
              <SectionHeading
                eyebrow="About me"
                title="I build clean, fast experiences with a product mindset."
                desc={profile.about}
              />
            </div>

            <div data-reveal className="mt-8 card p-6">
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((x) => (
                  <span key={x} className="chip">
                    {x}
                  </span>
                ))}
              </div>
              <p className="mt-4 muted leading-relaxed">
                I care about usability, clarity, and performance — from database design to pixel-level UI details.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="card p-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/60">What I’m aiming for</div>
                  <div className="mt-1 text-lg font-bold">Impactful products</div>
                </div>
                <div className="h-9 w-9 rounded-xl bg-brand-500/15 border border-brand-500/25" />
              </div>

              <div className="mt-5 relative">
                <VectorArt className="h-[260px] w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

