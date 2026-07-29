"use client";

import { ButtonHTMLAttributes, CSSProperties, useState } from "react";
import { Icon, type IconName } from "./Icon";
import { getButtonStyle, type ButtonSize, type ButtonVariant } from "./buttonStyles";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  fullWidth?: boolean;
  loading?: boolean;
  style?: CSSProperties;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  disabled,
  fullWidth,
  loading,
  style,
  ...rest
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      style={{
        ...getButtonStyle(variant, size, isDisabled),
        width: fullWidth ? "100%" : "auto",
        transform: pressed ? "scale(0.97)" : "scale(1)",
        ...style,
      }}
      onMouseDown={() => !isDisabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      {...rest}
    >
      {loading ? (
        <Icon name="loader" size={size === "sm" ? 16 : 18} color="currentColor" style={{ animation: "spin 0.8s linear infinite" }} />
      ) : icon ? (
        <Icon name={icon} size={size === "sm" ? 16 : 18} color="currentColor" />
      ) : null}
      {children}
    </button>
  );
}
