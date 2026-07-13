# samueladole.github.io

Personal portfolio site. Static HTML + one stylesheet + ~2 KB of JavaScript. No build step, no framework, no dependencies, no web fonts.

```
index.html            the whole page
assets/style.css      design tokens + layout
assets/theme.js       dark/light toggle, scrollspy, footer year
```

Roughly **11 KB gzipped** in total. It will load instantly on anything.

---

## Deploy to GitHub Pages

**As your main site** (`https://samueladole.github.io`):

1. Create a public repo named exactly **`samueladole.github.io`**.
2. Push these files to the root of `main`.
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)` → Save.
4. Live in about a minute.

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin git@github.com:samueladole/samueladole.github.io.git
git push -u origin main
```

**As a project site** (`https://samueladole.github.io/portfolio`): name the repo anything you like and update the `canonical` / `og:url` tags in `index.html`.

**Custom domain** (e.g. `samueladole.dev`): add a file called `CNAME` containing just the domain, point an `ALIAS`/`ANNAME` record at `samueladole.github.io`, then tick "Enforce HTTPS" in Settings → Pages.

---

## Before you go live — three things

**1. Add your CV.** The "Download CV" button links to `Samuel_Adole_CV.pdf` in the repo root. Export the Word CV to PDF, name it that, and commit it. (Or delete that `<a>` from the `.actions` block in `index.html`.)

**2. Vendor the avatar.** Right now the page pulls your photo from `github.com/samueladole.png` — one third-party request. To make the page fully self-contained:

```bash
curl -L -o assets/avatar.jpg "https://github.com/samueladole.png?size=400"
```

then change the `src` in `index.html` to `assets/avatar.jpg`, and the `og:image` too.

**3. Check the two GitHub project links.** In the Projects section, RAGScope and the road-traffic causal inference project both point at your profile as a placeholder. Swap in the real repo URLs — or drop the links if those repos are still private.

---

## Customising the theme

Everything is in the token block at the top of `assets/style.css`. You shouldn't need to touch anything below it.

**Change the accent colour** — one line drives links, buttons, the timeline markers, focus rings and hover states:

```css
--accent:      #2647c7;   /* light mode */
--accent-dark: #8aa4ff;   /* a lighter tint of the same hue, for dark mode */
```

Alternatives that suit the layout:

| Accent  | Light     | Dark      |
| ------- | --------- | --------- |
| Cobalt  | `#2647c7` | `#8aa4ff` |
| Teal    | `#0e7c73` | `#54c9bd` |
| Plum    | `#6b3fa0` | `#b593e8` |
| Slate   | `#33506b` | `#94b3d1` |
| Crimson | `#b03348` | `#f08a9c` |

**Other knobs:**

| Token          | Does what                                                    |
| -------------- | ------------------------------------------------------------ |
| `--radius`     | Corner rounding on cards and buttons. `0` gives a sharper, more editorial feel. |
| `--measure`    | Width of the content column (`50rem` ≈ 800px).                |
| `--when-col`   | Width of the left-hand date column.                          |
| `--section-gap`| Vertical breathing room between sections.                    |
| `--step-3`     | Size of your name in the hero.                               |
| `--font-sans` / `--font-mono` | Typefaces. Both use system stacks, so nothing is downloaded. If you want a webfont, self-host a `woff2` rather than calling Google Fonts — it keeps the site fast and avoids the third-party request. |

The light and dark palettes are two small blocks under the tokens (`[data-theme="light"]` and `[data-theme="dark"]`). Every surface, hairline and text colour is named, so recolouring the whole site is a dozen values.

---

## Notes

- **Dark mode** follows the OS by default, remembers a manual choice in `localStorage`, and applies before first paint — no flash.
- **Printing** the page (⌘P) produces a clean one-column CV: nav, buttons and status pill drop out, colours go to black-on-white, entries don't break across pages.
- **Accessibility**: semantic landmarks, skip link, visible focus rings, `prefers-reduced-motion` respected, AA contrast in both themes.
- **SEO**: description, canonical, Open Graph, and JSON-LD `Person` schema so Google can associate the site with your name, GitHub and LinkedIn.

To preview locally: `python3 -m http.server` then open `localhost:8000`.
