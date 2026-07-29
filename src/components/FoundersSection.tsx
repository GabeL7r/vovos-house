export function FoundersSection() {
  return (
    <section style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", margin: "0 0 20px", color: "var(--text-primary)" }}>
          Built by parents who&apos;ve been there
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-normal)",
            color: "var(--text-secondary)",
            margin: 0,
            textWrap: "pretty",
          }}
        >
          We started Vovo&apos;s House after one too many trips spent babyproofing someone else&apos;s place instead
          of enjoying the vacation. We&apos;re building what we wished existed. We&apos;d love your help shaping it.
        </p>
      </div>
    </section>
  );
}
