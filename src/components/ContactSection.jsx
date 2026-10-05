import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from "react-icons/fi";

import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { makeScrollReveal } from "../lib/motion";

function getEmailFromMailto(mailto) {
  if (!mailto) return "";

  return mailto.startsWith("mailto:")
    ? mailto.slice("mailto:".length)
    : mailto;
}

export default function ContactSection() {
  const rootRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);

  const email = useMemo(
    () => getEmailFromMailto(profile.links.email),
    []
  );

  useEffect(() => {
    const el = rootRef.current;

    if (!el) return;

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.1 },
      { trigger: el }
    );
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    const fd = new FormData(e.currentTarget);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fd.get("name"),
          from_email: fd.get("email"),
          message: fd.get("message"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Build Something Reliable and Useful."
            desc="If you have an opportunity or project, I’d love to connect."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-5 card p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60">
              Quick Links
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                className="btn-ghost justify-start"
                href={profile.links.email}
              >
                <FiMail /> {email}
              </a>

              <a
                className="btn-ghost justify-start"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub
              </a>

              <a
                className="btn-ghost justify-start"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">
                    Copy Email
                  </div>

                  <div className="muted text-sm">
                    {email}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-ghost"
                  onClick={async () => {
                    await navigator.clipboard.writeText(email);

                    setCopied(true);

                    setTimeout(() => {
                      setCopied(false);
                    }, 1200);
                  }}
                >
                  <FiCopy />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <div data-reveal className="lg:col-span-7 card p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-white/60">
              Send a Message
            </div>

            <form
              className="mt-4 grid gap-3"
              onSubmit={sendEmail}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <textarea
                className="w-full min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                name="message"
                placeholder="Tell me about your project..."
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="btn-primary"
              >
                <FiSend />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}