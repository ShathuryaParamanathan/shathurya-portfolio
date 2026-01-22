import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiCopy, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

function getEmailFromMailto(mailto) {
  if (!mailto) return "";
  return mailto.startsWith("mailto:") ? mailto.slice("mailto:".length) : mailto;
}

export default function ContactSection() {
  const rootRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const email = useMemo(() => getEmailFromMailto(profile.links.email), []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.1 }, { trigger: el });
  }, []);

  return (
    <section id="contact" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something reliable and useful."
            desc="If you have an opportunity or project, I’d love to connect."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-5 card p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60">Quick links</div>
            <div className="mt-4 flex flex-col gap-3">
              <a className="btn-ghost justify-start" href={profile.links.email}>
                <FiMail /> {email}
              </a>
              <a className="btn-ghost justify-start" href={profile.links.github} target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a className="btn-ghost justify-start" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Copy email</div>
                  <div className="muted text-sm">{email}</div>
                </div>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(email);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1200);
                    } catch {
                      // ignore
                    }
                  }}
                >
                  <FiCopy /> {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <div data-reveal className="lg:col-span-7 card p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60">Send a message</div>
            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") || "");
                const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
                const body = encodeURIComponent(String(fd.get("message") || ""));
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-500/50"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-500/50"
                  name="email"
                  placeholder="Your email"
                  type="email"
                  required
                />
              </div>
              <textarea
                className="w-full min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-brand-500/50"
                name="message"
                placeholder="Tell me about your project…"
                required
              />
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">
                  <FiSend /> Send
                </button>
                <a className="btn-ghost" href="#home">
                  <FiMail /> Back to top
                </a>
              </div>
              <p className="muted text-xs">
                This form opens your email app (no backend) — fast, simple, and privacy-friendly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

