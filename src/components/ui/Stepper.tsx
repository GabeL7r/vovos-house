"use client";

import { Icon } from "./Icon";

interface StepperProps {
  label?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export function Stepper({ label, value, min = 0, max = 8, onChange }: StepperProps) {
  const dec = () => value > min && onChange(value - 1);
  const inc = () => value < max && onChange(value + 1);
  const btnStyle = (enabled: boolean) => ({
    width: 34,
    height: 34,
    borderRadius: "var(--radius-pill)",
    border: "1px solid var(--border-strong)",
    background: "var(--surface-raised)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: enabled ? "pointer" : "not-allowed",
    opacity: enabled ? 1 : 0.4,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        fontFamily: "var(--font-body)",
      }}
    >
      {label ? <span style={{ fontSize: "var(--text-md)", color: "var(--text-primary)" }}>{label}</span> : null}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <button type="button" aria-label="Decrease" onClick={dec} style={btnStyle(value > min)}>
          <Icon name="minus" size={14} color="var(--text-primary)" />
        </button>
        <span style={{ minWidth: 20, textAlign: "center", fontSize: "var(--text-md)", fontWeight: "var(--weight-medium)" }}>
          {value}
        </span>
        <button type="button" aria-label="Increase" onClick={inc} style={btnStyle(value < max)}>
          <Icon name="plus" size={14} color="var(--text-primary)" />
        </button>
      </div>
    </div>
  );
}
