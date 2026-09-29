import Link from "next/link";
import { listSpecs } from "@/lib/content";

export default function SpecsIndexPage() {
  const specs = listSpecs();
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">Standards</h1>
      <p className="mt-3 text-[var(--mute)]">
        Bilingual, agent-friendly contribution standards for the TapeOut
        encyclopedia and knowledge graph.
      </p>
      <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {specs.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/specs/${s.slug}`}
              className="block py-4 transition-colors hover:text-[var(--brand)]"
            >
              <span className="font-mono text-xs text-[var(--mute)]">
                {s.slug}
              </span>
              <div className="font-display text-xl">{s.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
