"use client";
import clsx from "classnames";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  ...props
}) => {
  const base = "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600 ring-offset-background",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-900",
  } as const;
  return (
    <button className={clsx(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
