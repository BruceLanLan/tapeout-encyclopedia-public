import Link from "next/link";
import { loadGraph } from "@/lib/content";

export default function GraphPage() {
  const { entities, relations } = loadGraph();
  const label = (id: string) => {
    const e = entities.find((x) => x.id === id);
    return e?.label.zh || e?.label.en || id;
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">Knowledge graph</h1>
      <p className="mt-3 max-w-2xl text-[var(--mute)]">
        Machine-readable entities and relations from{" "}
        <code className="rounded bg-[var(--chip)] px-1">content/graph/</code>.
        Schema: <Link href="/specs/02-graph-schema" className="text-[var(--brand)]">specs/02</Link>.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl">
          Entities ({entities.length})
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {entities.map((e) => (
            <li
              key={e.id}
              className="border-t border-[var(--brand)]/40 pt-3"
            >
              <div className="font-medium">{e.label.zh || e.label.en}</div>
              <div className="text-xs text-[var(--mute)]">
                {e.id} · {e.type} · {e.source_tier}
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-[var(--brand)]">
                {e.entry_slugs?.zh ? (
                  <Link href={`/entries/zh/${e.entry_slugs.zh}`}>
                    Open entry →
                  </Link>
                ) : null}
                {e.official_url ? (
                  <a href={e.official_url} target="_blank" rel="noreferrer">
                    Open source ↗
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">
          Relations ({relations.length})
        </h2>
        <ul className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {relations.map((r) => (
            <li
              key={r.id}
              className="grid gap-1 py-4 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4"
            >
              <span>{label(r.from)}</span>
              <span className="font-mono text-xs text-[var(--brand)]">
                {r.type}
              </span>
              <span className="sm:text-right">{label(r.to)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
