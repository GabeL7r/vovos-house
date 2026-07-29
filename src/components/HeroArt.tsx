export function HeroArt() {
  return (
    <svg viewBox="0 0 560 420" style={{ width: "100%", height: "100%", display: "block" }} xmlns="http://www.w3.org/2000/svg">
      <rect width="560" height="420" fill="var(--sand-100)" />
      <rect x="0" y="0" width="560" height="300" fill="var(--sand-100)" />
      <circle cx="486" cy="72" r="58" fill="var(--sand-500)" opacity="0.3" />
      <circle cx="486" cy="72" r="30" fill="var(--sand-600)" />
      <rect x="46" y="44" width="168" height="140" rx="10" fill="var(--sky-100)" stroke="var(--terracotta-500)" strokeWidth="7" />
      <line x1="130" y1="44" x2="130" y2="184" stroke="var(--terracotta-500)" strokeWidth="6" />
      <line x1="46" y1="114" x2="214" y2="114" stroke="var(--terracotta-500)" strokeWidth="6" />
      <rect x="0" y="300" width="560" height="120" fill="var(--neutral-100)" />
      <ellipse cx="290" cy="392" rx="230" ry="34" fill="var(--terracotta-100)" />
      <rect x="486" y="330" width="36" height="52" rx="8" fill="var(--terracotta-600)" />
      <circle cx="497" cy="308" r="20" fill="var(--sage-500)" />
      <circle cx="478" cy="296" r="16" fill="var(--sage-600)" />
      <circle cx="514" cy="298" r="15" fill="var(--sage-500)" />

      <rect x="128" y="210" width="290" height="88" rx="22" fill="var(--sage-500)" />
      <rect x="118" y="252" width="310" height="64" rx="20" fill="var(--sage-600)" />
      <rect x="108" y="222" width="42" height="96" rx="18" fill="var(--sage-600)" />
      <rect x="410" y="222" width="42" height="96" rx="18" fill="var(--sage-600)" />
      <rect x="152" y="228" width="62" height="46" rx="12" fill="var(--sand-100)" transform="rotate(-6 183 251)" />
      <rect x="330" y="228" width="62" height="46" rx="12" fill="var(--terracotta-100)" transform="rotate(6 361 251)" />

      <rect x="205" y="270" width="34" height="76" rx="17" fill="var(--terracotta-600)" transform="rotate(-24 222 308)" />
      <rect x="300" y="270" width="34" height="76" rx="17" fill="var(--terracotta-600)" transform="rotate(24 317 308)" />
      <rect x="212" y="258" width="100" height="120" rx="42" fill="var(--terracotta-600)" />
      <circle cx="262" cy="252" r="30" fill="var(--neutral-300)" />
      <path d="M 234 240 Q 262 208 290 240 Q 290 222 262 218 Q 234 222 234 240 Z" fill="var(--neutral-700)" />

      <rect x="252" y="312" width="58" height="64" rx="26" fill="var(--sky-500)" />
      <circle cx="281" cy="304" r="21" fill="var(--neutral-200)" />
      <path d="M 262 296 Q 281 276 300 296 Q 300 284 281 282 Q 262 284 262 296 Z" fill="var(--neutral-600)" />

      <circle cx="105" cy="378" r="17" fill="var(--coral-500)" />
      <rect x="368" y="362" width="26" height="26" rx="5" fill="var(--sky-500)" transform="rotate(14 381 375)" />
      <rect x="400" y="376" width="22" height="22" rx="5" fill="var(--sage-500)" transform="rotate(-10 411 387)" />
    </svg>
  );
}
