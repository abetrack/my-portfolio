import React from "react";
import Reveal from "./Reveal";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="rule-t">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Certifications</h2>
        </Reveal>
        <ul className="mt-10 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-6">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80}>
              <a href={c.image} target="_blank" rel="noreferrer" className="group flex items-center gap-4 md:block" aria-label={`${c.title}, ${c.issuer}. Open the certificate.`}>
                <span className="block aspect-[4/3] w-28 flex-none overflow-hidden rounded-xl border border-rule bg-surface sm:w-36 md:w-full md:rounded-2xl">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="min-w-0">
                <span className="display block text-base font-semibold leading-snug group-hover:text-span md:mt-4 md:text-lg">{c.title}</span>
                <span className="tag mt-1 block">{c.issuer}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
