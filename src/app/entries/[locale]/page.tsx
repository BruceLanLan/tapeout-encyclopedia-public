import Link from "next/link";
import { notFound } from "next/navigation";
import { listEntries, listLocales } from "@/lib/content";

export function generateStaticParams() {
  return listLocales().map((locale) => ({ locale }));
}

export default async function EntriesLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!listLocales().includes(locale)) notFound();
  const entries = listEntries(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl tracking-tight">
            Entries · {locale}
          </h1>
          <p className="mt-2 text-[var(--mute)]">
            Same slug across languages. Contribute via{" "}
            <Link href="/specs/04-i18n" className="text-[var(--brand)]">
              i18n spec
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          {listLocales().map((l) => (
            <Link
              key={l}
              href={`/entries/${l}`}
              className={
                l === locale
                  ? "rounded-md bg-[var(--brand)] px-3 py-1 text-white"
                  : "rounded-md border border-[var(--line)] px-3 py-1 hover:border-[var(--brand)]"
              }
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {entries.map((e) => (
          <li key={e.slug}>
            <Link
              href={`/entries/${locale}/${e.slug}`}
              className="flex flex-col gap-1 py-5 transition-colors hover:bg-[var(--chip)]/50 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <div className="font-display text-2xl">{e.frontmatter.title}</div>
                <p className="mt-1 max-w-2xl text-[var(--mute)]">
                  {e.frontmatter.summary}
                </p>
              </div>
              <div className="shrink-0 text-xs tracking-wide text-[var(--mute)] uppercase">
                {e.frontmatter.type} · {e.frontmatter.source_tier}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
