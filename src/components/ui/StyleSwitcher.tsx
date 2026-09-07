"use client";

import React, { useEffect, useState } from "react";
import { Palette } from "lucide-react";

type StyleMode = "0" | "1" | "2";

export function StyleSwitcher() {
  // Pengaman: Jangan pernah render di mode production / staging
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const [currentStyle, setCurrentStyle] = useState<StyleMode>("0");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("gkpi-style") as StyleMode | null;
    const initial =
      saved || (document.documentElement.getAttribute("data-style") as StyleMode) || "0";
    setCurrentStyle(initial);
    document.documentElement.setAttribute("data-style", initial);
  }, []);

  const switchStyle = (style: StyleMode) => {
    setCurrentStyle(style);
    document.documentElement.setAttribute("data-style", style);
    localStorage.setItem("gkpi-style", style);
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 bg-[var(--color-surface-card)] border border-[var(--color-border-card)] shadow-2xl p-1.5 rounded-full backdrop-blur-md transition-all duration-300 max-w-[calc(100vw-2rem)] overflow-x-auto"
      title="Pilih Style Desain [DEV MODE ONLY] (0 = Warm Minimalist Default, 1 = Elegant Traditional, 2 = Modern Classic)"
    >
      <div className="flex items-center gap-1.5 pl-3 pr-1 text-xs font-semibold text-[var(--color-text-title)] shrink-0">
        <Palette size={15} className="text-[var(--color-primary)]" />
        <span className="hidden sm:inline">Style (Dev):</span>
      </div>

      <button
        onClick={() => switchStyle("0")}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
          currentStyle === "0"
            ? "bg-[var(--color-primary)] text-white shadow-sm"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-primary-light)]"
        }`}
      >
        0 : Warm Minimalist (Default)
      </button>

      <button
        onClick={() => switchStyle("1")}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
          currentStyle === "1"
            ? "bg-[var(--color-primary)] text-white shadow-sm"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-primary-light)]"
        }`}
      >
        1 : Elegant Traditional
      </button>

      <button
        onClick={() => switchStyle("2")}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
          currentStyle === "2"
            ? "bg-[var(--color-primary)] text-white shadow-sm"
            : "text-[var(--color-text-body)] hover:bg-[var(--color-primary-light)]"
        }`}
      >
        2 : Modern Classic
      </button>
    </div>
  );
}
