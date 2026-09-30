import React, { useEffect, useRef, useState } from "react";

// Frames are shown one at a time. The progress bar's CSS animation is the clock: when it ends, the tour advances.
// Pausing (hover, focus, off-screen, or the pause button) just pauses every CSS animation inside the tour.

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useOnScreen(ref) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return on;
}

// The Chrome extension popup: it fills in from the page, "Check my fit" gets clicked, and the score scrolls into view.
export function ExtensionDemo({ active }) {
  return (
    <div className="grid h-full w-full place-items-center p-4">
      <div className="popup" data-active={active}>
        <div className="popup-window">
          <img src="/careeros/popup-capture.jpg" alt="" width="460" height="593" className="popup-capture" />
          <div className="popup-fit">
            <img src="/careeros/popup-fit.jpg" alt="" width="460" height="1271" className="popup-fit-inner" />
          </div>
          <span className="popup-cursor" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M4 3l16 7.2-6.6 2.2L11 19z" fill="#fff" stroke="#0b1116" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="popup-ripple" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default function Tour({ frames, index, onIndex, playing, className = "" }) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const reduced = usePrefersReducedMotion();
  const [held, setHeld] = useState(false);
  const running = playing && onScreen && !held && !reduced;
  const frame = frames[index];

  return (
    <div
      ref={ref}
      className={`tour ${running ? "" : "is-paused"} ${className}`}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="tour-stage">
        {frames.map((f, i) => (
          <div key={f.id} className={`tour-frame ${i === index ? "on" : ""}`} aria-hidden={i !== index}>
            {f.render(i === index)}
          </div>
        ))}
      </div>
      <div className="tour-progress" aria-hidden="true">
        {playing && !reduced && (
          <span key={`${index}-${frame.id}`} style={{ animationDuration: `${frame.ms}ms` }} onAnimationEnd={() => onIndex((index + 1) % frames.length)} />
        )}
      </div>
    </div>
  );
}

export const imageFrame = ({ id, src, alt, ms = 4500, cls = "", style, label, caption }) => ({
  id,
  ms,
  label,
  caption,
  render: () => <img src={src} alt={alt} width="1600" height="1111" loading="lazy" className={`h-full w-full object-cover max-sm:object-contain ${cls}`} style={style} />,
});

export const extensionFrame = ({ label, caption } = {}) => ({
  id: "capture",
  ms: 9500,
  label,
  caption,
  render: (active) => <ExtensionDemo active={active} />,
});
