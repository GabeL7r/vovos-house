import { LinkButton } from "./ui/LinkButton";

export function SolutionSection() {
  return (
    <section style={{ padding: "96px 48px", background: "var(--sage-100)", textAlign: "center" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-4xl)",
            margin: "0 0 24px",
            color: "var(--text-primary)",
          }}
        >
          Homes that already thought of the kids.
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-normal)",
            color: "var(--text-secondary)",
            margin: "0 0 36px",
            textWrap: "pretty",
          }}
        >
          Every Vovo&apos;s House home is checked and ready for families with small children: the gear is there, the
          space is safe, and the welcome is warm. Think of the feeling of arriving at grandma&apos;s: someone already
          made up the crib, cleared the low shelves, and left something for the little ones. That&apos;s the
          standard, in every home.
        </p>
        <LinkButton href="#waitlist-form" variant="primary" size="lg">
          Join the waitlist
        </LinkButton>
      </div>
    </section>
  );
}
