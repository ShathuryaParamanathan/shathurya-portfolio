import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import {
  ensureGsap,
  makeScrollReveal,
  prefersReducedMotion,
} from "../lib/motion";
import { gsap } from "gsap";


const personalTraits = [
  "Thoughtful",
  "Open-Minded",
  "Adaptable",
  "Detail-Oriented",
  "Patient",
  "Resilient",
  "Dependable",
  "Team-Oriented",
  "Calm Under Pressure",
  "Responsible",
  "Disciplined",
  "Authentic",
];

const values = [
  {
    title: "Curiosity",
    description: "Always interested in understanding how things work.",
  },
  {
    title: "Growth",
    description: "See every challenge as an opportunity to improve.",
  },
  {
    title: "Simplicity",
    description: "Prefer clear, thoughtful, and meaningful solutions.",
  },
];

export default function AboutSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.12 },
      { trigger: el },
    );

    if (prefersReducedMotion()) return;

    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.to(".about-float-1", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-float-2", {
        y: 10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="relative py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950" />

      {/* Decorative elements */}
      <div className="about-float-1 pointer-events-none absolute left-[8%] top-20 text-2xl opacity-20">
        ✦
      </div>

      <div className="about-float-2 pointer-events-none absolute right-[10%] bottom-20 text-xl opacity-20">
        +
      </div>

      <div className="container-px mx-auto max-w-6xl">
        {/* Heading */}
        <div data-reveal>
          <SectionHeading
            eyebrow="About me"
            title="What Drives Me"
            desc={profile.about}
          />
        </div>

        {/* Personal Traits */}
        <div data-reveal className="mt-10">
          <div className="flex flex-wrap gap-3">
            {personalTraits.map((trait) => (
              <span
                key={trait}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-4 py-2
                  text-sm
                  text-white/70
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Values */}
        <div data-reveal className="mt-10 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="
                card
                group
                p-6
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">
                  {value.title}
                </h3>

                <p className="muted mt-2 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
