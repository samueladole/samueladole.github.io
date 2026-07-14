# samueladole.github.io

Source for my personal site — [samueladole.github.io](https://samueladole.github.io).

Static HTML, one stylesheet, and a small amount of vanilla JavaScript. No framework, no build step, no dependencies, no web fonts. About 11 KB gzipped.

## Structure

```
index.html            page markup
assets/style.css      design tokens and layout
assets/theme.js       theme toggle, scrollspy
Samuel_Adole_Resume.pdf   CV
```

## Running locally

```bash
python3 -m http.server
```

Then open `localhost:8000`.

## Deployment

Deployed with GitHub Pages from `main` (root). Any push to `main` publishes.

## Theming

All colour, type and layout values are CSS custom properties in the `:root` block at the top of `assets/style.css`. Changing `--accent` recolours links, buttons, timeline markers and focus states across both the light and dark palettes.

The site follows the OS colour scheme by default, persists a manual preference, and applies it before first paint. It also carries a print stylesheet, so the page prints as a clean one-column CV.