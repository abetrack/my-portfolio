import React, { useMemo } from "react";
import { useInView } from "../hooks";
import { spans, TIMELINE_START } from "../data";
import { formatDuration, spokenDuration } from "../time";

// Career as a distributed trace: each span is a stint, drawn to scale.
export default function Trace() {
  const [ref, seen] = useInView(0.08);

  const model = useMemo(() => {
    const now = new Date();
    const domainEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const total = domainEnd - TIMELINE_START;
    const pct = (d) => ((d - TIMELINE_START) / total) * 100;
    const years = [];
    for (let y = TIMELINE_START.getFullYear() + 1; y <= now.getFullYear(); y += 1) years.push(y);
    return {
      now,
      years,
      rows: spans.map((s) => {
        const end = s.end ?? now;
        return {
          ...s,
          left: pct(s.start),
          width: pct(end) - pct(s.start),
          dur: formatDuration(s.start, s.end ?? domainEnd),
          spoken: spokenDuration(s.start, s.end ?? domainEnd),
        };
      }),
      pct,
    };
  }, []);

  return (
    <figure ref={ref} className={`trace ${seen ? "is-in" : ""}`}>
      <div className="trace-axis" aria-hidden="true">
        <span className="spacer" style={{ width: "var(--label-w)" }} />
        <div className="trace-ticks">
          {model.years.map((y) => (
            <span key={y} style={{ left: `${model.pct(new Date(y, 0, 1))}%` }}>
              {y}
            </span>
          ))}
        </div>
        <span className="spacer" style={{ width: "var(--dur-w)" }} />
      </div>
      <ol className="trace-rows border-b border-rule/80">
        {model.rows.map((row, i) => (
          <li key={row.id}>
            <a
              href={row.href}
              className="trace-row"
              aria-label={`${row.label}, ${row.spoken}${row.end ? "" : ", still running"}. Jump to details.`}
            >
              <span className="trace-label">{row.label}</span>
              <span className="trace-lane">
                {model.years.map((y) => (
                  <i key={y} className="trace-tick" style={{ left: `${model.pct(new Date(y, 0, 1))}%` }} />
                ))}
                <span
                  className={`trace-bar ${row.kind === "school" ? "school" : ""} ${row.end ? "" : "live"}`}
                  style={{ left: `${row.left}%`, width: `${row.width}%`, "--i": i }}
                />
              </span>
              <span className="trace-dur">
                {row.dur}
                {!row.end && <span className="ml-1 text-ink">live</span>}
              </span>
            </a>
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-sm text-slate">
        Drawn to scale, August 2020 to today. Select a span to jump to it.
      </figcaption>
    </figure>
  );
}
