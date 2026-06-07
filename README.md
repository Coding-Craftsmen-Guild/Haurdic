# Haurdić – The Furniture Company

**A complete, modern, bilingual website redesign for Haurdić, the premier custom upholstered furniture maker in Slavonski Brod, Croatia (est. 1966).**

Three generations of master craftsmanship. Bespoke sofas, hospitality seating, beds, and full interior projects — all made with obsessive attention to quality and delivered with pride.

## What’s Included

- Stunning hero + heritage storytelling
- Bilingual (English / Croatian) with instant toggle — all copy, projects, and testimonials fully translated
- 9 beautifully documented real projects with rich details and multiple images each
- Elegant 5-step process visualization
- 5 heartfelt client testimonials
- Professional contact form (ready for Formspree or Netlify Forms)
- Fully responsive, mobile-perfect, accessible
- Zero build step — pure static HTML + Tailwind via CDN + vanilla JS

## Quick Start

1. Open `index.html` directly in any modern browser (double-click).
2. Or serve locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Everything works offline. No dependencies.

## Easy Customization

**Projects**  
Edit `/data/projects.js`. Add or modify objects. Use existing image filenames from `assets/images/`.

**Testimonials**  
Edit `/data/testimonials.js`.

**Colors & Typography**  
Main styles live in the `<style>` block in `index.html` and `css/styles.css`. The palette is warm walnut, cream, aged gold — timeless luxury.

**Contact Form**  
Currently shows a beautiful success state. To make it send real emails:
- Use [Formspree](https://formspree.io) (free for low volume) — change the form `action`.
- Or Netlify / Vercel Forms (one-line setup when deploying).

## Deployment (2 minutes)

### Netlify (Recommended)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `haurdic-website` folder
3. Done. You get a beautiful `*.netlify.app` URL instantly. Custom domain possible later.

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages / Any static host
Just upload the folder. Works everywhere.

## Design Philosophy

- **Warm minimalism** — generous whitespace, rich materials, photography-led
- **Heritage with modernity** — classic serif accents + clean sans, like the furniture itself
- **Trust signals everywhere** — real projects, real people, real numbers, real process
- **Conversion focused** — clear CTAs, frictionless quote request, mobile-first

## Image Credits

All 15 hero and project images were custom-generated to perfectly match the Haurdić brand voice and quality level. They are original assets for this site.

## Next Steps (Optional Polish)

- Add a real Google Maps embed or static map image
- Connect the contact form to Formspree (see comment in HTML)
- Add Instagram feed section (can use public RSS or manual images)
- Create a simple `/hr` folder or subdomain for pure Croatian SEO if desired
- Export a PDF price list / brochure from the same content

## Contact the Team

**Haurdić – The Furniture Company**  
Dr. Andrije Štampara 49  
Slavonski Brod, Croatia  

+385 98 990 7117  
teo@haurdic.com  
Instagram: [@haurdic.furniture](https://www.instagram.com/haurdic.furniture/)

---

Built with care for three generations of Haurdić craftsmen.  
May this site bring you many more beautiful projects.

© 2026 Haurdić. All rights reserved.
