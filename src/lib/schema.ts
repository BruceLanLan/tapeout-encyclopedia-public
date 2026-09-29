import { z } from "zod";

export const sourceTierSchema = z.enum([
  "official",
  "community-reviewed-guide",
  "observed-data",
  "community",
  "unverified",
  "deprecated",
]);

export const entryTypeSchema = z.enum([
  "protocol",
  "concept",
  "token",
  "tool",
  "site",
  "person",
  "event",
  "formula",
  "address",
  "other",
]);

export const entryStatusSchema = z.enum([
  "draft",
  "review",
  "published",
  "deprecated",
]);

export const entryFrontmatterSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  locale: z.string().min(2),
  title: z.string().min(1),
  summary: z.string().min(1),
  type: entryTypeSchema,
  status: entryStatusSchema,
  source_tier: sourceTierSchema,
  tags: z.array(z.string()).default([]),
  updated: z.preprocess((v) => {
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return v;
  }, z.string().min(4)),
  aliases: z.array(z.string()).optional(),
  official_url: z.string().url().optional().or(z.literal("").optional()),
  related: z.array(z.string()).default([]),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        tier: sourceTierSchema,
      }),
    )
    .min(1),
  data_refs: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    )
    .optional(),
  safety_notes: z.string().optional(),
  translation_of: z.string().nullable().optional(),
  translators: z.array(z.string()).optional(),
  agents: z
    .array(
      z.object({
        name: z.string(),
        role: z.string(),
        at: z
          .preprocess((v) => {
            if (v instanceof Date) return v.toISOString().slice(0, 10);
            return v;
          }, z.string())
          .optional(),
      }),
    )
    .optional(),
});

export type EntryFrontmatter = z.infer<typeof entryFrontmatterSchema>;

export const relationTypeSchema = z.enum([
  "is_a",
  "part_of",
  "uses",
  "produces",
  "depends_on",
  "operated_by",
  "documents",
  "observes",
  "related_to",
  "supersedes",
]);
