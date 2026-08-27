"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--copper)]">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-2xl font-medium text-[color:var(--cream)] leading-tight group-hover:text-[color:var(--amber)] transition-colors duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
                  {it.q}
                </span>
              </span>
              <span
                className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-[color:var(--hairline-2)] transition-all duration-500 ${isOpen ? "bg-[color:var(--amber)] text-[color:var(--ink)] border-transparent rotate-45" : "text-[color:var(--cream-2)]"}`}
                style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
              style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
            >
              <div className="overflow-hidden pl-[6.5rem] pr-14">
                <p className="font-body text-base leading-[1.7] text-[color:var(--cream-2)] max-w-2xl">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
