import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

export default function EducationSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.1 },
      { trigger: el }
    );
  }, []);

  return (
    <section
      id="education"
      ref={rootRef}
      className="relative py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl container-px">

        {/* Section Heading */}
        <div data-reveal>
          <SectionHeading
            eyebrow="Education"
            title="The Path That Led Here"
            desc="A foundation in engineering, logic, and continuous learning, built step by step."
          />
        </div>

        {/* Education Timeline */}
        <div className="relative mt-10">

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-5
              top-6
              bottom-6
              hidden
              w-px
              bg-gradient-to-b
              from-brand-500/40
              via-white/10
              to-transparent
              sm:block
            "
          />

          <div className="space-y-6">
            {profile.education.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="relative sm:pl-14"
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-[13px]
                    top-7
                    hidden
                    h-4
                    w-4
                    rounded-full
                    border-2
                    border-ink-950
                    bg-brand-500
                    shadow-[0_0_0_4px_rgba(255,255,255,0.04)]
                    sm:block
                  "
                />

                {/* Education Item */}
                <div
                  className="
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/15
                    hover:bg-white/[0.035]
                    sm:p-6
                  "
                >
                  <div className="flex items-start gap-4">

                    {/* Institution Logo */}
                    <div
                      className="
                        flex
                        h-28
                        w-28
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                      "
                    >
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt=""
                          aria-hidden="true"
                          className="h-24 w-24 object-contain opacity-80"
                        />
                      ) : (
                        <span className="text-lg text-white/30">
                          🎓
                        </span>
                      )}
                    </div>

                    {/* Main Content */}
                    <div className="min-w-0 flex-1">

                      {/* Title + Period */}
                      <div
                        className="
                          flex
                          flex-col
                          gap-3
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                        "
                      >
                        <div>
                          <h3
                            className="
                              text-base
                              font-semibold
                              leading-snug
                              text-white
                              sm:text-lg
                            "
                          >
                            {item.title}
                          </h3>

                          <p className="muted mt-1 text-sm">
                            {item.org}
                          </p>
                        </div>

                        {/* Period */}
                        <span
                          className="
                            chip
                            w-fit
                            shrink-0
                            border-brand-500/25
                            bg-brand-500/10
                            text-brand-200
                          "
                        >
                          {item.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.03]
                              px-3
                              py-1.5
                              text-xs
                              leading-none
                              text-white/65
                              transition-colors
                              duration-200
                              hover:border-white/20
                              hover:text-white/85
                            "
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}