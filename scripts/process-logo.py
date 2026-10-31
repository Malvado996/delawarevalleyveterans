"""Process the DVV eagle logo for the navy site header.

Source: navy (~#011634) artwork with a hard 0/255 alpha mask and white RGB in
transparent areas. Steps:
  1. Rebuild a smooth alpha from luminance (white -> 0, artwork navy -> 1),
     so edges are antialiased instead of the source's jagged binary mask.
  2. Drop specks below alpha 0.06 (8% white noise floor), clamp >=0.94 to 1.
  3. Recolor all artwork to brand cream #F7F5F0 (the header is brand navy
     #0A3161; the original navy-on-navy contrast is only ~1.6:1).
     Interior white details (feathers, stars, stripes) stay transparent
     cutouts, so the navy header shows through them.
  4. Trim to content with a 2% padding, export master + 160px-tall PNG/WebP.
"""
import sys
import numpy as np
from PIL import Image

SRC = sys.argv[1]
OUT = "public/logo"
CREAM = (0xF7, 0xF5, 0xF0)

im = Image.open(SRC).convert("RGBA")
a = np.asarray(im).astype(np.float32)
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
ink = np.percentile(lum[a[..., 3] > 0], 5)  # darkest artwork tone
cov = np.clip((255.0 - lum) / (255.0 - ink), 0, 1)
cov[cov < 0.06] = 0
cov[cov >= 0.94] = 1
out = np.zeros_like(a)
out[..., 0], out[..., 1], out[..., 2] = CREAM
out[..., 3] = cov * 255
img = Image.fromarray(out.astype(np.uint8), "RGBA")
bbox = img.getchannel("A").getbbox()
img = img.crop(bbox)
pad = int(round(max(img.size) * 0.02))
canvas = Image.new("RGBA", (img.width + 2 * pad, img.height + 2 * pad), CREAM + (0,))
canvas.paste(img, (pad, pad))
canvas.save(f"{OUT}/dvv-logo-full.png", optimize=True)
h = 160
w = round(canvas.width * h / canvas.height)
small = canvas.resize((w, h), Image.LANCZOS)
small.save(f"{OUT}/dvv-logo.png", optimize=True)
small.save(f"{OUT}/dvv-logo.webp", quality=90, method=6)
print("ink luminance", ink, "bbox", bbox, "master", canvas.size, "small", small.size)

# Larger variant for the homepage hero (displayed up to 192px tall -> 2x = 384).
h = 384
w = round(canvas.width * h / canvas.height)
hero = canvas.resize((w, h), Image.LANCZOS)
hero.save(f"{OUT}/dvv-logo-hero.png", optimize=True)
hero.save(f"{OUT}/dvv-logo-hero.webp", quality=90, method=6)
print("hero", hero.size)
