import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "WARNING: This human replays embarrassing moments from 2009 at 3 a.m. Do not shake, soothe, or remind them. There is no off switch.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
