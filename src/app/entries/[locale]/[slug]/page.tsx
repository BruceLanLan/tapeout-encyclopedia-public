import Link from "next/link";
import { notFound } from "next/navigation";
import { SimpleMarkdown } from "@/components/markdown";
import { listEntries, listLocales, readEntry } from "@/lib/content";

export function generateStaticParams() {
  return listLocales().flatMap((locale) =>
    listEntries(locale).map((e) => ({ locale, slug: e.slug })),
  );
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const entry = readEntry(locale, slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;
  const otherLocales = listLocales().filter(
    (l) => l !== locale && readEntry(l, slug),
  );

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[var(--mute)]">
        <Link href={`/entries/${locale}`} className="hover:text-[var(--brand)]">
          ← {locale}
        </Link>
        {otherLocales.map((l) => (
          <Link
            key={l}
            href={`/entries/${l}/${slug}`}
            className="rounded border border-[var(--line)] px-2 py-0.5 hover:border-[var(--brand)]"
          >
            {l}
          </Link>
        ))}
      </div>
      <p className="text-xs tracking-[0.16em] text-[var(--brand)] uppercase">
        {fm.type} · {fm.source_tier} · {fm.status}
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
        {fm.title}
      </h1>
      <p className="mt-4 text-lg text-[var(--mute)]">{fm.summary}</p>
      {fm.official_url ? (
        <p className="mt-3 text-sm">
          <a
            href={fm.official_url}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--brand)] underline-offset-4 hover:underline"
          >
            Official / primary URL ↗
          </a>
        </p>
      ) : null}

      <div className="mt-10">
        <SimpleMarkdown source={entry.body} />
      </div>

      <section className="mt-12 border-t border-[var(--line)] pt-8">
        <h2 className="font-display text-2xl">Sources</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {fm.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--brand)] underline-offset-4 hover:underline"
              >
                {s.title}
              </a>{" "}
              <span className="text-[var(--mute)]">({s.tier})</span>
            </li>
          ))}
        </ul>
      </section>

      {fm.data_refs?.length ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl">Data refs</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {fm.data_refs.map((d) => (
              <li key={d.url}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--brand)] underline-offset-4 hover:underline"
                >
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {fm.related.length ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl">Related</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {fm.related.map((id) => (
              <Link
                key={id}
                href={`/entries/${locale}/${id}`}
                className="rounded-md border border-[var(--line)] px-3 py-1 text-sm hover:border-[var(--brand)]"
              >
                {id}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
