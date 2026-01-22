import React from "react";

export default function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignCls}`}>
      {eyebrow ? (
        <div className="chip border-brand-500/25 bg-brand-500/10 text-brand-200">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
        <span className="text-white">{title}</span>
      </h2>
      {desc ? <p className="muted max-w-3xl leading-relaxed">{desc}</p> : null}
    </div>
  );
}

