# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Nebraska Institute of Technology (NIT)** — an electronics training program operating in partnership with Metro TV and Appliance Service. Deployed at `https://nebnit.com`.

Built with **Astro 4** (SSG, static output). Run `npm run dev` for dev server, `npm run build` for production.

## Commands

```bash
npm run dev      # dev server at localhost:4321
npm run build    # static build → dist/
npm run preview  # preview built output
```

## File Structure

```
src/
├── layouts/
│   └── Layout.astro          ← shared head (SEO, fonts), header, footer, scripts
├── components/
│   ├── Header.astro          ← nav with activePage prop
│   ├── Footer.astro          ← footer
│   ├── Accordion.astro       ← vanilla JS accordion (used on about + contact)
│   ├── ContactForm.astro     ← Formspree form (endpoint: xpwdjkwl)
│   └── SchemaOrg.astro       ← JSON-LD injector
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── contact.astro
└── styles/
    └── globals.css           ← single stylesheet with CSS custom properties
public/
├── robots.txt
└── og-default.png            ← 1200×630 OG image
```

## Architecture

**Layout.astro** is the shared shell — it receives `title`, `description`, `ogUrl`, `activePage`, and optional `schema` prop. All SEO meta/OG/Twitter tags are handled via `astro-seo`'s `<SEO>` component inside Layout.

**JavaScript** is vanilla, bundled by Vite (no Alpine, no CDN scripts):
- Mobile nav: `data-nav-toggle` button toggles `open` class on `#mobile-nav`; CSS `.nav-toggle.nav-open .icon-open { display: none }` swaps hamburger/X icons
- Scroll-aware header: adds `.scrolled` to `<header>` when `scrollY > 10` using `requestAnimationFrame`
- Scroll-to-top: toggles `.visible` on `.scroll-top` when `scrollY > 400`
- GSAP ScrollTrigger: animates `.animate-on-scroll` elements (fade + slide, once)

**Accordion** (`Accordion.astro`): receives `items: Array<{id, title, content}>`. Content rendered with `set:html`. Uses `hidden` attribute toggled by vanilla JS; one panel open at a time.

**ContactForm** (`ContactForm.astro`): same validation/submission logic as original Alpine component, ported to vanilla JS. Formspree endpoint: `https://formspree.io/f/xpwdjkwl`.

**JSON-LD schemas**: defined in each page's frontmatter and passed as `schema` prop to Layout → SchemaOrg component injects into `<head>`.

**CSS design tokens**: defined as custom properties on `:root` in `globals.css`. Use `--color-navy`, `--color-accent`, `--space-*`, `--radius-*` etc. rather than hard-coded values.

**Active nav state**: `activePage` prop on Layout/Header; Header computes `isHome`/`isAbout`/`isContact` and applies `class="active"` to the correct link.

## Dependency Notes

- `@astrojs/sitemap` must stay on **3.2.x** — versions 3.5+ use `astro:routes:resolved` hook that doesn't exist in Astro 4.x
- `astro-compress` runs post-build compression on HTML/CSS/JS/images
- `gsap` installed from npm (not CDN), imported as ES module in Layout's `<script>`
