# CONCOST website replica

Static, GitHub Pages-ready recreation of `http://www.con-cost.com/`.

## Implemented

- Responsive global navigation with desktop dropdowns and mobile drawer
- Korean/English language toggle
- Home visual rotation and business carousel
- Company, business, CAD, PR, customer support, and policy pages
- News and downloads boards with search, pagination, and detail views
- Quote request form with privacy consent, validation, email domain helper, phone checks, and local draft storage
- Scroll-to-top button and deep-link routing

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deploy

The project has no build step. Enable GitHub Pages for the repository and publish from the `main` branch root.
