# Heloisa Romao — Portfolio

Senior Product Designer portfolio. Static HTML/CSS/vanilla JS, no build step.

## Design direction

Warm paper background, ink text, one clay/rust accent used like a design
token. The site reads as a spec document: mono labels, numbered case
study fields, a "spec sheet" header on every project (role, company,
tools, status). Real cover photography on the homepage and at the top
of each case study, with restrained motion: scroll-reveal on section
entry, a hover image-peek on the homepage work list, a subtle parallax
drift on case study hero banners, and a nav that hides on scroll-down.

## Structure

```
index.html           Homepage — hero, work list with hover previews, footer
about.html            About
contact.html          Contact
case-*.html           6 case studies, each with a full-bleed hero banner
css/
  tokens.css          Colors, type, nav, buttons, footer, motion primitives
  home.css            Homepage hero + work list + hover preview + strip
  case.css            Case study template (hero banner, spec sheet, metrics)
  about.css           About page styles
  contact.css          Contact page styles
js/
  motion.js           Scroll reveals, hero load-in, nav hide, parallax
images/
  covers/             Cover photography for homepage previews + case hero banners
  README.txt          Notes on remaining Wix-hosted images in case study bodies
```

## Local preview

```
python3 -m http.server 8080
```

## Deploying

GitHub Pages — repo Settings → Pages, source: Deploy from branch `main`,
folder `/ (root)`.

## Notes

- Respects `prefers-reduced-motion` — disables reveals, parallax, and
  load animations for users with that OS setting on.
- Hover image previews on the homepage work list are hidden below
  900px width (mobile/tablet), since hover doesn't apply on touch.
- The images inside each case study body (process diagrams, UI flows)
  still link to the old Wix-hosted site. See `images/README.txt` for
  migration steps before retiring the old site. The cover/hero images
  are already local (`images/covers/`) and don't depend on Wix.
