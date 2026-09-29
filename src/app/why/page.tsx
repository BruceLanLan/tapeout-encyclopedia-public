import Link from "next/link";
import { SimpleMarkdown } from "@/components/markdown";
import { readDoc } from "@/lib/content";

export default function WhyPage() {
  const why = readDoc("WHY_NEW_REPO.md") ?? "# Missing WHY_NEW_REPO.md";
  const collab =
    readDoc("COLLABORATION_REQUEST.md") ?? "# Missing collaboration draft";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm text-[var(--mute)]">
        Also see{" "}
        <Link href="/specs/00-overview" className="text-[var(--brand)]">
          contribution standards
        </Link>
        .
      </p>
      <div className="mt-6">
        <SimpleMarkdown source={why} />
      </div>
      <hr className="my-12 border-[var(--line)]" />
      <div>
        <SimpleMarkdown source={collab} />
      </div>
    </div>
  );
}
