import { Icon, type IconName } from "./ui/Icon";

const ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "shield-check", title: "Safe spaces", body: "Gates, covers, corner guards, no surprises." },
  { icon: "baby", title: "The big gear", body: "Crib or pack-n-play, high chair, on request." },
  { icon: "toy-brick", title: "Little touches", body: "Toys, books, and a few things to make kids feel at home." },
  { icon: "users", title: "A host who gets it", body: "Because they've done the toddler-travel thing too." },
];

export function PromiseSection() {
  return (
    <section style={{ padding: "96px 48px", background: "var(--surface-sunken)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-4xl)",
            textAlign: "center",
            margin: "0 0 16px",
            color: "var(--text-primary)",
          }}
        >
          Our kid-ready promise
        </h2>
        <p style={{ fontSize: "var(--text-lg)", color: "var(--text-secondary)", textAlign: "center", margin: "0 0 48px" }}>
          Every home is checked against a family standard before it&apos;s listed:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
          {ITEMS.map((item) => (
            <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", minWidth: 260 }}>
              <div
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-pill)",
                  background: "var(--sage-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={item.icon} size={20} color="var(--sage-600)" />
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "var(--text-lg)", margin: "0 0 6px", color: "var(--text-primary)" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "var(--text-md)", color: "var(--text-secondary)", margin: 0, lineHeight: "var(--leading-normal)" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
