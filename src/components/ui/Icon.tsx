import {
  Baby,
  Check,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Link,
  Loader2,
  Mail,
  Minus,
  Plus,
  Share2,
  ShieldCheck,
  ToyBrick,
  Users,
  X,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  baby: Baby,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "dollar-sign": DollarSign,
  link: Link,
  loader: Loader2,
  mail: Mail,
  minus: Minus,
  plus: Plus,
  share: Share2,
  "shield-check": ShieldCheck,
  "toy-brick": ToyBrick,
  users: Users,
  x: X,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends Omit<LucideProps, "size" | "color"> {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 20, color = "currentColor", ...rest }: IconProps) {
  const Cmp = ICONS[name];
  return <Cmp aria-hidden="true" size={size} color={color} {...rest} />;
}
