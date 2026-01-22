import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

function SkillGroup({ title, items }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="text-base font-bold">{title}</div>
        <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((x) => (
          <span key={x} className="chip">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.08 }, { trigger: el });
  }, []);

  const { skills } = profile;

  return (
    <section id="skills" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to ship reliable work."
            desc="A practical stack — focused on building, debugging, and delivering."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div data-reveal>
            <SkillGroup title="Programming languages" items={skills.programming} />
          </div>
          <div data-reveal>
            <SkillGroup title="Web development" items={skills.web} />
          </div>
          <div data-reveal>
            <SkillGroup title="Databases & cloud" items={skills.dataCloud} />
          </div>
          <div data-reveal>
            <SkillGroup title="Tools" items={skills.tools} />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {skills.languages && skills.languages.length > 0 && (
            <div data-reveal className="card p-6">
              <div className="text-base font-bold">Languages</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span key={lang} className="chip">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div data-reveal className="card p-6">
            <div className="text-base font-bold">Interests</div>
            <ul className="mt-4 space-y-2">
              {profile.interests.map((s) => (
                <li key={s} className="muted">
                  <span className="text-brand-500">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

