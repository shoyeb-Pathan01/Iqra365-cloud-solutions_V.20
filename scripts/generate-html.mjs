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
for (const f of readdirSync(clientDir)) {
  if (!f.endsWith(".js") || f.includes(".map")) continue;
  const path = join(clientDir, f);
  let code = readFileSync(path, "utf-8");

  const idx2 = code.indexOf("t.stores.matchesId.get().length||await g_(t)");
  if (idx2 !== -1) {
    code = code.slice(0, idx2) +
      "t.stores.matchesId.get().length||await(window.$_TSR?g_(t):Promise.resolve())" +
      code.slice(idx2 + "t.stores.matchesId.get().length||await g_(t)".length);
    writeFileSync(path, code);
    console.log(`Patched SSR hydration fallback -> SPA-safe route load in ${f}`);
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
