import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StyleSwitcher } from "@/components/ui/StyleSwitcher";

export const metadata: Metadata = {
  title: "GKPI Public Website",
  description: "Website Resmi GKPI",
};

// Pengaturan style default jika tidak ada environment variable:
// "0" = Warm Minimalist (Default Resmi GKPI - AGENTS.md)
// "1" = Elegant Traditional (Sacred Cathedral Heritage)
// "2" = Modern Classic (Editorial Luxury)
const FALLBACK_STYLE: "0" | "1" | "2" = "1";
const ACTIVE_STYLE =
  (process.env.NEXT_PUBLIC_APP_STYLE as "0" | "1" | "2") || FALLBACK_STYLE;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      data-style={ACTIVE_STYLE}
      className={`${jakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col text-lg leading-relaxed font-sans"
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* StyleSwitcher hanya aktif di mode development (npm run dev) */}
        {process.env.NODE_ENV === "development" && <StyleSwitcher />}
      </body>
    </html>
  );
}
