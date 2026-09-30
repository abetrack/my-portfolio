import React from "react";
import Reveal from "./Reveal";
import { roles, spans, TIMELINE_START } from "../data";
import { formatDuration } from "../time";

function withFigures(text, figures) {
  if (!figures.length) return text;
  const re = new RegExp(`(${figures.map((f) => f.replace("%", "\\%")).join("|")})`, "g");
  return text.split(re).map((part, i) =>
    figures.includes(part) ? (
      <mark key={i} className="fig">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function MiniTrack({ span }) {
  const now = new Date();
  const domainEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const total = domainEnd - TIMELINE_START;
  const left = ((span.start - TIMELINE_START) / total) * 100;
  const width = (((span.end ?? now) - span.start) / total) * 100;
  return (
    <div className="mini-track" aria-hidden="true">
      <span className={span.end ? "" : "live"} style={{ left: `${left}%`, width: `${width}%` }} />
    </div>
  );
}

export default function Experience() {
  const now = new Date();
  return (
    <section id="experience" className="rule-t">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Experience</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-rule border-y border-rule">
          {roles.map((role) => {
            const span = spans.find((s) => s.id === role.id);
            return (
              <Reveal as="article" key={role.id} id={`role-${role.id}`} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-sm">{role.when}</p>
                  <p className="tag mt-1">
                    {formatDuration(span.start, span.end ?? new Date(now.getFullYear(), now.getMonth() + 1, 1))}
                    {span.end ? "" : " · current"}
                  </p>
                  <div className="mt-4 max-w-[10rem]">
                    <MiniTrack span={span} />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight">{role.title}</h3>
                  <p className="mt-1 text-slate">
                    {role.company} · {role.place}
                  </p>
                  <ul className="mt-5 max-w-3xl space-y-3">
                    {role.bullets.map((b) => (
                      <li key={b} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-span">
                        {withFigures(b, role.figures)}
                      </li>
                    ))}
                  </ul>
                  <p className="tag mt-6">{role.stack.join(" / ")}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
