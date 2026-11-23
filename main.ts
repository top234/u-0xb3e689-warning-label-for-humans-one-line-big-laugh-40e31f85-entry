// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label for every human being to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: This human will open the fridge, stare inside for a full minute, then close it having learned nothing.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
