export function Footer() {
  return (
    <footer style={{ padding: "56px 48px 40px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-sunken)" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 24,
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--color-primary)" }}>
          Vovo&apos;s House · Stay like family.
        </span>
        <div style={{ display: "flex", gap: 24, fontSize: "var(--text-md)", color: "var(--text-secondary)" }}>
          <a href="#how-it-works">How it works</a>
          <a href="#waitlist-form">Contact</a>
          <a href="#waitlist-form">Privacy</a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1080,
          margin: "24px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          © Vovo&apos;s House. Homes that feel like family.
        </p>
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          Own a family-friendly home? <a href="#waitlist-form">Tell us about it</a>
        </p>
      </div>
    </footer>
  );
}
