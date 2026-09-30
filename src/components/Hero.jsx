import React from "react";
import Trace from "./Trace";
import { links } from "../data";
import CopyEmail from "./CopyEmail";

export default function Hero() {
  return (
    <section id="top" className="wrap pb-16 pt-28 sm:pt-32">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="label fade-up" style={{ "--d": "0ms" }}>
            Full-stack engineer · Fidelity Investments · Nashua, NH
          </p>

          <h1 className="display mt-5 text-[clamp(3.4rem,13vw,8.5rem)]">
            <span className="hero-line" style={{ "--i": 0 }}>
              <span>Abhinav</span>
            </span>
            <span className="hero-line" style={{ "--i": 1 }}>
              <span>
                Sharma<span className="text-span">.</span>
              </span>
            </span>
          </h1>

          <p className="fade-up mt-6 max-w-xl text-xl leading-snug sm:text-2xl" style={{ "--d": "500ms" }}>
            Software engineer at Fidelity, working on Java and Python services that run on AWS Kubernetes across two regions.
          </p>
          <div className="fade-up mt-8 flex flex-wrap items-center gap-3" style={{ "--d": "620ms" }}>
            <a href={links.resume} target="_blank" rel="noreferrer" className="btn btn-solid">
              Résumé (PDF)
            </a>
            <CopyEmail variant="line" />
          </div>
        </div>

        <figure className="fade-up md:col-span-4" style={{ "--d": "700ms" }}>
          <img
            src="/headshot.jpg"
            alt="Portrait of Abhinav Sharma"
            width="600"
            height="600"
            className="aspect-square w-full max-w-[19rem] rounded-[2rem] border border-rule object-cover md:ml-auto"
          />
          <figcaption className="mt-4 flex max-w-[19rem] items-center gap-2 rounded-full border border-rule bg-surface/60 px-4 py-2 text-sm md:ml-auto">
            <span className="h-2 w-2 flex-none rounded-full bg-live" aria-hidden="true" />
            <span>At Fidelity since Oct 2024</span>
          </figcaption>
        </figure>
      </div>

      <div className="fade-up mt-16 sm:mt-20" style={{ "--d": "850ms" }}>
        <Trace />
      </div>
    </section>
  );
}
