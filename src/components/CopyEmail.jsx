import React, { useEffect, useState } from "react";
import { links } from "../data";

export default function CopyEmail({ variant = "line", className = "" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 1900);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className={`btn ${variant === "solid" ? "btn-solid" : "btn-line"} ${className}`}>
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}
