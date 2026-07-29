"use client";

import { SelectHTMLAttributes } from "react";
import { Icon } from "./Icon";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "style"> {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function Select({ label, options, placeholder = "Select", id, ...rest }: SelectProps) {
  return (
    <label
      htmlFor={id}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-1)",
        fontFamily: "var(--font-body)",
        width: "100%",
      }}
    >
      {label ? (
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-secondary)" }}>
          {label}
        </span>
      ) : null}
      <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <select
          id={id}
          style={{
            width: "100%",
            appearance: "none",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-md)",
            padding: "12px 40px 12px 14px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-subtle)",
            background: "var(--surface-raised)",
            color: "var(--text-primary)",
            outline: "none",
          }}
          {...rest}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          size={16}
          color="var(--text-muted)"
          style={{ position: "absolute", right: 14, pointerEvents: "none" }}
        />
      </span>
    </label>
  );
}
