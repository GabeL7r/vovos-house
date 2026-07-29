const STEPS = [
  {
    n: 1,
    title: "Tell us who's coming.",
    body: "Ages of the kids, what you'll need. We match you to homes that fit.",
  },
  {
    n: 2,
    title: "Book a home that's truly ready.",
    body: "Cribs, gates, high chairs, toys: checked and confirmed, not guessed.",
  },
  {
    n: 3,
    title: "Arrive and settle in.",
    body: "Everything's waiting. The only thing left to unpack is you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "96px 48px", maxWidth: 1120, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-4xl)",
          textAlign: "center",
          margin: "0 0 56px",
          color: "var(--text-primary)",
        }}
      >
        How Vovo&apos;s House will work
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
        {STEPS.map((s) => (
          <div key={s.n} style={{ flex: "1 1 280px", minWidth: 260, textAlign: "center" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "var(--radius-pill)",
                background: "var(--color-primary)",
                color: "var(--text-on-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                margin: "0 auto 20px",
              }}
            >
              {s.n}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                margin: "0 0 10px",
                color: "var(--text-primary)",
              }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: "var(--text-md)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)", margin: 0 }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
