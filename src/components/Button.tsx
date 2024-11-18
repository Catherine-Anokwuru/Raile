import React from "react";
import styles from "../styles/Button.module.css";
import clsx from "clsx"; // To combine CSS classes conditionally

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "reset" | "submit";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  style,
  type,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size])}
      onClick={onClick}
      style={style}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
};

export default Button;
