# Dog Haven Group Production Image Audit

Internal audit for the production image recovery phase.

## Configuration

Next.js image optimisation is disabled with `images.unoptimized: true` in `next.config.mjs` because the live Vercel project exhausted its included Image Optimization transformation allowance. The site continues to use `next/image`, but rendered production image URLs should now point directly to files in `public/` rather than `/_next/image`.

## Key Production Assets

| Asset | Format | Dimensions | Size | Use | Result |
| --- | --- | ---: | ---: | --- | --- |
| `/brand/dog-haven-group-logo-128.png` | PNG | 128x128 | 33 KB | Header, footer, print/tool branding | Added for direct delivery at small UI sizes |
| `/brand/dog-haven-group-logo-512.png` | PNG | 512x512 | 485 KB | Schema and default Open Graph fallback | Added from approved logo master |
| `/brand/dog-haven-group-logo.png` | PNG | 1254x1254 | 2.3 MB | Approved logo master | Preserved, no longer used for small UI delivery |
| `/brand/dog-haven-group-boxer-head-clean.webp` | WebP | browser verified | 134 KB | Boxer visual | Preserved |
| `/favicon.ico` | ICO | 32x32 | 3 KB | Browser favicon | Present |
| `/icon.png` | PNG | 32x32 | 3 KB | App icon metadata | Present |
| `/apple-icon.png` | PNG | 180x180 | 60 KB | Apple touch icon | Present |
| `/images/doghavengroup/home/mother-site-architecture-global-network.jpg` | JPG | 1448x1086 | 70 KB | Homepage architecture section | Preserved |
| `/images/doghavengroup/home/dog-haven-group-core-sections-platform.webp` | WebP | 1448x1086 | 83 KB | Homepage core sections | Preserved |
| `/images/doghavengroup/countries/dog-haven-south-africa-country-gateway-map.webp` | WebP | 1448x1086 | 51 KB | Homepage and country gateway imagery | Preserved |
| `/images/doghavengroup/countries/dog-haven-united-states-country-gateway-map.webp` | WebP | 1536x1024 | 67 KB | Homepage and country gateway imagery | Preserved |
| `/images/doghavengroup/countries/dog-haven-italy-country-gateway-map.webp` | WebP | 1536x1024 | 71 KB | Homepage and country gateway imagery | Preserved |
| `/images/doghavengroup/**/*.svg` | SVG | mostly 1600x1000 viewBox | about 1.6 KB each | Academy, country, travel, Lab, Journal and Download visuals | Preserved |

## Optimisation Decision

Only the small repeated logo delivery needed optimisation. The approved high-resolution logo master remains available, but header, footer, print branding and default metadata now use smaller derived assets. Other raster page images are already modest in file size. SVG artwork is lightweight and does not need compression.

## QA Requirements

Browser QA and production SEO checks must confirm:

- no rendered local image uses `/_next/image`
- no image returns HTTP 402
- no image returns HTTP 404
- meaningful images load with dimensions
- header and footer logos display
- metadata icons exist

