import React, { useLayoutEffect, useRef, useState } from "react";
import { useActiveSection } from "../hooks";
import { links } from "../data";

const items = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Side projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
const ids = items.map((i) => i.id);

export default function Nav() {
  const active = useActiveSection(ids);
  const listRef = useRef(null);
  const navRef = useRef(null);
  const [chip, setChip] = useState({ x: 0, w: 0, on: false });

  useLayoutEffect(() => {
    const el = active && listRef.current?.querySelector(`[data-id="${active}"]`);
    const nav = navRef.current;
    if (!el) {
      setChip((c) => ({ ...c, on: false }));
      nav?.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    setChip({ x: el.offsetLeft, w: el.offsetWidth, on: true });
    // keep the active link in view when the row scrolls on small screens
    nav?.scrollTo({ left: Math.max(0, el.offsetLeft - 24), behavior: "smooth" });
  }, [active]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-30 flex justify-center px-3">
      <div className="pointer-events-auto flex max-w-full items-center gap-1 rounded-full border border-rule bg-paper/90 py-1.5 pl-2 pr-1.5 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-md sm:gap-3 lg:pl-6">
        <a href="#top" className="hidden whitespace-nowrap font-script text-[1.7rem] leading-none lg:block" aria-label="Abhinav Sharma, back to top">
          Abhinav Sharma
        </a>
        <nav ref={navRef} aria-label="Sections" className="no-scrollbar min-w-0 overflow-x-auto max-md:[mask-image:linear-gradient(to_right,transparent,#000_16px,#000_calc(100%-16px),transparent)]">
          <ul ref={listRef} className="relative flex w-max items-center">
            <span
              aria-hidden="true"
              className="nav-ind"
              style={{ opacity: chip.on ? 1 : 0, width: chip.w, transform: `translateX(${chip.x}px)` }}
            />
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative flex min-h-[44px] items-center rounded-full px-3 text-[0.92rem] transition-colors hover:text-ink ${
                    active === item.id ? "text-ink" : "text-slate"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={links.resume} className="btn btn-solid ml-1 !min-h-[40px] flex-none !px-4 text-sm" target="_blank" rel="noreferrer">
          Résumé
        </a>
      </div>
    </header>
  );
}
