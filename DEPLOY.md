# Haurdić — Instant Deployment Guide

This is a **zero-build, zero-dependency** static website. It works perfectly when opened directly or hosted anywhere.

## Fastest Way (Recommended)

### Netlify Drop (30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag the entire `haurdic-website` folder onto the page
3. Done. You instantly receive a beautiful public URL (e.g. `haurdic-xyz.netlify.app`)

You can add a custom domain later in Netlify settings.

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages / Cloudflare Pages / Any Static Host
Simply upload the folder contents. Works everywhere.

## Local Preview

```bash
# Option 1 (recommended)
npx serve .

# Option 2
python3 -m http.server 8000

# Option 3 (macOS)
open index.html
```

## Making the Contact Form Live

Currently the form shows a beautiful success message (demo mode).

To receive real emails:

### Option A: Formspree (easiest, free)
1. Create a free account at https://formspree.io
2. Create a new form → copy the endpoint URL
3. In `index.html`, change the form tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
   ```
4. Redeploy

### Option B: Netlify Forms (when using Netlify)
Add `netlify` attribute to the form and a hidden input. Netlify will handle submissions automatically.

## Bilingual Notes

The entire site (copy + projects + testimonials) switches instantly between English and Croatian. No page reload.

## Images

All 15 images are original, high-resolution assets generated specifically for this brand presentation.

## Need Changes?

- Edit project descriptions → `data/projects.js`
- Edit testimonials → `data/testimonials.js`
- Colors / typography → `css/styles.css` and the `<style>` / Tailwind config in `index.html`

---

Built for Haurdić with care. Ready for the world.
