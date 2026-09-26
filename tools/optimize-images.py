# Pre-generates resized WebP variants for every image that Next.js requests through
# /next-assets/image?url=...&w=..., mirroring what the Next.js image optimizer does.
# Output: opt/<image path>/<width>.webp   (server.js picks the closest width)
import os, glob
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
QUALITY = 78

sources = []
for d in ("cdn", "img", "brand", "logos"):
    for ext in ("png", "jpg", "jpeg"):
        sources += glob.glob(os.path.join(ROOT, d, "**", f"*.{ext}"), recursive=True)

before = after = 0
for src in sources:
    rel = os.path.relpath(src, ROOT).replace("\\", "/")
    out_dir = os.path.join(ROOT, "opt", rel)
    os.makedirs(out_dir, exist_ok=True)
    im = Image.open(src)
    im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
    before += os.path.getsize(src)
    widths = [w for w in WIDTHS if w < im.width] + [im.width]
    for w in widths:
        h = max(1, round(im.height * w / im.width))
        dest = os.path.join(out_dir, f"{w}.webp")
        im.resize((w, h), Image.LANCZOS).save(dest, "WEBP", quality=QUALITY, method=6)
    after += os.path.getsize(os.path.join(out_dir, f"{im.width}.webp"))
    print(f"{rel}: {im.width}px, {len(widths)} sizes")

print(f"full-size total: {before/1e6:.1f} MB -> {after/1e6:.1f} MB (webp)")
