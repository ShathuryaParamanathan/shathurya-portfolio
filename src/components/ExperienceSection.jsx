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

          <div className="space-y-12">
            {profile.workExperience?.map((x) => (
              <div
                key={`${x.title}-${x.period}`}
                data-reveal
                className="relative pl-10 md:pl-16"
              >
                {/* dot */}
                <div className="absolute left-4 top-1 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center z-10">
                  <div className="h-3 w-3 rounded-full bg-brand-500" />
                </div>

                {/* content grid */}
                <div className="grid md:grid-cols-[140px_1fr] gap-4 items-start">
                  {/* date */}
                  <div className="text-sm font-semibold text-brand-500/80 md:text-white/60 md:pt-6">
                    {x.period}
                  </div>

                  {/* card */}
                  <div className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="font-bold text-lg">{x.title}</div>
                      <div className="chip text-[10px] sm:text-xs border-brand-500/20 bg-brand-500/5">{x.org}</div>
                    </div>

                    <p className="mt-4 muted text-sm leading-relaxed">
                      {x.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-16">
          <SectionHeading
            eyebrow="Extra-curricular Activities"
            title="Leadership and Community Involvement"
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
