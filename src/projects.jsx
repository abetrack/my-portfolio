import React, { useMemo, useState } from "react";
import DealMerge from "./components/DealMerge";
import Tour, { extensionFrame, imageFrame } from "./components/Tour";
import { links } from "./data";

/* ---------- small shared pieces ---------- */

const Frame = ({ children, className = "" }) => (
  <div className={`overflow-hidden rounded-2xl border border-rule bg-paper ${className}`}>{children}</div>
);

const H = ({ children }) => <h3 className="display mt-10 text-xl font-semibold">{children}</h3>;

const Bullets = ({ items }) => (
  <ul className="mt-4 space-y-3">
    {items.map((item, i) => (
      <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-[2px] before:w-2.5 before:bg-span">
        {item}
      </li>
    ))}
  </ul>
);

const Facts = ({ rows }) => (
  <dl className="mt-6 grid grid-cols-[7rem_1fr] gap-x-4 gap-y-2 border-y border-rule py-4 text-sm">
    {rows.map(([k, v]) => (
      <React.Fragment key={k}>
        <dt className="label pt-0.5">{k}</dt>
        <dd>{v}</dd>
      </React.Fragment>
    ))}
  </dl>
);

/* ---------- media used in both the list and the sheets ---------- */

export function PhoneClip({ scale = 1 }) {
  return (
    <div className="grid place-items-center py-8">
      <div style={{ zoom: scale }}>
        <div className="relative h-[338px] w-[210px] overflow-hidden rounded-[1.6rem] border-2 border-slate/60 bg-black shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet="/tank-still.png" />
            <img
              src="/tank.gif"
              alt="Bullet Zone gameplay on an Android phone: tanks driving across grass, dirt and water tiles"
              width="600"
              height="338"
              className="absolute left-[-195px] top-0 max-w-none"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export function RouteMap() {
  return (
    <div className="grid place-items-center p-4 sm:p-8">
      <div className="relative aspect-[1920/1554] w-full max-w-[30rem]">
        <img
          src="/gps.png"
          alt="Road network of New Hampshire with the shortest route between two libraries drawn in red"
          width="1920"
          height="1554"
          className="h-full w-full object-contain [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)] [mix-blend-mode:lighten]"
        />
        <span className="absolute left-[60%] top-[31%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-live ring-4 ring-live/25" aria-hidden="true" />
        <span className="absolute right-[42%] top-[31%] mr-3 -translate-y-1/2 whitespace-nowrap font-mono text-[0.7rem]" aria-hidden="true">
          North Conway Library
        </span>
        <span className="absolute left-[46%] top-[91%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-live ring-4 ring-live/25" aria-hidden="true" />
        <span className="absolute left-[46%] top-[91%] ml-4 -translate-y-1/2 whitespace-nowrap font-mono text-[0.7rem]" aria-hidden="true">
          Nashua Public Library
        </span>
      </div>
    </div>
  );
}

/* ---------- Shotworthy ---------- */

function ShotworthyDetail() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const frames = useMemo(
    () => [
      extensionFrame({ label: "Capture", caption: "The Chrome extension reads the job off the page you're on and fills in the title, company, location and description. Check my fit scores it right there." }),
      imageFrame({ id: "score", label: "Score", src: "/shotworthy/score.jpg", alt: "A fit score of 68 with strengths and gaps side by side", caption: "The fit score for one job, with strengths and gaps side by side. It only runs when you click, since it costs credits." }),
      imageFrame({ id: "tailor", label: "Tailor", src: "/shotworthy/tailor.jpg", alt: "Each résumé bullet with the job terms it matches", caption: "The tailored résumé picks bullets from the profile. Each one says why it's there: the job terms it matches, or that it just fills the page. You can override any of them." }),
      imageFrame({ id: "export", label: "Export", src: "/shotworthy/export.jpg", alt: "The finished one-page résumé with PDF and DOCX download buttons", caption: "The result is a one-page, ATS-safe résumé you download as PDF or DOCX. The page above it says every line comes from the profile." }),
      imageFrame({ id: "track", label: "Track", src: "/shotworthy/track.jpg", alt: "The applications list", caption: "Every application in one list with its fit score and status, and a prompt for the next thing to do." }),
    ],
    []
  );
  const pick = (n) => {
    setI(n);
    setPlaying(false);
  };
  return (
    <>
      <Tour frames={frames} index={i} onIndex={setI} playing={playing} />
      <div className="mt-3 flex flex-wrap items-center gap-2" role="group" aria-label="Product tour">
        {frames.map((f, n) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={n === i}
            onClick={() => pick(n)}
            className={`min-h-[36px] rounded-full border px-3 text-sm transition-colors ${
              n === i ? "border-ink bg-ink text-paper" : "border-rule text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
        <button type="button" onClick={() => setPlaying((p) => !p)} className="link ml-auto inline-flex min-h-[44px] items-center font-mono text-xs">
          {playing ? "Pause tour" : "Play tour"}
        </button>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-slate">{frames[i].caption} This is my own account, with company names hidden.</p>

      <H>Why I built it</H>
      <p className="mt-3 max-w-2xl">
        A one-page résumé fits about twenty bullets. Five years of work is closer to a hundred, so every application is a guess
        about which twenty to send. Ask a chatbot to fix that and it will add a metric you never measured. Shotworthy keeps the whole
        hundred in one profile and picks the right ones for each job.
      </p>
      <p className="mt-3 max-w-2xl">
        The model only chooses from your profile. The server looks the bullets up by id, so a bullet that isn't yours can't end up
        on the page.
      </p>

      <H>What's under it</H>
      <Bullets
        items={[
          "Spring Boot API on Java 21, with PostgreSQL and 32 Flyway migrations.",
          "Fit scoring that pairs deterministic skill matching over a 12-profession vocabulary with the model's read of strengths and gaps.",
          "A Chrome extension (Manifest V3) that captures postings from 12 job platforms, including LinkedIn, Workday and Greenhouse, with a tiered JSON-LD and DOM extractor.",
          "Spring Security with sessions stored in the database through Spring Session JDBC.",
          "Résumé export to PDF (Apache PDFBox) and DOCX (Apache POI), laid out to pass applicant tracking systems.",
          "Next.js 14 and TypeScript front end.",
          "Applied applications keep a frozen copy of the résumé you sent, and interviews export to a calendar file.",
          "350 automated tests across JUnit, Vitest and React Testing Library. Deployed on Railway and Vercel.",
        ]}
      />
      <Facts
        rows={[
          ["Stack", "Java 21, Spring Boot, PostgreSQL, Flyway, Next.js, TypeScript, Tailwind, Chrome MV3, Claude API"],
          ["Status", "Deployed on Railway and Vercel."],
        ]}
      />
      <a href={links.shotworthy} target="_blank" rel="noreferrer" className="link mt-6 inline-block font-medium">
        View the repository
      </a>
    </>
  );
}

/* ---------- Deal Tracker ---------- */

// Posts currently held per account, read from the local database.
const accounts = [
  ["pricerrors", 45],
  ["glitchtoriches", 44],
  ["glitchaddicts", 23],
  ["glitchedsavings", 23],
  ["thedealsguy_", 21],
  ["glitcheddeals", 14],
  ["clrexplorer", 13],
  ["dealsfinderio", 9],
  ["primedropper", 0],
];
const maxPosts = Math.max(...accounts.map((a) => a[1]));

function DealTrackerDetail() {
  return (
    <>
      <Frame>
        <img
          src="/dealtracker/feed.jpg"
          alt="The Deal Tracker feed: filter chips along the top and deal cards showing the account, price, discount, store and a resale note"
          width="1440"
          height="1000"
          className="block w-full"
        />
      </Frame>
      <p className="mt-3 max-w-2xl text-sm text-slate">
        The live feed. Filters across the top, then one card per deal with who posted it, how many accounts confirmed it, the coupon,
        and a resale note.
      </p>

      <H>The accounts it reads</H>
      <p className="mt-3 max-w-2xl text-slate">Nine public X accounts. The bars show how many of their posts are in the database right now.</p>
      <ul className="mt-5 space-y-2" aria-label="Accounts and post counts">
        {accounts.map(([handle, n]) => (
          <li key={handle} className="grid grid-cols-[9.5rem_1fr_2rem] items-center gap-3 sm:grid-cols-[11rem_1fr_2.5rem]">
            <a href={`https://x.com/${handle}`} target="_blank" rel="noreferrer" className="link truncate font-mono text-sm">
              @{handle}
            </a>
            <span className="h-2.5 rounded-full bg-rule/70" aria-hidden="true">
              <span className="block h-full rounded-full bg-span" style={{ width: `${(n / maxPosts) * 100}%` }} />
            </span>
            <span className="text-right font-mono text-sm text-slate">{n}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 max-w-2xl">
        Those <mark className="fig">192</mark> posts turned into <mark className="fig">149</mark> deals, and <mark className="fig">32</mark> of
        them were posted by more than one account.
      </p>
      <div className="mt-5">
        <DealMerge />
      </div>

      <H>The parts that took some thought</H>
      <Bullets
        items={[
          "Same deal, several posts. Prices, product, merchant and coupon get parsed out, and matching posts merge into one card that says how many accounts confirmed it. When the parser isn't sure, it says so instead of guessing a price.",
          "Resale math. Each card estimates what a flip would net after eBay and Facebook fees. Deep discounts get cancelled more often, so ranking on margin alone would push the deals least likely to ship. The Bought log records what happened to each order, and the fill rate comes from that.",
          "Purchases outlive deals. Deals are deleted after a few days, so a purchase keeps its own copy of the details rather than pointing at a deal that's gone.",
          "Cost. A watcher checks each account's tweet count, which is a tiny request, and only pulls the timeline when the count changes. It tries X's free public embed endpoint first and falls back to a paid API.",
          "Notifications. Web push without a payload: about 90 lines on node:crypto. The service worker asks for the latest deal when it shows the notification, so a notification can't display a price that has since changed.",
        ]}
      />
      <Facts
        rows={[
          ["Stack", "Next.js 15, React 19, TypeScript, Tailwind, node:sqlite"],
          ["Runs on", "A Mac mini under launchd. I open it on my iPhone over Tailscale, installed as an app."],
          ["Tests", "243, on node:test"],
        ]}
      />
      <p className="mt-4 text-sm text-slate">It's a personal tool, so there's no public link.</p>
    </>
  );
}

/* ---------- USNH myPortal widgets ---------- */

function WidgetsDetail() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_1fr] md:items-start">
        <figure>
          <Frame>
            <img
              src="/widgets/unh-sports.png"
              alt="The UNH Sports widget in the myPortal dashboard, showing a women's basketball game result: UNH 43, Louisville 94"
              width="756"
              height="818"
              className="block w-full"
            />
          </Frame>
          <figcaption className="mt-2 text-sm text-slate">The athletics widget as it appears in myPortal.</figcaption>
        </figure>
        <div>
          <p>
            myPortal is the hub for students, staff and faculty across the University System of New Hampshire. Pathify built it, and it
            shows things like your email and courses in customizable widgets.
          </p>
          <p className="mt-3">
            Our project group built new widgets for it, so people don't have to visit each data source separately.
          </p>
          <Bullets
            items={[
              "Live streams from the student radio station at each USNH school.",
              "The UNH bus schedule with a live map.",
              "UNH dining hall menus.",
              "The UNH Athletics schedule and results.",
            ]}
          />
        </div>
      </div>

      <H>How it works</H>
      <p className="mt-3 max-w-2xl">
        Each widget pulls from its own source, such as an API or an RSS feed, caches what it gets, and renders the result in JavaScript,
        HTML and CSS. Putting campus resources in one dashboard was meant to lift engagement, and we planned to measure that by comparing
        portal traffic before and after each widget shipped.
      </p>

      <H>Recognition</H>
      <p className="mt-3 max-w-2xl">
        We presented at the UNH Undergraduate Research Conference and finished as runner-up. There were five of us, working with USNH
        and Pathify, and the widgets were headed for production the following semester.
      </p>
      <Facts
        rows={[
          ["When", "Aug 2023 – May 2024"],
          ["Team", "Five students, University of New Hampshire"],
          ["Stack", "JavaScript, Scala, HTML, CSS, REST APIs, RSS feeds"],
        ]}
      />
    </>
  );
}

/* ---------- Bullet Zone ---------- */

function BulletZoneDetail() {
  return (
    <>
      <Frame>
        <PhoneClip scale={1.15} />
      </Frame>
      <p className="mt-4 max-w-2xl">
        An action tank game for Android tablets and phones, with global multiplayer and personal accounts, built by a team of six.
      </p>
      <H>What I worked on</H>
      <Bullets
        items={[
          "Code for both the front end and the back end, working in agile sprints.",
          "Software design patterns, including builder and observer.",
          "SQLite for the metadata that both the client and the server need.",
          "Unit tests for robustness, usability and reliability.",
        ]}
      />
      <Facts
        rows={[
          ["When", "Aug 2022 – Nov 2022"],
          ["Team", "Six students, University of New Hampshire"],
          ["Stack", "Java, Python, SQLite, Android Studio"],
        ]}
      />
    </>
  );
}

/* ---------- GPS Visualizer ---------- */

function GpsDetail() {
  return (
    <>
      <Frame>
        <RouteMap />
      </Frame>
      <p className="mt-4 max-w-2xl">
        A command-line program that takes a start and a goal and draws the shortest route between them across New Hampshire's roads. The
        run shown is the Nashua Public Library to the North Conway Library.
      </p>
      <H>How it works</H>
      <p className="mt-3 max-w-2xl">
        Dijkstra's algorithm in C finds the route over the road network, and the route is drawn in red over the map.
      </p>
      <Facts
        rows={[
          ["When", "Nov 2023"],
          ["Stack", "C, Python, Dijkstra's algorithm"],
        ]}
      />
    </>
  );
}

/* ---------- Quantitative Strategy Simulator ---------- */

const quantSteps = [
  ["Ingest", "Load price data for 200+ tickers."],
  ["Label", "Label the data the strategies work from."],
  ["Simulate", "Simulate the trades, using technical indicators and state-machine logic."],
  ["Evaluate", "Measure performance and produce automated reports and charts."],
];

function QuantDetail() {
  return (
    <>
      <p className="max-w-2xl">
        A Python framework for backtesting rule-based equity strategies. A strategy is a set of technical-indicator rules and a state
        machine. The framework runs it over historical prices, simulates the trades, and measures how it did.
      </p>

      <H>How a run flows</H>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Pipeline stages in order">
        {quantSteps.map(([name, text], i) => (
          <li key={name} className="rounded-2xl border border-rule bg-paper/40 p-4">
            <p className="font-mono text-xs text-slate">{i + 1}</p>
            <p className="display mt-1 text-lg font-semibold">{name}</p>
            <p className="mt-1 text-sm text-slate">{text}</p>
          </li>
        ))}
      </ol>

      <H>What it measures</H>
      <p className="mt-3 max-w-2xl">
        Expectancy, win rate, payoff ratio and Sortino ratio, with automated performance reports and visualizations. The framework is modular.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Expectancy", "Win rate", "Payoff ratio", "Sortino ratio"].map((m) => (
          <mark key={m} className="fig">
            {m}
          </mark>
        ))}
      </div>

      <Facts
        rows={[
          ["Scale", "200+ tickers"],
          ["Stack", "Python, Pandas, NumPy, Matplotlib, XGBoost, LightGBM"],
        ]}
      />
    </>
  );
}

/* ---------- registry ---------- */

export const PROJECTS = {
  shotworthy: { kicker: "Personal project", title: "Shotworthy", meta: "Java, Spring Boot, PostgreSQL, Next.js, Claude API", Detail: ShotworthyDetail },
  "deal-tracker": { kicker: "Personal project", title: "Deal Tracker", meta: "Next.js, TypeScript, node:sqlite", Detail: DealTrackerDetail },
  widgets: { kicker: "Undergraduate research · Aug 2023 – May 2024", title: "USNH myPortal widgets", meta: "JavaScript, Scala, HTML, CSS", Detail: WidgetsDetail },
  "bullet-zone": { kicker: "University project · Aug 2022 – Nov 2022", title: "Bullet Zone", meta: "Java, Python, SQLite, Android Studio", Detail: BulletZoneDetail },
  "quant-simulator": { kicker: "Python project", title: "Quantitative Strategy Simulator", meta: "Python, Pandas, NumPy, Matplotlib, XGBoost, LightGBM", Detail: QuantDetail },
  "gps-visualizer": { kicker: "University project · Nov 2023", title: "GPS Visualizer", meta: "C, Python, Dijkstra's algorithm", Detail: GpsDetail },
};
