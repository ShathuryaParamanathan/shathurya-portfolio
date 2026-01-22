import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function EducationSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.1 }, { trigger: el });
  }, []);

  return (
    <section id="education" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Education"
            title="A strong foundation, always improving."
            desc="Academic highlights and milestones that shaped my engineering mindset."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.education.map((item) => (
            <div key={item.title} data-reveal className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="muted">{item.org}</div>
                </div>
                <div className="chip whitespace-nowrap border-brand-500/25 bg-brand-500/10 text-brand-200">
                  {item.period}
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="muted">
                    <span className="text-brand-500">•</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

