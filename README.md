# Umiyajee Fabrication – Website
React + Vite + React Three Fiber. Static site, no backend.

## Run locally
```
npm install
npm run dev        # http://localhost:5173
```
## Build & deploy
```
npm run build      # outputs dist/
```
Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own hosting). Point your domain at the host (DNS A/CNAME records per host instructions). Relative base is set, so subfolder hosting works.

## Edit content
- `src/data/company.js` – name, phone, WhatsApp (digits only, e.g. 919876543210), address, map embed URL, headline, areas.
- `src/data/services.js`, `src/data/projects.js` – replace `ph('…')` with real photos: put files in `src/assets/images/`, `import gate from '../assets/images/gate.jpg'`.
- Logo: add file to `src/assets/logo/` and replace the `.logo-slot` span in Header.jsx / Footer.jsx with an `<img>`.
- Resize photos to ~800px wide (WebP/JPEG) before adding.
