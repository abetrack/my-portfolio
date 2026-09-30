import React, { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import Sheet from "./Sheet";
import Tour, { extensionFrame, imageFrame } from "./Tour";
import { PROJECTS } from "../projects";

const steps = [
  ["Capture", "A Chrome extension reads the job posting off the page you're on. It works on 12 job platforms, including LinkedIn, Workday and Greenhouse."],
  ["Score", "Matches skills against a 12-profession vocabulary, then asks the model for strengths and gaps. It only runs when you click, since it costs credits."],
  ["Tailor", "The model chooses bullets from your profile and the server looks them up, so nothing gets invented."],
  ["Export", "A one-page, ATS-safe PDF or DOCX."],
  ["Track", "Status history, a frozen copy of the résumé you sent, and calendar export."],
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function OpenButton({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className="btn btn-line mt-6 group">
      {children}
      <span className="transition-transform group-hover:translate-x-0.5">
        <Arrow />
      </span>
    </button>
  );
}

function Shot({ src, alt, onClick, label, shadow }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group block w-full overflow-hidden rounded-2xl border border-rule bg-surface text-left ${shadow ? "shot-shadow" : ""}`}
    >
      <img src={src} alt={alt} width="1600" height="1000" loading="lazy" className="block w-full transition-transform duration-500 group-hover:scale-[1.015]" />
    </button>
  );
}

function CareerOS({ open }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const frames = useMemo(
    () => [
      extensionFrame(),
      imageFrame({ id: "score", src: "/careeros/fit-score.jpg", alt: "CareerOS showing a fit score of 60 for a nursing job, with strengths and gaps side by side" }),
      imageFrame({ id: "tailor", src: "/careeros/evidence.jpg", alt: "The tailoring screen listing each résumé bullet and why it was chosen" }),
      imageFrame({ id: "export", src: "/careeros/evidence.jpg", alt: "The finished one-page résumé preview", cls: "origin-bottom scale-[1.5]" }),
      imageFrame({ id: "track", src: "/careeros/queue.jpg", alt: "The applications list showing what needs attention and each job's status" }),
    ],
    []
  );
  const pick = (i) => {
    setStep(i);
    setPlaying(false);
  };

  return (
    <Reveal as="article" className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="label">Full stack · AI · deployed on Railway and Vercel</p>
        <h3 className="display mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold">CareerOS</h3>
        <p className="tag mt-1">Shipping under the product name Shotworthy</p>
        <p className="mt-5 text-lg leading-snug">
          Keeps one profile of everything you've done, scores a job against it, then builds a one-page résumé for that job from the
          profile. Every line on the résumé comes from you.
        </p>

        <ol className="mt-6 space-y-1 border-l border-rule pl-5">
          {steps.map(([name, text], i) => (
            <li key={name} className="relative">
              <span
                className={`absolute -left-[1.72rem] top-[1.05rem] h-3 w-3 rounded-full ring-2 ring-span transition-colors ${i === step ? "bg-span" : "bg-paper"}`}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => pick(i)}
                aria-current={i === step ? "step" : undefined}
                className={`-ml-3 block w-[calc(100%+0.75rem)] rounded-xl px-3 py-2 text-left transition-colors hover:bg-surface/70 ${i === step ? "bg-surface/70" : ""}`}
              >
                <span className="font-mono text-xs text-slate">{i + 1}</span> <strong className="font-semibold">{name}.</strong>{" "}
                <span className="text-slate">{text}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          Java 21, Spring Boot, PostgreSQL and Next.js, with the Claude API for scoring. <mark className="fig">350</mark> tests,{" "}
          <mark className="fig">32</mark> Flyway migrations, and sessions stored in the database through Spring Session.
        </p>
        <OpenButton onClick={() => open("careeros")}>Walk through the product</OpenButton>
      </div>

      <figure className="lg:col-span-7">
        <Tour frames={frames} index={step} onIndex={setStep} playing={playing} className="shot-shadow rounded-2xl" />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate">
          <span>Demo data. The extension popup and the app, in the order you'd use them.</span>
          <button type="button" onClick={() => setPlaying((p) => !p)} className="link inline-flex min-h-[44px] items-center font-mono text-xs">
            {playing ? "Pause tour" : "Play tour"}
          </button>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function DealTracker({ open }) {
  return (
    <Reveal as="article" className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
      <figure className="order-2 lg:order-1 lg:col-span-7">
        <Shot
          src="/dealtracker/feed.jpg"
          alt="The Deal Tracker feed with filter chips and deal cards showing price, discount, store and account"
          label="Open the Deal Tracker walkthrough"
          onClick={() => open("deal-tracker")}
          shadow
        />
        <figcaption className="mt-6 text-sm text-slate">The live feed, running on my Mac mini.</figcaption>
      </figure>
      <div className="order-1 lg:order-2 lg:col-span-5">
        <p className="label">Personal tool · runs on my Mac mini</p>
        <h3 className="display mt-3 text-[clamp(2.2rem,5vw,3.6rem)] font-semibold">Deal Tracker</h3>
        <p className="mt-5 text-lg leading-snug">
          Deal accounts on X often post the same price error within minutes of each other. Deal Tracker reads nine of them into one
          feed and merges the duplicates, so each deal shows up once with everyone who posted it.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-span">
            The parser flags posts it isn't sure about instead of guessing a price.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-span">
            Each card estimates what a resale would net after fees.
          </li>
          <li className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-span">
            It only fetches a timeline when an account's tweet count changes, which keeps the API bill near <mark className="fig">$3</mark>{" "}
            a month instead of <mark className="fig">$288</mark> (my estimate).
          </li>
        </ul>
        <p className="tag mt-6">Next.js 15 / React 19 / TypeScript / node:sqlite / launchd</p>
        <OpenButton onClick={() => open("deal-tracker")}>See the accounts and how it works</OpenButton>
      </div>
    </Reveal>
  );
}

const more = [
  {
    id: "widgets",
    title: "USNH myPortal widgets",
    when: "Aug 2023 – May 2024",
    text: "Widgets for the university system's student portal: student radio, a live bus map, dining menus and the athletics schedule. Runner-up at UNH's Undergraduate Research Conference.",
    thumb: <img src="/widgets/unh-sports.png" alt="" loading="lazy" className="h-full w-full object-cover object-top" />,
  },
  {
    id: "bullet-zone",
    title: "Bullet Zone",
    when: "Aug 2022 – Nov 2022",
    text: "An Android tank game with global multiplayer and personal accounts, built by a team of six.",
    thumb: <img src="/tank-still.png" alt="" loading="lazy" className="h-full w-full scale-[2.1] object-cover" />,
  },
  {
    id: "quant-simulator",
    title: "Quantitative Strategy Simulator",
    when: "Python, Pandas, NumPy",
    text: "A framework for backtesting rule-based equity strategies across 200+ tickers, with metrics like expectancy and Sortino ratio.",
    thumb: (
      <svg viewBox="0 0 120 90" className="h-full w-full text-span" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M18 62l24-16 22 10 36-30" />
        <circle cx="18" cy="62" r="4" fill="currentColor" />
        <circle cx="42" cy="46" r="4" fill="currentColor" />
        <circle cx="64" cy="56" r="4" fill="currentColor" />
        <circle cx="100" cy="26" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "gps-visualizer",
    title: "GPS Visualizer",
    when: "Nov 2023",
    text: "Dijkstra's algorithm in C, drawing the shortest route across New Hampshire's roads.",
    thumb: (
      <img
        src="/gps.png"
        alt=""
        loading="lazy"
        className="h-full w-full object-cover [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)] [mix-blend-mode:lighten]"
      />
    ),
  },
];

function MoreProjects({ open }) {
  return (
    <div className="border-t border-rule pt-12">
      <Reveal>
        <h3 className="display text-2xl font-semibold">Also built</h3>
      </Reveal>
      <ul className="mt-6 divide-y divide-rule border-y border-rule">
        {more.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 70}>
            <button
              type="button"
              onClick={() => open(p.id)}
              className="group grid w-full grid-cols-[6.5rem_1fr_auto] items-center gap-4 py-5 text-left sm:grid-cols-[8rem_1fr_auto] sm:gap-6"
            >
              <span className="block aspect-[4/3] overflow-hidden rounded-xl border border-rule bg-surface">{p.thumb}</span>
              <span className="min-w-0">
                <span className="display block text-xl font-semibold transition-colors group-hover:text-span">{p.title}</span>
                <span className="tag block">{p.when}</span>
                <span className="mt-1 block max-w-2xl text-sm text-slate">{p.text}</span>
              </span>
              <span className="pr-1 text-slate transition-all group-hover:translate-x-1 group-hover:text-span">
                <Arrow />
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fromHash = window.location.hash.startsWith("#p-") ? window.location.hash.slice(3) : null;
    if (fromHash && PROJECTS[fromHash]) setOpenId(fromHash);
  }, []);

  const open = (id) => {
    setOpenId(id);
    window.history.replaceState(null, "", `#p-${id}`);
  };
  const close = () => {
    setOpenId(null);
    window.history.replaceState(null, "", "#projects");
  };

  const current = openId ? PROJECTS[openId] : null;

  return (
    <section id="projects" className="rule-t">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold">Side projects</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-rule">
          <CareerOS open={open} />
          <DealTracker open={open} />
        </div>
        <MoreProjects open={open} />
      </div>

      <Sheet open={Boolean(current)} onClose={close} kicker={current?.kicker} title={current?.title ?? ""} meta={current?.meta}>
        {current && <current.Detail />}
      </Sheet>
    </section>
  );
}
