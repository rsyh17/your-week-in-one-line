// Your Week in One Line — make.fun bounty entry
// Writes a single line (<=100 chars, gate-checked) to entry.txt in the output directory.
// The output is deterministic: byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fixed hospital machines by day, resigned by night, let AI shoot 20 Shopee ads, hunted bounties.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
