import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks";

// Illustrative wording; the real feed parses live posts.
const posts = [
  ["Account A", "Sony WH-1000XM5 Wireless Headphones – $248.00 (was $399.99)"],
  ["Account B", "Sony WH-1000XM5 – $248 was $399.99"],
  ["Account C", "Sony XM5 headphones, now $248.00"],
  ["Account D", "WH-1000XM5 price drop: $248 (was $399.99)"],
];

export default function DealMerge() {
  const [ref, seen] = useInView(0.5);
  const [merged, setMerged] = useState(false);
  const timer = useRef();

  const run = () => {
    setMerged(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMerged(true), 1300);
  };

  useEffect(() => {
    if (!seen) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMerged(true);
      return undefined;
    }
    run();
    return () => clearTimeout(timer.current);
  }, [seen]);

  return (
    <div ref={ref} className="rounded-2xl border border-rule bg-paper/60 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="label">Four posts in, one deal out</p>
        <button type="button" onClick={run} className="link font-mono text-xs text-slate">
          Replay
        </button>
      </div>
      <ol className={`deal-list relative mt-4 h-40 ${merged ? "merged" : ""}`} aria-label="Four posts of the same deal merging into one entry">
        {posts.map(([handle, text], n) => (
          <li key={handle} className="deal-row" style={{ "--n": n }}>
            <span className="w-24 flex-none truncate font-mono text-xs text-slate sm:w-28">{n === 0 && merged ? "4 accounts" : handle}</span>
            <span className="min-w-0 flex-1 truncate text-sm">{n === 0 && merged ? "Sony WH-1000XM5 headphones" : text}</span>
            {n === 0 && (
              <span className="deal-badge flex-none font-mono text-xs">
                <mark className="fig">38% off</mark>
              </span>
            )}
          </li>
        ))}
        <li className="deal-detail absolute inset-x-0 top-11 pt-3" aria-hidden={!merged}>
          <dl className="grid grid-cols-[6rem_1fr] gap-y-1.5 font-mono text-xs">
            <dt className="text-slate">Price</dt>
            <dd>$248.00</dd>
            <dt className="text-slate">Was</dt>
            <dd>$399.99</dd>
            <dt className="text-slate">Discount</dt>
            <dd>38%</dd>
            <dt className="text-slate">Posted by</dt>
            <dd>Account A, B, C and D</dd>
          </dl>
        </li>
      </ol>
    </div>
  );
}
