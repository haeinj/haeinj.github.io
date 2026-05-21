# Haein Jung — Academic Site

Static site, no build step. GitHub Pages direct deploy.

## Structure

```
.
├── index.html              # Content only — sections, copy, links
├── assets/
│   ├── css/
│   │   ├── base.css        # :root tokens, reset, body, scrollbar, canvas#bg
│   │   ├── nav.css         # top navigation bar
│   │   ├── sections.css    # about/hero, .sec-header, per-section bg, .reveal
│   │   ├── components.css  # buttons, info-card, res-card, pub-item,
│   │   │                   #   cv-item, contact, footer
│   │   └── responsive.css  # @media (max-width:860px) overrides
│   └── js/
│       ├── canvas-bg.js    # drifting particles (very low opacity)
│       └── reveal.js       # IntersectionObserver reveal + nav highlight
└── README.md
```

## CSS load order

`base → nav → sections → components → responsive`

`responsive.css` must load last so its overrides win.

## Common edits

| Task | File |
|---|---|
| Change copy / add a publication | `index.html` |
| Adjust a color or font | `assets/css/base.css` (`:root` block) |
| Tweak nav bar | `assets/css/nav.css` |
| Style a research card / pub item | `assets/css/components.css` |
| Adjust mobile layout | `assets/css/responsive.css` |
| Change background animation | `assets/js/canvas-bg.js` |

## Adding a publication

In `index.html`, find `<!-- ══ PUBLICATIONS ══ -->`, copy any `.pub-item`
block, and update year / title / journal / authors.
Set `.pub-badge` class to `scie` (published) or `prep` (in preparation).

Place new entries in reverse-chronological order (newest at top).

## Adding a research card

Copy a `.res-card` block inside `.res-grid`. Update `rc-num`, `rc-title`,
`rc-body`, and `rc-tags`. For a full-width card, add the `full` class.

## Deploy

Push to GitHub. Pages serves from repo root.
No build, no bundler, no framework.
