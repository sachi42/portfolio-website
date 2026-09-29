# Portfolio Website

A clean, responsive personal portfolio website for Sachi Tripathi built with plain HTML, CSS, and JavaScript.

## Overview

This project showcases:
- software engineering experience
- AI and LLM-focused product work
- skills and achievements
- education and contact details

It is a static website, so it can be served directly without a build process or framework.

## Run locally

From the project root, run:

```bash
npx serve -l 8080 .
```

Then open:

```text
http://localhost:8080
```

## Alternative local server

If you prefer a simple static server command:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Vercel deployment

This project is ready to deploy on Vercel as a static site.

Recommended Vercel setup:
- Framework: None
- Build command: leave empty
- Output directory: leave empty

You can also deploy directly from the repository root with the default static hosting behavior.

## Project files

- `index.html` – page structure and content
- `styles.css` – styling and layout
- `script.js` – interactive behavior
- `favicon.ico` – browser tab icon

## Notes

If you run into 404 errors, make sure the asset filenames match the HTML references exactly, especially for CSS and favicon files.
