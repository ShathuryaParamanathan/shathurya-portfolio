import React, { useEffect, useRef } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import projects from "../data/projects";
import SectionHeading from "./SectionHeading";
import { makeScrollReveal } from "../lib/motion";

function ProjectCard({ project }) {
  return (
    <article className="card p-6 h-full flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-extrabold leading-tight">{project.title}</h3>
        <div className="h-10 w-10 rounded-2xl bg-brand-500/10 border border-brand-500/25" />
      </div>

      <p className="mt-3 muted leading-relaxed">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <div className="text-sm font-semibold">My contributions</div>
        <ul className="mt-2 space-y-2">
          {project.contributions.slice(0, 4).map((c) => (
            <li key={c} className="muted text-sm">
              <span className="text-brand-500">•</span> {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.github ? (
          <a className="btn-ghost" href={project.links.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
        ) : null}
        {project.links.demo ? (
          <a className="btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
            Live <FiArrowUpRight />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    makeScrollReveal(el.querySelectorAll("[data-reveal]"), { stagger: 0.08 }, { trigger: el });
  }, []);

  return (
    <section id="projects" ref={rootRef} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div data-reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects that show real engineering work."
            desc="Selected work across full-stack, UI, and hardware — focused on usability, reliability, and performance."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.id} data-reveal>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

