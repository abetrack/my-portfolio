import React from "react";
import Reveal from "./Reveal";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="rule-t">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Skills</h2>
          <p className="mt-4 max-w-xl text-lg text-slate">Bold is what I use most.</p>
        </Reveal>
        <dl className="mt-12 divide-y divide-rule border-y border-rule">
          {skillGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 40} className="grid gap-2 py-5 md:grid-cols-12 md:gap-10">
              <dt className="label pt-1 md:col-span-3">{g.name}</dt>
              <dd className="text-lg leading-relaxed md:col-span-9">
                {g.core.map((s) => (
                  <span key={s} className="mr-5 inline-block whitespace-nowrap font-semibold">
                    {s}
                  </span>
                ))}
                {g.rest.map((s) => (
                  <span key={s} className="mr-5 inline-block whitespace-nowrap text-slate">
                    {s}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
