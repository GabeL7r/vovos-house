import { CSSProperties } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonSizes: Record<ButtonSize, { padding: string; fontSize: string; radius: string }> = {
  sm: { padding: "8px 16px", fontSize: "var(--text-sm)", radius: "var(--radius-md)" },
  md: { padding: "12px 22px", fontSize: "var(--text-md)", radius: "var(--radius-lg)" },
  lg: { padding: "16px 28px", fontSize: "var(--text-lg)", radius: "var(--radius-lg)" },
};

export const buttonVariants: Record<ButtonVariant, CSSProperties> = {
  primary: { background: "var(--color-primary)", color: "var(--text-on-accent)", border: "1px solid transparent" },
  secondary: { background: "var(--color-secondary)", color: "var(--text-on-accent)", border: "1px solid transparent" },
  outline: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--text-primary)", border: "1px solid transparent" },
};

export function getButtonStyle(variant: ButtonVariant, size: ButtonSize, disabled = false): CSSProperties {
  const s = buttonSizes[size];
  const v = buttonVariants[variant];
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-bold)",
    fontSize: s.fontSize,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "transform 120ms ease, filter 120ms ease",
    textDecoration: "none",
    ...v,
  };
}
