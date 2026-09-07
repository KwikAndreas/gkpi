"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "tonal" | "outline";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold py-3 px-6 rounded-[var(--radius-btn)] transition-all shadow-sm active:scale-95 focus:outline-none";

    const variants = {
      primary:
        "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-sm",
      secondary:
        "bg-gray-800 hover:bg-gray-900 text-white",
      tonal:
        "bg-[var(--color-primary-container)] hover:bg-[var(--color-primary-hover)]/15 text-[var(--color-on-primary-container)]",
      outline:
        "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] bg-transparent",
    };

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileTap={{ scale: 0.96 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
