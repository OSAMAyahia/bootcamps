// Local server for the mirrored https://coded.kw/bootcamps/cybersecurity page.
// Usage: node server.js [port]   then open http://localhost:3000/bootcamps/cybersecurity
const http = require("http");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 3000);
const CDN = "https://coded-storage.fra1.cdn.digitaloceanspaces.com";
const MAIN_PAGES = new Set(["/", "/bootcamps/cybersecurity", "/index.html"]);
// Mirrored application form (https://coded.kw/program/CyS/apply), served for any /program/<slug>/apply.
const APPLY_PAGE = /^\/program\/[^/]+\/apply$/;
// Form submissions are appended here as JSON lines. On Railway, mount a volume and point DATA_DIR at it,
// otherwise the files are lost on every redeploy.
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, "data");
// Set ADMIN_KEY to download submissions: /admin/<curriculum-leads|applications>.csv?key=ADMIN_KEY
const ADMIN_KEY = process.env.ADMIN_KEY || "";

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".woff2": "font/woff2",
  ".woff": "font/woff", ".mp4": "video/mp4", ".webm": "video/webm", ".glb": "model/gltf-binary", ".pdf": "application/pdf",
};
const COMPRESSIBLE = new Set([".html", ".js", ".mjs", ".css", ".json", ".svg", ".txt", ".glb"]);
// Hashed build output and media never change, so browsers may cache them for good.
const IMMUTABLE = /^\/(next-assets\/static|apply-assets\/static|cdn|cdn-landing|opt)\//;

function safeJoin(rel) {
  const p = path.normalize(path.join(ROOT, decodeURIComponent(rel)));
  return p.startsWith(ROOT) ? p : null;
}

// Map a request path (or an original absolute URL) to a local file.
function resolveAsset(u) {
  if (u.startsWith(CDN)) return safeJoin("cdn" + new URL(u).pathname);
  if (u.startsWith("/media/")) return safeJoin("cdn" + u.slice(6));
  return safeJoin(u);
}

// Stand-in for the Next.js image optimizer: serve the pre-generated WebP (tools/optimize-images.py)
// closest to the requested width, falling back to the original file.
const variantCache = new Map();
function resolveImage(u, width, acceptsWebp) {
  const original = resolveAsset(u);
  if (!original || !acceptsWebp) return original;
  const dir = path.join(ROOT, "opt", path.relative(ROOT, original));
  if (!variantCache.has(dir)) {
    const widths = fs.existsSync(dir)
      ? fs.readdirSync(dir).map((f) => parseInt(f, 10)).filter(Boolean).sort((a, b) => a - b)
      : [];
    variantCache.set(dir, widths);
  }
  const widths = variantCache.get(dir);
  if (!widths.length) return original;
  const w = widths.find((x) => x >= width) || widths[widths.length - 1];
  return path.join(dir, `${w}.webp`);
}

const compressedCache = new Map();
function compressed(file, mtime, encoding) {
  const key = `${file}|${encoding}`;
  const hit = compressedCache.get(key);
  if (hit && hit.mtime === mtime) return hit.body;
  const raw = fs.readFileSync(file);
  const body = encoding === "br"
    ? zlib.brotliCompressSync(raw, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 9 } })
    : zlib.gzipSync(raw, { level: 9 });
  compressedCache.set(key, { mtime, body });
  return body;
}

function sendFile(req, res, file, urlPath) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return notFound(res);
    const ext = path.extname(file).toLowerCase();
    const headers = {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Cache-Control": IMMUTABLE.test(urlPath) ? "public, max-age=31536000, immutable" : "no-cache",
      "Last-Modified": st.mtime.toUTCString(),
      Vary: "Accept-Encoding, Accept",
    };
    if (req.headers["if-modified-since"] && new Date(req.headers["if-modified-since"]) >= new Date(st.mtime.toUTCString())) {
      res.writeHead(304, headers);
      return res.end();
    }
    const accept = req.headers["accept-encoding"] || "";
    const encoding = /\bbr\b/.test(accept) ? "br" : /\bgzip\b/.test(accept) ? "gzip" : null;
    if (COMPRESSIBLE.has(ext) && encoding) {
      const body = compressed(file, st.mtimeMs, encoding);
      res.writeHead(200, { ...headers, "Content-Encoding": encoding, "Content-Length": body.length });
      return res.end(body);
    }
    // Range support so <video> can seek/loop.
    const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Math.min(Number(range[2]), st.size - 1) : st.size - 1;
      res.writeHead(206, {
        ...headers, "Accept-Ranges": "bytes",
        "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": end - start + 1,
      });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { ...headers, "Content-Length": st.size, "Accept-Ranges": "bytes" });
    fs.createReadStream(file).pipe(res);
  });
}

function sendJson(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(JSON.stringify(body));
}

function readJsonBody(req, limit = 64 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > limit) { reject(new Error("too large")); req.destroy(); } else chunks.push(c);
    });
    req.on("end", () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")); } catch (e) { reject(e); }
    });
    req.on("error", reject);
  });
}

