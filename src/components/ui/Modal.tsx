"use client";

import { ReactNode, useEffect } from "react";
import { Icon } from "./Icon";

interface ModalProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  open?: boolean;
}

export function Modal({ title, children, footer, onClose, open = true }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "oklch(20% 0.02 50 / 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "var(--space-4)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface-raised)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          width: 480,
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
          fontFamily: "var(--font-body)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "var(--space-5)",
            borderBottom: "1px solid var(--border-subtle)",
            gap: "var(--space-4)",
          }}
        >
          <span id="modal-title" style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-primary)" }}>
            {title}
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            style={{ all: "unset", cursor: "pointer", display: "inline-flex" }}
          >
            <Icon name="x" size={18} color="var(--text-muted)" />
          </button>
        </div>
        <div style={{ padding: "var(--space-5)", color: "var(--text-secondary)" }}>{children}</div>
        {footer ? (
          <div
            style={{
              padding: "var(--space-5)",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              justifyContent: "flex-end",
              gap: "var(--space-3)",
            }}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
