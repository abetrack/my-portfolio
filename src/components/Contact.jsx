import React, { useState } from "react";
import Reveal from "./Reveal";
import CopyEmail from "./CopyEmail";
import { links } from "../data";

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const field =
  "mt-2 w-full rounded-xl border border-rule bg-surface px-3 py-3 text-base text-ink transition-colors focus:border-span focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-span/30";

export default function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "", "bot-field": "" });
  const [status, setStatus] = useState("idle");

  const update = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...state }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setState({ name: "", email: "", message: "", "bot-field": "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="rule-t">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <h2 className="display text-[clamp(2.8rem,8vw,6.5rem)] font-semibold">
            Say hello<span className="text-span">.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-slate">
            Email works best. The form below comes to the same inbox.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${links.email}`} className="btn btn-solid">
              {links.email}
            </a>
            <CopyEmail variant="line" />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a className="inline-flex min-h-[44px] items-center font-medium" href={links.github} target="_blank" rel="noreferrer">
                <span className="link">GitHub</span>
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-[44px] items-center font-medium" href={links.linkedin} target="_blank" rel="noreferrer">
                <span className="link">LinkedIn</span>
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-[44px] items-center font-medium" href={links.resume} target="_blank" rel="noreferrer">
                <span className="link">Résumé (PDF)</span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={100}>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} noValidate={false}>
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Leave this empty <input name="bot-field" value={state["bot-field"]} onChange={update} tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <label className="block text-sm font-medium" htmlFor="name">
              Name
              <input id="name" name="name" required autoComplete="name" value={state.name} onChange={update} className={field} />
            </label>
            <label className="mt-5 block text-sm font-medium" htmlFor="email">
              Email
              <input id="email" name="email" type="email" required autoComplete="email" value={state.email} onChange={update} className={field} />
            </label>
            <label className="mt-5 block text-sm font-medium" htmlFor="message">
              Message
              <textarea id="message" name="message" required rows={5} value={state.message} onChange={update} className={field} />
            </label>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p role="status" className="text-sm">
                {status === "sent" && <span>Message sent. I will reply by email.</span>}
                {status === "error" && (
                  <span className="text-[#FFB3AD]">
                    The message did not send. Email me at {links.email} instead.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
