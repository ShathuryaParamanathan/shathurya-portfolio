import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

function SkillGroup({ title, items, icon }) {
  if (!items?.length) return null;

  return (
    <div className="card p-6 group hover:border-brand-500/40 transition">
      <div className="flex items-center gap-2">
        <span className="text-brand-500 text-lg">{icon}</span>

        <div className="text-base font-bold">
          {title}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 gap-2">
        {items.map((skill) => (
          <div
            key={skill}
            className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-xs sm:text-sm text-white/80 hover:border-brand-500/30 transition break-words"
          >
            {skill}
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
      { trigger: el }
    );
  }, []);

  const { skills } = profile;

  return (
    <section
      id="skills"
      ref={rootRef}
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl container-px">

        {/* Section Heading */}
        <div data-reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I Use to Build & Ship."
            desc="A practical engineering stack focused on building reliable applications, solving problems, integrating AI, and delivering production-ready solutions."
          />
        </div>

        {/* Technical Skills */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">

          {/* Programming */}
          <div data-reveal>
            <SkillGroup
              title="Programming"
              items={skills.programming}
              icon="💻"
            />
          </div>

          {/* Frontend */}
          <div data-reveal>
            <SkillGroup
              title="Frontend Development"
              items={skills.frontend}
              icon="🌐"
            />
          </div>

          {/* Backend */}
          <div data-reveal>
            <SkillGroup
              title="Backend Development"
              items={skills.backend}
              icon="⚙️"
            />
          </div>

          {/* Databases */}
          <div data-reveal>
            <SkillGroup
              title="Databases"
              items={skills.databases}
              icon="🗄️"
            />
          </div>

          {/* AI & Machine Learning */}
          <div data-reveal>
            <SkillGroup
              title="AI & Machine Learning"
              items={skills.ai_ml}
              icon="🤖"
            />
          </div>

          {/* Cloud & DevOps */}
          <div data-reveal>
            <SkillGroup
              title="Cloud & DevOps"
              items={skills.cloud_devops}
              icon="☁️"
            />
          </div>

          {/* Tools & Workflow */}
          <div data-reveal>
            <SkillGroup
              title="Tools & Workflow"
              items={skills.tools}
              icon="🛠️"
            />
          </div>

          {/* Software Engineering */}
          <div data-reveal>
            <SkillGroup
              title="Software Engineering"
              items={skills.engineering}
              icon="🏗️"
            />
          </div>

        </div>

        {/* Languages & Interests */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">

          {/* Languages */}
          {skills.languages?.length > 0 && (
            <div data-reveal className="card p-6">
              <div className="text-base font-bold flex items-center gap-2">
                <span className="text-brand-500">🌍</span>
                Languages
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills.languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-sm text-white/80 hover:border-brand-500/30 transition"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Areas of Interest */}
          {profile.interests?.length > 0 && (
            <div data-reveal className="card p-6">
              <div className="text-base font-bold flex items-center gap-2">
                <span className="text-brand-500">✨</span>
                Areas of Interest
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-2 rounded-lg bg-ink-800 border border-white/5 text-sm text-white/80 hover:border-brand-500/30 transition"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}