"use client";

import { InputHTMLAttributes } from "react";
import { Icon, type IconName } from "./Icon";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  icon?: IconName;
  error?: string;
  helpText?: string;
}

export function Input({ label, icon, error, helpText, id, ...rest }: InputProps) {
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
        {icon ? (
          <Icon name={icon} size={18} color="var(--text-muted)" style={{ position: "absolute", left: 14 }} />
        ) : null}
        <input
          id={id}
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-md)",
            padding: icon ? "12px 14px 12px 42px" : "12px 14px",
            borderRadius: "var(--radius-md)",
            border: `1px solid ${error ? "var(--color-danger)" : "var(--border-subtle)"}`,
            background: rest.disabled ? "var(--surface-sunken)" : "var(--surface-raised)",
            color: "var(--text-primary)",
            outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-focus)")}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          {...rest}
        />
      </span>
      {error ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-danger)" }}>{error}</span>
      ) : helpText ? (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{helpText}</span>
      ) : null}
    </label>
  );
}
