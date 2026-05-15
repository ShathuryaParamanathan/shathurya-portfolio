import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

function SkillGroup({ title, items, icon }) {
  return (
    <div className="card p-6 group hover:border-brand-500/40 transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-brand-500 text-lg">{icon}</span>
          <div className="text-base font-bold">{title}</div>
        </div>

        <div className="h-9 w-9 rounded-xl bg-brand-500/10 border border-brand-500/20" />
      </div>

      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 gap-2">
        {items?.map((x) => (
          <div
            key={x}
            className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-xs sm:text-sm text-white/80 hover:border-brand-500/30 transition break-words"
          >
            {x}
          </div>
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

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.08 },
      { trigger: el },
    );
  }, []);

  const { skills } = profile;

  return (
    <section id="skills" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I Use to Ship Reliable Work."
            desc="A practical stack focused on building, debugging, and delivering real-world solutions."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div data-reveal>
            <SkillGroup
              title="Programming"
              items={skills.programming || []}
              icon="💻"
            />
          </div>

          <div data-reveal>
            <SkillGroup
              title="Web Development"
              items={skills.web || []}
              icon="🌐"
            />
          </div>

          <div data-reveal>
            <SkillGroup
              title="Databases"
              items={skills.databases || []}
              icon="🗄️"
            />
          </div>

          <div data-reveal>
            <SkillGroup
              title="Cloud & Deployment"
              items={skills.cloud || []}
              icon="☁️"
            />
          </div>

          <div data-reveal className="md:col-span-2">
            <SkillGroup
              title="Tools & Workflow"
              items={skills.tools || []}
              icon="🛠️"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {skills.languages?.length > 0 && (
            <div data-reveal className="card p-6">
              <div className="text-base font-bold flex items-center gap-2">
                🌍 Languages
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-sm text-white/80 hover:border-brand-500/30 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div data-reveal className="card p-6">
            <div className="text-base font-bold flex items-center gap-2">
              ✨ Interests
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {profile.interests?.map((s) => (
                <span
                  key={s}
                  className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-sm text-white/80 hover:border-brand-500/30 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
