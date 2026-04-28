# IPA Flow Builder (Text → Flow + Editable Diagram + PDF Export)

This is a small React app that lets you:

- 🧠 Build a flow diagram from text (`A -> B -> C` lines)
- ✏️ Edit visually (drag nodes, connect edges, double‑click to rename)
- 🏷 Use IPA‑styled node types (Start / Process / Interview / Decision / Appeal / End)
- 🔐 Toggle Read‑only vs Editing
- 🌐 Share a diagram via a URL hash (the flow JSON is encoded in the link)
- 📄 Export to PNG + PDF (A4 landscape header for audit/AMIF style)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (simple)

1. Push this repo to GitHub
2. In **Settings → Pages**, set the source to **GitHub Actions** or deploy the `dist/` folder.

This template sets `base: './'` in `vite.config.js` for Pages-friendly paths.

## Notes on Export

This app uses **html-to-image** + **jsPDF** for export.
The official React Flow docs include an example exporting with html-to-image, and recommend locking a working version.
