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
            eyebrow="Work experience"
            title="Building real-world solutions."
            desc="Professional experience delivering quality solutions across multiple domains."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.workExperience?.map((x) => (
            <div key={`${x.title}-${x.period}`} data-reveal className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{x.title}</div>
                  <div className="mt-1 muted text-sm">{x.org}</div>
                </div>
                <div className="chip whitespace-nowrap border-brand-500/25 bg-brand-500/10 text-brand-200">
                  {x.period}
                </div>
              </div>
              <p className="mt-3 muted text-sm leading-relaxed">
                {x.description}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-16">
          <SectionHeading
            eyebrow="Extracurricular activities"
            title="Leadership and community involvement."
            desc="Roles that strengthened collaboration, communication, and execution."
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

