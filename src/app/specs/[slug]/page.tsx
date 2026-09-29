import Link from "next/link";
import { notFound } from "next/navigation";
import { SimpleMarkdown } from "@/components/markdown";
import { listSpecs, readSpec } from "@/lib/content";

export function generateStaticParams() {
  return listSpecs().map((s) => ({ slug: s.slug }));
}

export default async function SpecPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = readSpec(slug);
  if (!source) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/specs"
        className="text-sm text-[var(--mute)] hover:text-[var(--brand)]"
      >
        ← Specs
      </Link>
      <div className="mt-6">
        <SimpleMarkdown source={source} />
      </div>
    </article>
  );
}
