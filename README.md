# PRISM marketing site

This is a small Vite + React scaffold for the PRISM website. It uses the Tailwind CDN for styling (so you don't need to run Tailwind compilation). The UI code is in `src/App.jsx` (the code you provided).

Quick setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Deploy to GitHub Pages

Make sure this repository is pushed to GitHub at `https://github.com/prism-tech-vet/prism` (same as the `repository`/`homepage` configured in `package.json`). Then run:

```bash
npm run deploy
```

The `deploy` script uses the `gh-pages` package and will publish the `dist` directory to the `gh-pages` branch. After deployment, GitHub Pages will serve the site from the `gh-pages` branch at `https://prism-tech-vet.github.io/prism`.

Notes

- Tailwind: the project uses the Tailwind CDN (in `index.html`) so you can use Tailwind utility classes without Tailwind build setup. If you prefer to use a proper Tailwind build pipeline, I can add it.
- If you prefer to serve from `main` branch / `docs/` folder instead of `gh-pages`, I can change scripts accordingly.
