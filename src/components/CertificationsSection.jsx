import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function CertificationsSection() {
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

  return (
    <section id="certifications" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">

        <div data-reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Achievements & Learning Milestones"
            desc="A collection of certifications that reflect continuous learning and technical growth."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.certifications.map((c) => (
            <div
              key={c}
              data-reveal
              className="card p-6 flex items-start gap-4 group hover:border-brand-500/40 transition"
            >
              {/* Icon badge */}
              <div className="mt-1 text-brand-500 text-lg">🏆</div>

              {/* Content */}
              <div>
                <div className="font-semibold text-white/90 group-hover:text-white transition">
                  {c}
                </div>

                <div className="mt-1 text-sm text-white/50">
                  Certification achievement
                </div>
              </div>

              {/* Right glow indicator */}
              <div className="ml-auto h-8 w-8 rounded-xl bg-brand-500/10 border border-brand-500/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}