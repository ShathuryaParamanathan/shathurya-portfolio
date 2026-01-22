import React, { useEffect, useRef } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function ReferencesSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.1 }, { trigger: el });
  }, []);

  if (!profile.references || profile.references.length === 0) return null;

  return (
    <section id="references" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="References"
            title="Professional contacts."
            desc="People who can speak to my work, character, and contributions."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {profile.references.map((ref, idx) => (
            <div key={idx} data-reveal className="card p-6">
              <div className="font-semibold">{ref.name}</div>
              <div className="mt-1 muted text-sm">{ref.title}</div>
              <div className="mt-4 space-y-2">
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-brand-500 transition-colors"
                >
                  <FiMail className="h-4 w-4" />
                  {ref.email}
                </a>
                <a
                  href={`tel:${ref.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-brand-500 transition-colors"
                >
                  <FiPhone className="h-4 w-4" />
                  {ref.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
