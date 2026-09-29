import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { parse as parseYaml } from "yaml";
import { entryFrontmatterSchema, type EntryFrontmatter } from "./schema";

const root = process.cwd();
const entriesRoot = path.join(root, "content", "entries");

export type Entry = {
  frontmatter: EntryFrontmatter;
  body: string;
  locale: string;
  slug: string;
};

export type Entity = {
  id: string;
  type: string;
  label: Record<string, string>;
  aliases?: string[];
  entry_slugs?: Record<string, string>;
  source_tier: string;
  official_url?: string | null;
  data_refs?: string[];
};

export type Relation = {
  id: string;
  from: string;
  to: string;
  type: string;
  confidence: string;
  source_tier: string;
  sources: string[];
};

export function listLocales(): string[] {
  if (!fs.existsSync(entriesRoot)) return [];
  return fs
    .readdirSync(entriesRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export function listEntries(locale: string): Entry[] {
  const dir = path.join(entriesRoot, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((f) => readEntry(locale, f.replace(/\.md$/, "")))
    .filter((e): e is Entry => Boolean(e))
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
}

export function readEntry(locale: string, slug: string): Entry | null {
  const file = path.join(entriesRoot, locale, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const parsed = entryFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${locale}/${slug}.md: ${parsed.error.message}`,
    );
  }
  if (parsed.data.locale !== locale) {
    throw new Error(
      `Locale mismatch in ${locale}/${slug}.md: frontmatter.locale=${parsed.data.locale}`,
    );
  }
  if (parsed.data.slug !== slug) {
    throw new Error(
      `Slug mismatch in ${locale}/${slug}.md: frontmatter.slug=${parsed.data.slug}`,
    );
  }
  return {
    frontmatter: parsed.data,
    body: content.trim(),
    locale,
    slug,
  };
}

export function loadGraph(): { entities: Entity[]; relations: Relation[] } {
  const entitiesPath = path.join(root, "content", "graph", "entities.yaml");
  const relationsPath = path.join(root, "content", "graph", "relations.yaml");
  const entitiesDoc = parseYaml(fs.readFileSync(entitiesPath, "utf8")) as {
    entities: Entity[];
  };
  const relationsDoc = parseYaml(fs.readFileSync(relationsPath, "utf8")) as {
    relations: Relation[];
  };
  return {
    entities: entitiesDoc.entities ?? [],
    relations: relationsDoc.relations ?? [],
  };
}

export function listSpecs(): { slug: string; title: string }[] {
  const specsDir = path.join(root, "specs");
  return fs
    .readdirSync(specsDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const text = fs.readFileSync(path.join(specsDir, f), "utf8");
      const title =
        text
          .split("\n")
          .find((l) => l.startsWith("# "))
          ?.replace(/^#\s+/, "") ?? slug;
      return { slug, title };
    });
}

export function readSpec(slug: string): string | null {
  const file = path.join(root, "specs", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

export function readDoc(name: string): string | null {
  const file = path.join(root, "docs", name);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}
