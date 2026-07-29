"use client";

import { useState } from "react";
import { Icon } from "./ui/Icon";
import { XIcon, WhatsAppIcon, FacebookIcon } from "./icons/BrandIcons";
import { gaEvent } from "@/lib/gtag";

interface ShareButtonsProps {
  url: string;
  text: string;
}

const circleStyle = {
  width: 44,
  height: 44,
  borderRadius: "var(--radius-pill)",
  border: "1px solid var(--border-subtle)",
  background: "var(--surface-raised)",
  color: "var(--text-secondary)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "var(--shadow-sm)",
  textDecoration: "none",
} as const;

export function ShareButtons({ url, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const canNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  async function handleNativeShare() {
    try {
      await navigator.share({ title: "Vovo's House", text, url });
      gaEvent("share", { method: "native_share", content_type: "waitlist" });
    } catch {
      // user cancelled the share sheet — no-op
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    gaEvent("share", { method: "copy_link", content_type: "waitlist" });
    setTimeout(() => setCopied(false), 2000);
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const links = [
    {
      label: "Share on WhatsApp",
      method: "whatsapp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: <WhatsAppIcon size={19} />,
    },
    {
      label: "Share on X",
      method: "x",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: <XIcon size={17} />,
    },
    {
      label: "Share on Facebook",
      method: "facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon size={18} />,
    },
    {
      label: "Share by email",
      method: "email",
      href: `mailto:?subject=${encodeURIComponent("Join me on the Vovo's House waitlist")}&body=${encodedText}%20${encodedUrl}`,
      icon: <Icon name="mail" size={18} color="var(--text-secondary)" />,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {canNativeShare ? (
          <button type="button" aria-label="Share" onClick={handleNativeShare} style={circleStyle}>
            <Icon name="share" size={18} color="var(--text-secondary)" />
          </button>
        ) : null}
        {links.map((l) => (
          <a
            key={l.method}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            onClick={() => gaEvent("share", { method: l.method, content_type: "waitlist" })}
            style={circleStyle}
          >
            {l.icon}
          </a>
        ))}
        <button type="button" aria-label="Copy link" onClick={handleCopy} style={circleStyle}>
          <Icon name={copied ? "check" : "link"} size={18} color={copied ? "var(--color-success)" : "var(--text-secondary)"} />
        </button>
      </div>
      {copied ? <span style={{ fontSize: "var(--text-xs)", color: "var(--color-success)" }}>Link copied!</span> : null}
    </div>
  );
}
