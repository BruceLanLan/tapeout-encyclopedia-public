import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TapeOut Encyclopedia",
  description:
    "Multilingual TapeOut knowledge base, knowledge graph, and agent-friendly contribution standards. Complements the beginner guide and tapeout.work data terminal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-[var(--line)] px-4 py-8 text-sm text-[var(--mute)] sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              TapeOut Encyclopedia — community knowledge layer. Not official
              protocol docs.
            </p>
            <p className="flex flex-wrap gap-3">
              <a
                className="hover:text-[var(--brand)]"
                href="https://github.com/chickdady-svg/tapeout-beginner-guide"
                target="_blank"
                rel="noreferrer"
              >
                Beginner guide
              </a>
              <a
                className="hover:text-[var(--brand)]"
                href="https://tapeout.work"
                target="_blank"
                rel="noreferrer"
              >
                tapeout.work
              </a>
              <Link
                className="hover:text-[var(--brand)]"
                href="/specs/00-overview"
              >
                Specs
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
