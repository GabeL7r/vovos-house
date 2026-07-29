"use client";

import { useState } from "react";
import { Icon } from "./ui/Icon";

const FAQS = [
  {
    q: "When will Vovo's House launch?",
    a: "We're opening to our first families soon. Join the waitlist and you'll be among the first to know.",
  },
  {
    q: `What does "kid-ready" actually include?`,
    a: "Every home is checked for family safety and stocked with the essentials: crib or pack-n-play, high chair, gates and covers, and kid-friendly touches. You'll see exactly what's there before you book.",
  },
  {
    q: "Does it cost anything to join the waitlist?",
    a: "No. Joining is free and there's no commitment. You're simply first in line.",
  },
  {
    q: "Where will homes be available?",
    a: "We're deciding our first locations now, and waitlist sign-ups help us choose. Tell us where you'd travel and it shapes where we launch.",
  },
  {
    q: "Who's behind Vovo's House?",
    a: "A small team of parents building the family travel company we always wished we had. (Vovo means grandmother in Portuguese.)",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "96px 48px", maxWidth: 800, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-4xl)",
          textAlign: "center",
          margin: "0 0 48px",
          color: "var(--text-primary)",
        }}
      >
        Frequently asked questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div
              key={faq.q}
              style={{
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                background: "var(--surface-card)",
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                style={{
                  all: "unset",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "20px 24px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "var(--text-lg)",
                  color: "var(--text-primary)",
                }}
              >
                {faq.q}
                <Icon name={open ? "chevron-down" : "chevron-right"} size={20} color="var(--text-secondary)" />
              </button>
              {open ? (
                <p
                  style={{
                    margin: 0,
                    padding: "0 24px 22px",
                    fontSize: "var(--text-md)",
                    color: "var(--text-secondary)",
                    lineHeight: "var(--leading-normal)",
                  }}
                >
                  {faq.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
