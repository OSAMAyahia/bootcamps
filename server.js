// Local server for the mirrored https://coded.kw/bootcamps/cybersecurity page.
// Usage: node server.js [port]   then open http://localhost:3000/bootcamps/cybersecurity
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 3000);
const CDN = "https://coded-storage.fra1.cdn.digitaloceanspaces.com";
const MAIN_PAGES = new Set(["/", "/bootcamps/cybersecurity", "/index.html"]);

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".woff2": "font/woff2",
  ".woff": "font/woff", ".mp4": "video/mp4", ".webm": "video/webm", ".glb": "model/gltf-binary",
};
const REWRITE = new Set([".html", ".js", ".css"]);

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

function sendFile(req, res, file, host) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return notFound(res);
    const ext = path.extname(file).toLowerCase();
    const type = TYPES[ext] || "application/octet-stream";
    if (REWRITE.has(ext)) {
      // Point CDN media at the local copy under /cdn.
      const body = fs.readFileSync(file, "utf8").split(CDN).join(`http://${host}/cdn`);
      res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-cache" });
      return res.end(body);
    }
    // Range support so <video> can seek/loop.
    const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : st.size - 1;
      res.writeHead(206, {
        "Content-Type": type, "Accept-Ranges": "bytes",
        "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": end - start + 1,
      });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { "Content-Type": type, "Content-Length": st.size, "Accept-Ranges": "bytes" });
    fs.createReadStream(file).pipe(res);
  });
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found (not part of the mirrored page)");
}

http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const p = url.pathname.replace(/\/+$/, "") || "/";
  const host = req.headers.host || `localhost:${PORT}`;
  const isRsc = url.searchParams.has("_rsc") || req.headers.rsc === "1";

  if (p === "/_next/image") {
    const file = resolveAsset(url.searchParams.get("url") || "");
    return file ? sendFile(req, res, file, host) : notFound(res);
  }
  if (p.startsWith("/api/")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("{}");
  }
  if (MAIN_PAGES.has(p) && !isRsc) {
    if (p === "/") { res.writeHead(302, { Location: "/bootcamps/cybersecurity" }); return res.end(); }
    return sendFile(req, res, path.join(ROOT, "index.html"), host);
  }
  const file = resolveAsset(p);
  if (file && fs.existsSync(file) && fs.statSync(file).isFile()) return sendFile(req, res, file, host);

  // Every other page link (Bootcamps, Companies, Kids, Youth, About, ...) leads back to the
  // mirrored page. RSC fetches get a 404 so Next.js falls back to a full load, which redirects.
  if (isRsc) return notFound(res);
  res.writeHead(302, { Location: "/bootcamps/cybersecurity" });
  res.end();
}).listen(PORT, () => {
  console.log(`Serving on http://localhost:${PORT}/bootcamps/cybersecurity`);
});
