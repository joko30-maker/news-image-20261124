// The World Today — entry program for the make.fun news-image-20261124 bounty.
// The poster beside this file (entry.png) is the whole entry: this program
// delivers it to the output directory the grader points at, byte for byte,
// and does nothing else. It runs offline and writes the same bytes every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
