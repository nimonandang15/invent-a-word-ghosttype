import * as fs from "node:fs";

// One invented English word with a one-line definition.
// The gap: everyone has watched the three typing dots appear, linger,
// and then vanish — no message ever arrives. English has "ghosting" for
// a person who disappears, but no word for the dots themselves doing it.
// "ghosttype" names the vanishing act, not the person: the dots are the
// ghost, typing is what they pretend to do, and the silence afterwards
// is the whole point. It is sayable, spellable, and memorable because
// it is built from two words every phone user already knows.
const text =
  "ghosttype — The typing dots that appear, linger, then vanish without a message ever arriving.";

// Gate: one line, 1-140 characters, UTF-8, not only whitespace.
// The entry is 93 characters (the em dash is 3 bytes in UTF-8, so the
// file is 95 bytes), all on one line, with no trailing newline.
// Short is deliberate: the definition lands in one reading, and a
// smaller text wins an exact tie on the leaderboard.
if (text.length !== 93) {
  throw new Error(`Expected the 93-character entry, got ${text.length}`);
}
if (text.length < 1 || text.length > 140) {
  throw new Error(`Expected 1-140 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
