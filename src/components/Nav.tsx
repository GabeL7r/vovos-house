import { LinkButton } from "./ui/LinkButton";

export function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "18px 48px",
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-2xl)", color: "var(--color-primary)" }}>
        Vovo&apos;s House
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#how-it-works" style={{ fontSize: "var(--text-md)", color: "var(--text-secondary)", fontWeight: 600 }}>
          How it works
        </a>
        <LinkButton href="#waitlist-form" variant="primary" size="sm">
          Join the waitlist
        </LinkButton>
      </div>
    </nav>
  );
}
