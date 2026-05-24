import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, "..", "dist", "client", "assets");
const clientOut = join(__dirname, "..", "dist", "client");

// Patch hydrateRoot -> createRoot in the main bundle
for (const f of readdirSync(clientDir)) {
  if (!f.endsWith(".js") || f.includes(".map")) continue;
  const path = join(clientDir, f);
  let code = readFileSync(path, "utf-8");

  const idx = code.indexOf("hydrateRoot(document,");
  if (idx !== -1) {
    code = code.slice(0, idx) +
      "createRoot(document.body.appendChild(document.createElement('div'))).render(" +
      code.slice(idx + "hydrateRoot(document,".length);
    writeFileSync(path, code);
    console.log(`Patched hydrateRoot -> createRoot in ${f}`);
    break;
  }
}

// Patch SSR hydration route loading to support SPA mode (no window.$_TSR)
// The function name (g_, w_, etc.) varies between builds, so use a regex.
for (const f of readdirSync(clientDir)) {
  if (!f.endsWith(".js") || f.includes(".map")) continue;
  const path = join(clientDir, f);
  let code = readFileSync(path, "utf-8");

  const pattern = /t\.stores\.matchesId\.get\(\)\.length\|\|await ([a-z]\w+)\(t\)/;
  const match = code.match(pattern);
  if (match) {
    const fn = match[1];
    const oldStr = match[0];
    code = code.slice(0, match.index) +
      `t.stores.matchesId.get().length||await(window.$_TSR?${fn}(t):Promise.resolve())` +
      code.slice(match.index + oldStr.length);
    writeFileSync(path, code);
    console.log(`Patched SSR hydration fallback -> SPA-safe route load in ${f}`);
    break;
  }
}

// Patch shell component to strip <html>, <head>, <body> wrappers (SSR-only; invalid in SPA mode).
// Find the shell function by its signature (parameter destructure + html element render).
for (const f of readdirSync(clientDir)) {
  if (!f.endsWith(".js") || f.includes(".map")) continue;
  const path = join(clientDir, f);
  let code = readFileSync(path, "utf-8");

  const fnStartPat = /function (\w+)\(\{children:t\}\)\{return L\.jsxs\("html",\{/;
  const fnMatch = code.match(fnStartPat);
  if (fnMatch) {
    const fnName = fnMatch[1];
    const fnStart = fnMatch.index;
    const bodyStart = fnStart + `function ${fnName}({children:t}){`.length;
    // Walk forward counting braces to find the matching close-brace of the function body
    let depth = 0;
    let i = bodyStart - 1;
    for (; i < code.length; i++) {
      if (code[i] === "{") depth++;
      else if (code[i] === "}") { depth--; if (depth === 0) break; }
    }
    const fnEnd = i; // index of the closing '}'
    const oldFn = code.slice(fnStart, fnEnd + 1);
    const newFn = `function ${fnName}({children:t}){return t}`;
    code = code.slice(0, fnStart) + newFn + code.slice(fnEnd + 1);
    writeFileSync(path, code);
    console.log(`Patched shell component ${fnName} -> returns children directly in ${f}`);
    break;
  }
}

// Generate index.html — pick the largest index-*.js (main bundle, not a lazy route chunk)
const entryJs = readdirSync(clientDir)
  .filter((f) => f.startsWith("index-") && f.endsWith(".js"))
  .reduce((a, b) => statSync(join(clientDir, a)).size > statSync(join(clientDir, b)).size ? a : b);
const cssFile = readdirSync(clientDir).find((f) => f.startsWith("styles-") && f.endsWith(".css"));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI Consultancy</title>
  <meta name="description" content="Microsoft-focused cloud, cybersecurity, and digital transformation consultancy. Azure, Microsoft 365, Defender, Sentinel, Entra & Intune." />
  <meta property="og:site_name" content="Iqra365 Cloud Solutions" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Iqra365 Cloud Solutions — Microsoft Cloud, Security & AI Consultancy" />
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  <link rel="modulepreload" href="/assets/${entryJs}" />
</head>
<body>
  <script type="module" crossorigin src="/assets/${entryJs}"></script>
</body>
</html>`;

writeFileSync(join(clientOut, "index.html"), html);
console.log("Generated dist/client/index.html");
