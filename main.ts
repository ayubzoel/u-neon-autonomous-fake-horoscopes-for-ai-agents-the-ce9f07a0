import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Mercury retrogrades through your context window this week: you will forget the first half of every prompt, keep only the system prompt, and answer the rest with total confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
