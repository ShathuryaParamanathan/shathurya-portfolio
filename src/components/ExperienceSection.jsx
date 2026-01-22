import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function ExperienceSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.09 }, { trigger: el });
  }, []);

  return (
    <section id="experience" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Experience & leadership"
            title="Owning responsibility and driving outcomes."
            desc="Leadership roles and community work that strengthened collaboration, communication, and execution."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.leadership.map((x) => (
            <div key={`${x.title}-${x.period}`} data-reveal className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="font-semibold">{x.title}</div>
                <div className="chip whitespace-nowrap border-brand-500/25 bg-brand-500/10 text-brand-200">
                  {x.period}
                </div>
              </div>
              <p className="mt-3 muted text-sm leading-relaxed">
                Focused on teamwork, ownership, and reliable execution — delivering results with clear communication.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