function saveSubmission(kind, req, data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const record = { receivedAt: new Date().toISOString(), ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress, ...data };
  fs.appendFileSync(path.join(DATA_DIR, `${kind}.jsonl`), JSON.stringify(record) + "\n");
}

function toCsv(file) {
  const rows = fs.existsSync(file)
    ? fs.readFileSync(file, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l))
    : [];
  const flat = rows.map(({ answers, ...rest }) => ({ ...rest, ...(answers && typeof answers === "object" ? answers : {}) }));
  const cols = [...new Set(flat.flatMap((r) => Object.keys(r)))];
  const cell = (v) => {
    const t = v == null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
    return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
  };
  // BOM so Excel opens Arabic text correctly.
  return "﻿" + [cols.join(","), ...flat.map((r) => cols.map((c) => cell(r[c])).join(","))].join("\n");
}

// Local stand-ins for the APIs the mirrored pages call.
async function handleApi(req, res, p, url) {
  if (req.method === "POST" && p === "/api/curriculum-lead") {
    const body = await readJsonBody(req);
    const name = String(body.name || "").trim().slice(0, 120);
    const whatsapp = String(body.whatsapp || "").replace(/[^\d+]/g, "").slice(0, 20);
    if (name.length < 2 || whatsapp.replace(/\D/g, "").length < 7) return sendJson(res, 400, { error: "Invalid name or number" });
    saveSubmission("curriculum-leads", req, { name, whatsapp, page: String(body.page || "").slice(0, 300) });
    return sendJson(res, 200, { ok: true });
  }
  if (req.method === "POST" && p === "/api/apply") {
    saveSubmission("applications", req, await readJsonBody(req));
    return sendJson(res, 200, { success: true });
  }
  if (p === "/api/apply/lookup") return sendJson(res, 200, { alreadyApplied: false });
  if (req.method === "GET") {
    // Dropdown option lists captured from the original site (apply/api/*.json).
    const name = (p.slice(5) + url.search).replace(/[/?=]/g, "_");
    const cached = path.join(ROOT, "apply", "api", `${name}.json`);
    if (fs.existsSync(cached)) {
      res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "public, max-age=3600" });
      return fs.createReadStream(cached).pipe(res);
    }
    return sendJson(res, 200, { data: [] });
  }
  return sendJson(res, 200, {});
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found (not part of the mirrored page)");
}

http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const p = url.pathname.replace(/\/+$/, "") || "/";
  const isRsc = url.searchParams.has("_rsc") || req.headers.rsc === "1";

  if (p === "/next-assets/image" || p === "/apply-assets/image") {
    const acceptsWebp = (req.headers.accept || "").includes("image/webp");
    const file = resolveImage(url.searchParams.get("url") || "", Number(url.searchParams.get("w")) || 3840, acceptsWebp);
    return file ? sendFile(req, res, file, "/opt/") : notFound(res);
  }
  if (p.startsWith("/api/")) {
    return handleApi(req, res, p, url).catch(() => sendJson(res, 400, { error: "Bad request" }));
  }
  if (p.startsWith("/admin/")) {
    const kind = { "/admin/curriculum-leads.csv": "curriculum-leads", "/admin/applications.csv": "applications" }[p];
    if (!ADMIN_KEY || url.searchParams.get("key") !== ADMIN_KEY || !kind) return notFound(res);
    res.writeHead(200, {
      "Content-Type": "text/csv; charset=utf-8", "Cache-Control": "no-store",
      "Content-Disposition": `attachment; filename="${kind}.csv"`,
    });
    return res.end(toCsv(path.join(DATA_DIR, `${kind}.jsonl`)));
  }
  if (p.startsWith("/data/")) return notFound(res);
  if (APPLY_PAGE.test(p) && !isRsc) return sendFile(req, res, path.join(ROOT, "apply", "index.html"), p);
  if (MAIN_PAGES.has(p) && !isRsc) {
    if (p === "/") { res.writeHead(302, { Location: "/bootcamps/cybersecurity" }); return res.end(); }
    return sendFile(req, res, path.join(ROOT, "index.html"), p);
  }
  const file = resolveAsset(p);
  if (file && fs.existsSync(file) && fs.statSync(file).isFile()) {
    // Images referenced directly (hero art, video posters) get their full-size WebP when supported.
    const acceptsWebp = (req.headers.accept || "").includes("image/webp");
    const img = /\.(png|jpe?g)$/i.test(file) ? resolveImage(p, Infinity, acceptsWebp) : file;
    return sendFile(req, res, img, p);
  }

  // Every other page link (Bootcamps, Companies, Kids, Youth, About, ...) leads back to the
  // mirrored page. RSC fetches get a 404 so Next.js falls back to a full load, which redirects.
  if (isRsc) return notFound(res);
  res.writeHead(302, { Location: "/bootcamps/cybersecurity" });
  res.end();
}).listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}/bootcamps/cybersecurity`);
});
