import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function CertificationsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.08 }, { trigger: el });
  }, []);

  return (
    <section id="certifications" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Proof of learning and consistency."
            desc="Courses and achievements that reflect growth and strong fundamentals."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.certifications.map((c) => (
            <div key={c} data-reveal className="card p-6 flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-2xl bg-brand-500/10 border border-brand-500/25" />
              <div>
                <div className="font-semibold">{c}</div>
                <div className="muted text-sm">Credential / achievement</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

