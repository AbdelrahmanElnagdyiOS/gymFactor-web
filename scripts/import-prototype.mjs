#!/usr/bin/env node
/**
 * import-prototype.mjs — drop a fresh Figma/Claude-Design prototype export into
 * the marketing site with the site-specific tweaks re-applied automatically.
 *
 * Usage:
 *   node scripts/import-prototype.mjs <path-to-export.html> [path-to-support.js]
 *   npm run prototype:import -- ~/Downloads/FITTR-Prototype.dc.html
 *
 * The site expects the "editable canvas" format: an <html> file that loads
 * `./support.js` and renders <x-dc> screens. If a matching `support.js` sits
 * next to the export it is copied automatically; otherwise pass it as arg 2.
 *
 * What this script re-applies (see git history of public/assets/prototype.html):
 *   1. Serve React from /assets/vendor/ instead of the unpkg.com CDN.
 *   2. Inject the embed stylesheet (blends the phone into the hero, thin bezel).
 *   3. Rebrand the prototype's placeholder wordmark to GymFactor.
 *
 * After running, verify the hero still shows the Today screen:
 *   the site loads /assets/prototype.html#screen=today&solo=1
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve, join } from "node:path";

const ASSETS = resolve("public/assets");
const VENDOR = join(ASSETS, "vendor");
const OUT_HTML = join(ASSETS, "prototype.html");
const OUT_SUPPORT = join(ASSETS, "support.js");

const REACT_CDN = {
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js":
    "/assets/vendor/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js":
    "/assets/vendor/react-dom.production.min.js",
};

const RESOURCE_SNIPPET = `<script>
/* Serve React from this site instead of the unpkg.com CDN — keeps the
   embedded prototype self-hosted, fast, and working offline. */
window.__resources = ${JSON.stringify(REACT_CDN, null, 2)};
</script>
`;

const EMBED_STYLE = `<style>
/* Embedded-in-website overrides. The prototype is shown in a tightly-fitted
   iframe on the host page, so: keep every canvas layer on the site background
   (no dark rectangle, no glow bleed), centre the phone with a few px of ring
   clearance, and replace the wide blurred device shadow (the iframe box clips
   it into a hard edge) with a thin crisp bezel — the host re-adds a real one. */
html, body { background: #101010 !important; }
body > div:first-of-type,
div[style*="gap: 56px"] {
  background: #101010 !important;
  min-height: 100% !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 4px 0 !important;
}
div[style*="50px 100px -20px"] {
  box-shadow: 0 0 0 2px #1c1c1c, 0 0 0 3px #2f2f2f !important;
}
</style>
`;

// Placeholder wordmarks used in the design exports → our brand.
const REBRAND = [
  [">STRONGER<", ">GYMFACTOR<"],
  [">FITTR<", ">GYMFACTOR<"],
  ["STRONGER", "GYMFACTOR"],
  ["FITTR", "GYMFACTOR"],
  ["Stronger Pro", "GymFactor Pro"],
  ["FITTR Pro", "GymFactor Pro"],
  ["Stronger 3.0", "GymFactor 3.0"],
  ["FITTR 3.0", "GymFactor 3.0"],
  ["alex@stronger.app", "alex@gymfactor.app"],
  ["alex@fittr.app", "alex@gymfactor.app"],
];

const MARKER_RESOURCES = "window.__resources";
const MARKER_STYLE = "Embedded-in-website overrides";

function die(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

const srcPath = process.argv[2];
if (!srcPath) die("Usage: node scripts/import-prototype.mjs <export.html> [support.js]");
if (!existsSync(srcPath)) die(`No such file: ${srcPath}`);

let html = readFileSync(srcPath, "utf8");
const notes = [];

// --- format sanity check ------------------------------------------------------
// The editable ".dc.html" export ships an <x-dc> tree and loads ./support.js.
// A self-contained *bundle* export shows an "Unpacking…" loader (#__bundler_loading)
// and carries an integrity check that rejects edits.
const isBundle = html.includes('id="__bundler_loading"');
if (isBundle) {
  console.warn(
    "⚠ This looks like a self-contained *bundle* export. Those carry an integrity\n" +
    "  check that rejects edits — ask for the editable `.dc.html` + `support.js`\n" +
    "  pair instead. Continuing anyway; verify the hero renders after import.",
  );
}
const needsSupport = /<script[^>]+src=["']\.?\/?support\.js["']/.test(html);
// support.js is what fetches React from unpkg, so the resource map is needed
// whenever the export loads support.js — even though the .dc.html itself has
// no unpkg URL in it.
const usesUnpkg =
  needsSupport || Object.keys(REACT_CDN).some((u) => html.includes(u));

// --- 1. vendor React, inject the resource map --------------------------------
if (usesUnpkg && !isBundle) {
  mkdirSync(VENDOR, { recursive: true });
  for (const [cdn, local] of Object.entries(REACT_CDN)) {
    const dest = join(ASSETS, local.replace("/assets/", ""));
    if (!existsSync(dest)) {
      const res = await fetch(cdn);
      if (!res.ok) die(`Failed to download ${cdn} (${res.status})`);
      writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
      notes.push(`downloaded ${local}`);
    }
  }
  if (!html.includes(MARKER_RESOURCES)) {
    // Put the map before the first <script> so it wins the resource lookup.
    const at = html.search(/<script\b/i);
    if (at === -1) die("No <script> tag found to anchor the resource map.");
    html = html.slice(0, at) + RESOURCE_SNIPPET + html.slice(at);
    notes.push("injected React resource map (serves React from /assets/vendor/)");
  } else {
    notes.push("resource map already present — skipped");
  }
} else if (isBundle) {
  notes.push("bundle export — React is inlined, resource map skipped");
} else {
  notes.push("export loads neither support.js nor unpkg — resource map skipped");
}

// --- 2. embed stylesheet ----------------------------------------------------
if (!html.includes(MARKER_STYLE)) {
  const at = html.search(/<\/head>/i);
  if (at === -1) die("No </head> found to inject the embed stylesheet.");
  html = html.slice(0, at) + EMBED_STYLE + html.slice(at);
  notes.push("injected embed stylesheet");
} else {
  notes.push("embed stylesheet already present — skipped");
}

// --- 3. rebrand -----------------------------------------------------------------
let rebrands = 0;
for (const [from, to] of REBRAND) {
  const parts = html.split(from);
  if (parts.length > 1) {
    rebrands += parts.length - 1;
    html = parts.join(to);
  }
}
notes.push(`rebranded ${rebrands} placeholder string(s)`);

// --- write ------------------------------------------------------------------
writeFileSync(OUT_HTML, html);
notes.push(`wrote ${OUT_HTML}`);

if (needsSupport) {
  const supportArg = process.argv[3];
  const guess = join(dirname(srcPath), "support.js");
  const supportSrc = supportArg && existsSync(supportArg)
    ? supportArg
    : existsSync(guess)
      ? guess
      : null;
  if (supportSrc) {
    copyFileSync(supportSrc, OUT_SUPPORT);
    notes.push(`copied support.js from ${supportSrc}`);
  } else {
    console.warn(
      "⚠ The export loads ./support.js but none was found next to it. Pass it as\n" +
      "  the 2nd argument, or the prototype will not boot.",
    );
  }
}

console.log("✓ Prototype imported:");
for (const n of notes) console.log(`  • ${n}`);
console.log(
  "\nNext: run `npm run dev`, open the homepage, and confirm the hero phone\n" +
  "shows the Today screen (it loads /assets/prototype.html#screen=today&solo=1).",
);
