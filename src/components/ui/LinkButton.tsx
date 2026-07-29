import { AnchorHTMLAttributes, CSSProperties } from "react";
import { getButtonStyle, type ButtonSize, type ButtonVariant } from "./buttonStyles";

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  style?: CSSProperties;
}

export function LinkButton({ children, variant = "primary", size = "md", style, ...rest }: LinkButtonProps) {
  return (
    <a style={{ ...getButtonStyle(variant, size), ...style }} {...rest}>
      {children}
    </a>
  );
}
