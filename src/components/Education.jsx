import React from "react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="rule-t">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Education</h2>
        </Reveal>

        <div className="mt-12">
          <Reveal as="article" className="max-w-2xl">
            <p className="font-mono text-sm">Aug 2020 – May 2024</p>
            <h3 className="display mt-2 text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight">University of New Hampshire</h3>
            <p className="text-slate">B.S. Computer Science · Durham, NH</p>
            <p className="mt-5">Dean's List: Fall 2020 (High Honors), Spring 2021 (Honors), Fall 2023 (Honors).</p>
            <p className="mt-4 text-slate">
              Coursework: algorithms, data structures, operating systems, software engineering, object-oriented design, functional
              programming, cybersecurity, digital systems, assembly and machine organization, SQL, statistics.
            </p>
            <p className="mt-4">
              <span className="label mr-2">Published</span>
              <em>(In • de • pen • dent)</em>, a personal narrative essay in UNH's <em>Transitions</em>, 2021–2022.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
