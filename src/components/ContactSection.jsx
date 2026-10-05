import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiCheck,
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
  const formRef = useRef(null);
  const copyTimeoutRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const email = useMemo(
    () => getEmailFromMailto(profile.links.email),
    [profile.links.email]
  );

  useEffect(() => {
    const el = rootRef.current;

    if (!el) return;

    makeScrollReveal(
      el.querySelectorAll("[data-reveal]"),
      { stagger: 0.1 },
      { trigger: el }
    );

    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus({
      type: "",
      message: "",
    });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out. Your message has been sent successfully.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Clipboard Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to copy the email. Please copy it manually.",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      className="py-16 sm:py-20"
      aria-labelledby="contact-title"
    >
      <div className="container-px mx-auto max-w-6xl">
        {/* Section Header */}
        <div data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s Build Something Reliable and Useful."
            desc="Have an opportunity, project, or technical problem worth solving? Let’s connect."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Contact Information */}
          <div
            data-reveal
            className="card p-6 lg:col-span-5"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Connect
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Let’s start a conversation.
              </h3>

              <p className="muted mt-2 text-sm leading-6">
                Whether it’s a software engineering role, a product idea,
                or an AI-powered solution, I’m open to meaningful
                conversations and opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-6 space-y-3">
              <a
                href={profile.links.email}
                className="btn-ghost w-full justify-start"
                aria-label={`Email ${email}`}
              >
                <FiMail aria-hidden="true" />
                <span className="truncate">{email}</span>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full justify-start"
                aria-label="Visit GitHub profile"
              >
                <FiGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full justify-start"
                aria-label="Visit LinkedIn profile"
              >
                <FiLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Copy Email */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    Prefer email?
                  </p>

                  <p className="muted mt-1 truncate text-sm">
                    {email}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn-ghost shrink-0"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? (
                    <FiCheck aria-hidden="true" />
                  ) : (
                    <FiCopy aria-hidden="true" />
                  )}

                  {copied ? "Copied" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />

              Open to software engineering opportunities
            </div>
          </div>

          {/* Contact Form */}
          <div
            data-reveal
            className="card p-6 lg:col-span-7"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Message
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Tell me what you’re building.
              </h3>
            </div>

            <form
              ref={formRef}
              className="mt-6 grid gap-4"
              onSubmit={sendEmail}
              noValidate
            >
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    disabled={sending}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    disabled={sending}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  className="min-h-[150px] w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.06] focus:ring-2 focus:ring-white/10"
                  name="message"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  required
                  disabled={sending}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center sm:w-auto"
              >
                {sending ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                      aria-hidden="true"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}