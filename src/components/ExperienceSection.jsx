import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function ExperienceSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.09 },
      { trigger: el },
    );
  }, []);

  return (
    <section id="experience" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Experience"
            title="The Path Into Industry"
            desc="My transition from academic learning to real-world software development, contributing to practical and impactful systems."
          />
        </div>

        <div className="mt-10 relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {profile.workExperience?.map((x) => (
              <div
                key={`${x.title}-${x.period}`}
                data-reveal
                className="relative pl-16"
              >
                {/* dot */}
                <div className="absolute left-4 top-14 -translate-x-1/2 h-8 w-8 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-brand-500" />
                </div>

                {/* date (next to line, outside card) */}
                <div className="absolute left-10 top-16 text-xs text-white/60 whitespace-nowrap">
                  {x.period}
                </div>

                {/* card */}
                <div className="card p-6 ml-40 max-w-3xl">
                  <div>
                    <div className="font-semibold">{x.title}</div>
                    <div className="mt-1 muted text-sm">{x.org}</div>
                  </div>

                  <p className="mt-3 muted text-sm leading-relaxed">
                    {x.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-16">
          <SectionHeading
            eyebrow="Beyond the Code"
            title="Leadership and community involvement"
            desc="Moments that shaped how I collaborate, communicate, and contribute to team-driven goals."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.leadership.map((x) => (
            <div
              key={`${x.title}-${x.period}`}
              data-reveal
              className="card p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-semibold">{x.title}</div>
                <div className="chip whitespace-nowrap border-brand-500/25 bg-brand-500/10 text-brand-200">
                  {x.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
