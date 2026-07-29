import { LinkButton } from "./ui/LinkButton";
import { HeroArt } from "./HeroArt";

export function Hero() {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 64,
        padding: "88px 48px",
        background: "var(--sand-100)",
      }}
    >
      <div style={{ flex: "1 1 420px", minWidth: 320, maxWidth: 640 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--surface-raised)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-pill)",
            padding: "6px 16px",
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            color: "var(--color-secondary)",
            marginBottom: 20,
          }}
        >
          Coming soon &middot; Family stays, done right
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-6xl)",
            lineHeight: "var(--leading-tight)",
            margin: "0 0 20px",
            color: "var(--text-primary)",
          }}
        >
          Stay like family.
        </h1>
        <p
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-normal)",
            color: "var(--text-secondary)",
            margin: "0 0 32px",
            textWrap: "pretty",
          }}
        >
          Vovo&apos;s House is a new kind of rental for families with little ones. Every home is kid-ready before you
          arrive: cribs made, gates up, corners softened. You just show up and exhale.
        </p>
        <LinkButton href="#waitlist-form" variant="primary" size="lg">
          Join the waitlist
        </LinkButton>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "14px 0 0" }}>
          Be first to book when we open. No spam, no charge. Just an early spot.
        </p>
      </div>
      <div
        style={{
          flex: "1 1 420px",
          minWidth: 320,
          maxWidth: 560,
          height: 420,
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <HeroArt />
      </div>
    </section>
  );
}
