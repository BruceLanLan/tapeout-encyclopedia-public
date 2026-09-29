import Link from "next/link";

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-[var(--chip)] px-1 py-0.5 font-mono text-[0.9em]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const href = m[2];
      const external = href.startsWith("http");
      if (external) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[var(--brand)]/50 underline-offset-4 hover:decoration-[var(--brand)]"
          >
            {m[1]}
          </a>
        );
      }
      return (
        <Link
          key={i}
          href={href}
          className="underline decoration-[var(--brand)]/50 underline-offset-4 hover:decoration-[var(--brand)]"
        >
          {m[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function SimpleMarkdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      blocks.push(
        <pre
          key={key++}
          className="overflow-x-auto rounded-lg border border-[var(--line)] bg-[var(--chip)] p-4 text-sm"
          data-lang={lang || undefined}
        >
          <code>{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }
    if (line.startsWith("|") && i + 1 < lines.length && lines[i + 1].includes("---")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!cells.every((c) => /^:?-{3,}:?$/.test(c))) rows.push(cells);
        i += 1;
      }
      const [head, ...body] = rows;
      blocks.push(
        <div key={key++} className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {head?.map((c, ci) => (
                  <th
                    key={ci}
                    className="border-b border-[var(--line)] px-3 py-2 font-medium"
                  >
                    {inline(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, ci) => (
                    <td
                      key={ci}
                      className="border-b border-[var(--line)]/60 px-3 py-2 align-top"
                    >
                      {inline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="mt-10 font-display text-2xl tracking-tight">
          {inline(line.slice(3))}
        </h2>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={key++} className="font-display text-3xl tracking-tight">
          {inline(line.slice(2))}
        </h1>,
      );
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="border-l-2 border-[var(--brand)] pl-4 text-[var(--mute)]"
        >
          {quote.map((q, qi) => (
            <p key={qi} className="my-1">
              {inline(q)}
            </p>
          ))}
        </blockquote>,
      );
      continue;
    }
    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      const ordered = /^\d+\.\s+/.test(line);
      while (
        i < lines.length &&
        (ordered ? /^\d+\.\s+/.test(lines[i]) : /^[-*]\s+/.test(lines[i]))
      ) {
        items.push(lines[i].replace(/^([-*]|\d+\.)\s+/, ""));
        i += 1;
      }
      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List
          key={key++}
          className={
            ordered
              ? "my-3 list-decimal space-y-2 pl-5"
              : "my-3 list-disc space-y-2 pl-5"
          }
        >
          {items.map((item, ii) => (
            <li key={ii}>{inline(item)}</li>
          ))}
        </List>,
      );
      continue;
    }
    blocks.push(
      <p key={key++} className="my-3 leading-relaxed text-[var(--ink)]/90">
        {inline(line)}
      </p>,
    );
    i += 1;
  }

  return <div className="space-y-2">{blocks}</div>;
}
