import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-6xl container-px py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-extrabold">{profile.name}</div>
            <div className="muted text-sm">Dark + orange portfolio built with React, Tailwind, and GSAP.</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="btn-ghost" href={profile.links.email}>
              <FiMail /> Email
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="muted text-xs">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <a className="muted text-xs hover:text-white transition" href="#home">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
