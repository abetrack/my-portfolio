import React from "react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section aria-label="About" className="rule-t">
      <Reveal className="wrap py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
            I'm a software engineer at Fidelity in Merrimack. I work on the backend of a Kubernetes platform that runs in two AWS
            regions, mostly Java and Python, with a lot of Kafka and a fair amount of Jenkins.
          </p>
          <p className="mt-6 text-lg text-slate">
            Before that I interned at Ally, and at UNH's InterOperability Lab, where I spent about a year testing routers for
            IPv6. On my own time I've been building Shotworthy, a workspace for job applications, and Deal Tracker, which watches
            for price errors on retail deals.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
