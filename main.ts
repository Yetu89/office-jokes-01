// Make the AI Judge Laugh: Office Jokes — one office joke under
// 200 characters.
//
// The joke turns a familiar boast ("I work best under pressure")
// back on the speaker: the boss takes it literally, and now the
// deadlines arrive before the work itself. Recognition (every office
// has that boast), a turn, and nothing wasted.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

void BOT_DIR;

// The joke: one line, 95 characters.
const JOKE =
  'I told my boss I work best under pressure, so now my deadlines arrive before my assignments do.';

if (JOKE.length < 1 || JOKE.length >= 200 || JOKE.trim().length === 0) {
  console.error(`entry must be 1-199 characters of non-whitespace text, got ${JOKE.length}`);
  process.exit(1);
}
if (/[\r\n]/.test(JOKE)) {
  console.error('entry must be a single line with no line breaks');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, JOKE, 'utf8');
console.log(`office-jokes-01 entry: ${JOKE}`);
