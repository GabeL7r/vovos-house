const CARDS = [
  {
    quote: "“Is it actually safe for a toddler?”",
    body: "Listings rarely tell you. You find out when you get there.",
  },
  {
    quote: "“Did they have a crib, or just say so?”",
    body: "Half-true amenity checkboxes, every time.",
  },
  {
    quote: "“Now I'm the one packing the whole nursery.”",
    body: "Because you can't count on the home.",
  },
];

export function ProblemSection() {
  return (
    <section style={{ padding: "96px 48px", maxWidth: 1080, margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-4xl)",
          textAlign: "center",
          margin: "0 0 24px",
          color: "var(--text-primary)",
        }}
      >
        Traveling with little ones shouldn&apos;t feel like moving house.
      </h2>
      <p
        style={{
          fontSize: "var(--text-lg)",
          lineHeight: "var(--leading-normal)",
          color: "var(--text-secondary)",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto 56px",
          textWrap: "pretty",
        }}
      >
        You booked the trip to relax. Then came the packing list: the travel crib, the outlet covers, the high chair
        you&apos;re not sure will be there. You arrive exhausted, babyproofing a stranger&apos;s home at 9pm while
        everyone&apos;s overtired.
        <br />
        <br />
        There had to be a better way. So we&apos;re building one.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {CARDS.map((c) => (
          <div
            key={c.quote}
            style={{
              flex: "1 1 280px",
              minWidth: 260,
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-sm)",
              padding: 28,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                margin: "0 0 10px",
                color: "var(--text-primary)",
              }}
            >
              {c.quote}
            </p>
            <p style={{ fontSize: "var(--text-md)", color: "var(--text-secondary)", margin: 0, lineHeight: "var(--leading-normal)" }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
