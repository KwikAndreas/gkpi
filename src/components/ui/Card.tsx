"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hoverEffect = true, ...props }, ref) => {
    const baseStyles =
      "card-theme bg-[var(--color-surface-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border-card)] shadow-[var(--theme-shadow-card)] transition-all duration-300";
    const hoverStyles = hoverEffect
      ? "hover:shadow-[var(--theme-shadow-card-hover)] hover:border-[var(--color-border-card-hover)]"
      : "";

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
