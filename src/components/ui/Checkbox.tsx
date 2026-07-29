"use client";

import { InputHTMLAttributes } from "react";
import { Icon } from "./Icon";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style" | "type"> {
  label?: string;
}

export function Checkbox({ label, checked, disabled, ...rest }: CheckboxProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
      }}
    >
      <input type="checkbox" checked={checked} disabled={disabled} style={{ display: "none" }} {...rest} />
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "var(--radius-sm)",
          border: `1.5px solid ${checked ? "var(--color-primary)" : "var(--border-strong)"}`,
          background: checked ? "var(--color-primary)" : "var(--surface-raised)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 120ms ease",
          flexShrink: 0,
        }}
      >
        {checked ? <Icon name="check" size={14} color="var(--text-on-accent)" /> : null}
      </span>
      {label ? <span style={{ fontSize: "var(--text-md)", color: "var(--text-primary)" }}>{label}</span> : null}
    </label>
  );
}
