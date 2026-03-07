# Next.js Migration Plan — NIT

## Why
- Convert static HTML site to Next.js for SSR/SSG (better SEO)
- Eliminate duplicated header/footer across all 3 pages
- Foundation for future features: auth, database, admin portal, APIs

## Project Structure
```
nit/
  app/
    layout.tsx          # Shared root layout (header + footer)
    globals.css         # All styles (from css/styles.css)
    page.tsx            # Home page
    about/
      page.tsx          # About page
    contact/
      page.tsx          # Contact page
  components/
    Header.tsx          # Nav + mobile menu (React useState)
    Footer.tsx          # Footer
    Accordion.tsx       # About page curriculum accordion
    ContactForm.tsx     # Form with validation + Formspree submit
    ScrollAnimations.tsx # GSAP ScrollTrigger (useEffect)
  public/               # Static assets
```

## Key Changes from Current Site
| Current | Next.js |
|---|---|
| 3 separate HTML files | Shared `layout.tsx` + 3 page components |
| Alpine.js for interactivity | React `useState` / `useEffect` |
| GSAP via CDN | GSAP via `npm install gsap` |
| `<meta>` tags in each HTML file | `export const metadata` per page |
| `css/styles.css` | `app/globals.css` (same content) |
| Static only | SSR/SSG + API routes available |

## Setup Commands
```bash
npx create-next-app@latest . --typescript --tailwind=false --app --src-dir=false
npm install gsap
npm run dev       # localhost:3000
npm run build     # production build check
```

## Future Features (foundation is ready after migration)
- User accounts / student login
- Enrollment form saved to database
- Admin dashboard
- Email notifications
- API routes (Python logic can run in `/api` serverless functions)

## Deployment
Push to `main` → Vercel auto-deploys → live at nebnit.com
No Vercel config changes needed (auto-detects Next.js).

---

# Programmatic SEO Architecture

## SSG Options

| Framework | Best For | JS Shipped |
|---|---|---|
| **Astro** (recommended) | Pure SEO/static, Islands Architecture | Zero by default |
| **Next.js** | Interactive web-app features + ISR | Larger baseline bundle |

Astro's Islands Architecture ships zero JS by default → perfect Core Web Vitals. Use React/Vue only in specific interactive islands.

## Data Layer

| Tool | Use Case |
|---|---|
| **Sanity** (Headless CMS) | Editorial content; GROQ/GraphQL queries; triggers rebuilds on change |
| **Supabase** (PostgreSQL) | Massive structured datasets (directories, listings); instant REST + GraphQL APIs at build time |

## Essential Astro Packages

```bash
npm install astro-seo           # Meta tags, OG, Twitter Cards per programmatic route
npm install @astrojs/sitemap    # Auto-generates sitemap.xml on every build
npm install astro-compress      # Minifies HTML/CSS/JS/SVG at build time
npm install schema-dts          # TypeScript types for Schema.org JSON-LD (structured data)
```

## Asset Optimization
**Cloudinary** — automates image resizing, compression, and WebP/AVIF serving per browser. Image bloat is the #1 killer of static SEO rankings.

## Deployment Options
| Platform | Notes |
|---|---|
| **Cloudflare Pages** | Fastest global CDN; serves HTML from nearest edge node; Git-integrated deploys |
| **Vercel** | Zero-config for Next.js/Astro; intelligent caching; scales with page count |

---

# Algorithmic SEO Principles

## GEO & Entity Mapping
Modern algorithms map entity *relationships*, not just keywords. Dynamically generate JSON-LD structured data that explicitly defines relationships between entities → feeds Knowledge Graph directly, not just blue links.

## Link Graph & Crawl Depth
At scale, SEO is a PageRank math problem. Engineer site architecture to minimize click-depth of high-value pages. Inject internal links on high-authority pages programmatically so newly generated pages are indexed immediately.

## Probabilistic Testing
Deploy structural variations of page templates (different metadata, content block arrangements), monitor which structures the algorithm favors, then programmatically deploy the winning architecture at scale.

---

# Code-First SEO Tool Stack

## Python (Data Pipeline)

```bash
pip install pandas          # Merge datasets → generate URL slugs + content variations
pip install beautifulsoup4  # Scrape competitor SERP footprints, reverse-engineer HTML structures
pip install scrapy          # Large-scale scraping
pip install nltk spacy      # NLP: extract entities, TF-IDF scoring, semantic thresholds
```

## JavaScript/TypeScript (Rendering)
- **Next.js / Nuxt.js** — SSR/SSG prevents crawl budget waste from client-side rendering
- **Node.js** — Backend engine to stream Python-processed data into frontend components

## Data APIs
| API | Use |
|---|---|
| Google Search Console API | Pull click/impression/position data; trigger automated updates to decaying pages |
| DataForSEO / Ahrefs API | Automate backlink analysis, keyword volume, rank tracking from terminal |

---

# AI Model Standards by Task

| Task | Architecture | Key Metrics |
|---|---|---|
| Text / Reasoning / Agents | Transformers (LLMs: GPT, Gemini, Llama) | MMLU, ROUGE/BLEU, Context Precision (RAG) |
| Computer Vision | ViTs (complex) or CNNs/YOLO (real-time edge) | mAP, IoU |
| Generative Media (images/video) | Diffusion Models | FID, CLIP Score |
| Structured Data / Forecasting | Gradient Boosted Trees (XGBoost, LightGBM) | RMSE (regression), ROC-AUC (classification) |

## AI Evaluation Tools (2026)
| Tool | Use |
|---|---|
| **DeepEval / Braintrust** | Dev-first; AI evals as unit tests in CI/CD pipeline |
| **Arize Phoenix** | Open-source observability; detect accuracy drift in live apps |
| **Galileo** | Enterprise; AI evaluates AI for hallucination + factual consistency |
