import React, { useEffect, useRef, useMemo } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import {
  ensureGsap,
  makeScrollReveal,
  prefersReducedMotion,
} from "../lib/motion";
import { gsap } from "gsap";

function getProfileSrc() {
  return "/profile_casual.png";
}

export default function AboutSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.12 },
      { trigger: el }
    );

    if (prefersReducedMotion()) return;

    ensureGsap();

    const ctx = gsap.context(() => {
      gsap.to(".va-plus", {
        y: -10,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".va-wave", {
        y: 12,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".va-check", {
        y: -8,
        duration: 2.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const profileSrc = useMemo(() => getProfileSrc(), []);

  return (
    <section id="about" ref={rootRef} className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950" />

      <div className="mx-auto max-w-6xl container-px grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Image */}
        <div className="lg:col-span-5" data-reveal>
          <img
            src={profileSrc}
            onError={(e) => {
              e.currentTarget.src = "/profile.jpg";
            }}
            alt="Shathurya Paramanathan"
            className="h-[360px] w-full object-cover sm:h-[440px] rounded-xl"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <div data-reveal>
            <SectionHeading
              eyebrow="About me"
              title="Behind the Code"
              desc={profile.about}
            />
          </div>

          <div data-reveal className="mt-8 card p-6">
            <p className="muted leading-relaxed">
              I value clarity in structure, efficiency in performance, and
              simplicity in user experience — from database design to interface
              details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}