import React from "react";
import { useInView } from "../hooks";

export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, seen] = useInView(0.15);
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
