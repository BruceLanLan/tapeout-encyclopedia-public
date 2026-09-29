import Link from "next/link";

const links = [
  { href: "/entries/zh", label: "词条 Entries" },
  { href: "/collections/zh", label: "归集 Collections" },
  { href: "/graph", label: "图谱 Graph" },
  { href: "/specs", label: "规范 Specs" },
  { href: "/why", label: "为何新建 Why" },
];

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-[var(--line)]/80 bg-[var(--paper)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="font-display text-xl tracking-tight text-[var(--ink)] sm:text-2xl">
            TapeOut Encyclopedia
          </span>
          <span className="text-xs tracking-[0.18em] text-[var(--mute)] uppercase">
            百科 · 知识图谱 · 共建规范
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-[var(--ink)]/80">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--brand)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://tapeout.work"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[var(--line)] px-2.5 py-1 text-[var(--brand)] transition-colors hover:border-[var(--brand)]"
          >
            tapeout.work ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
