import React, { useEffect, useRef } from "react";

// A right-hand sheet built on the native <dialog>: focus trap, Esc to close and focus return come for free.
export default function Sheet({ open, onClose, kicker, title, meta, children }) {
  const ref = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return undefined;
    if (open && !dialog.open) {
      dialog.showModal();
      if (bodyRef.current) bodyRef.current.scrollTop = 0;
      document.documentElement.classList.add("sheet-open");
    }
    if (!open && dialog.open) dialog.close();
    return undefined;
  }, [open]);

  useEffect(() => () => document.documentElement.classList.remove("sheet-open"), []);

  const handleClose = () => {
    document.documentElement.classList.remove("sheet-open");
    onClose();
  };

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheet-title"
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current.close();
      }}
    >
      <div className="sheet-panel">
        <header className="sheet-head">
          <div className="min-w-0">
            {kicker && <p className="label">{kicker}</p>}
            <h2 id="sheet-title" className="display mt-1 text-[clamp(1.6rem,4vw,2.4rem)] font-semibold">
              {title}
            </h2>
            {meta && <p className="tag mt-1">{meta}</p>}
          </div>
          <button type="button" className="sheet-close" onClick={() => ref.current.close()} aria-label="Close project details">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </header>
        <div className="sheet-body" ref={bodyRef}>{open && children}</div>
      </div>
    </dialog>
  );
}
