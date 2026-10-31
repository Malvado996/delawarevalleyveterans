"""Build favicons from public/logo/dvv-logo-full.png (cream eagle, transparent).

Design: cream eagle centered on a solid brand-navy (#0A3161) rounded square.
The cream-on-transparent art would vanish on light browser tabs, and the
original navy art would vanish on dark tabs; a navy tile reads on both.
Eagle fills 88% of the tile width at <=48px (detail is tiny at 16px) and
80% at larger sizes; corner radius 18% of the tile.
"""
from PIL import Image, ImageDraw, ImageFilter

NAVY = (0x0A, 0x31, 0x61, 255)
logo = Image.open("public/logo/dvv-logo-full.png").convert("RGBA")

def tile(size: int) -> Image.Image:
    ss = size * 8 if size <= 64 else size * 2  # supersample, then downscale
    img = Image.new("RGBA", (ss, ss), (0, 0, 0, 0))
    ImageDraw.Draw(img).rounded_rectangle((0, 0, ss - 1, ss - 1), radius=round(ss * 0.18), fill=NAVY)
    frac = 0.88 if size <= 48 else 0.80
    w = round(ss * frac)
    h = round(logo.height * w / logo.width)
    art = logo.resize((w, h), Image.LANCZOS)
    img.alpha_composite(art, ((ss - w) // 2, (ss - h) // 2))
    out = img.resize((size, size), Image.LANCZOS)
    if size <= 32:
        out = out.filter(ImageFilter.UnsharpMask(radius=0.6, percent=60, threshold=0))
    return out

ico = [tile(s) for s in (16, 32, 48)]
ico[2].save("src/app/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)], append_images=ico[:2])
tile(512).save("src/app/icon.png", optimize=True)
tile(180).save("src/app/apple-icon.png", optimize=True)

# Review sheet: 16 and 32px at 1x and enlarged (nearest), on light and dark tabs.
sheet = Image.new("RGBA", (560, 200), (255, 255, 255, 255))
ImageDraw.Draw(sheet).rectangle((280, 0, 560, 200), fill=(32, 33, 36, 255))
for ox in (0, 280):
    sheet.alpha_composite(ico[0], (ox + 20, 20)); sheet.alpha_composite(ico[1], (ox + 50, 12))
    sheet.alpha_composite(ico[0].resize((96, 96), Image.NEAREST), (ox + 20, 80))
    sheet.alpha_composite(ico[1].resize((96, 96), Image.NEAREST), (ox + 140, 80))
sheet.convert("RGB").save("screenshots/favicon-preview.png")
print("ok")
